/**
 * @file Hook which provides router context value
 * @version 1.0.0
 */

import * as React from 'react';

const buildQueryObj = (path: string): Router.IRouteQuery => {
    const output = {} as Router.IRouteQuery;
    const searchParams = new URLSearchParams(path.split('?')[1]);

    for (const [key, value] of searchParams.entries()) {
        output[key] = value;
    }

    return output;
};

export const useRouteProvider = (): Router.IRouterContextValue => {
    const BASE_URL = '/';

    const initialState: Router.IRoute = {
        path: BASE_URL,
        query: {},
        state: {},
    };

    const [route, setRoute] = React.useState(initialState);

    React.useEffect(() => {
        window.onpopstate = (e: PopStateEvent) => setRoute(e.state);
    }, [route]);

    const changeRoute: Router.ChangeRoute = (path, state = { ...route.state }) => {
        const query = buildQueryObj(path);
        const nextRoute = { ...route, query, path, state };
        window.history.pushState(nextRoute, 'route-change', path);
        setRoute(nextRoute);
    };

    return {
        changeRoute,
        route,
    };
};
