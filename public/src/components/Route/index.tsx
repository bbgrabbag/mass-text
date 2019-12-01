import * as React from 'react';

import { useRouter } from '../../lib';

const RouteContext = React.createContext({} as Router.IRouteContextValue);

export const Route: Router.Route = ({ render: C, ...props }) => {
    const router = useRouter();

    const matchRoute: Router.MatchRoute = () => {
        let matches: boolean = true;
        let params: Router.IRouteParams = {};

        const queryIndex = router.route.path.indexOf('?');
        const globalParams = router.route.path.slice(0, queryIndex < 0 ? undefined : queryIndex)
            .split('/')
            .filter((p) => p !== '');
        const routeParams = props.path.split('/')
            .filter((p) => p !== '');

        for (let i = 0; i < routeParams.length; i++) {

            if (globalParams[i] === undefined) {
                matches = false;
                params = {};
                break;
            }

            if (routeParams[i].indexOf(':') === 0) {
                params[routeParams[i].slice(1)] = globalParams[i];
                break;
            }

            if (routeParams[i] !== globalParams[i]) {
                matches = false;
                break;
            }
        }
        return { matches, params };
    };

    const match = matchRoute();
    const value: Router.IRouteContextValue = { params: match.params, ...router.route };

    return (

        <RouteContext.Provider value={value}>
            {match.matches && <C />}
        </RouteContext.Provider>
    );
};

export const useRoute = (): Router.IRouteContextValue => {
    const value = React.useContext(RouteContext);

    return value;
};
