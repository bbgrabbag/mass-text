/**
 * @file SPA Routing functionalities
 * @version 1.0.0
 */

import * as React from 'react';
import { RouterContext, useRouteProvider } from './lib';

export const RouteProvider: React.FC = (props) => {
    const value = useRouteProvider();
    return (
        <RouterContext.Provider value={value}>
            {props.children}
        </RouterContext.Provider>
    );
};

export const useRouter = (): Router.IRouterContextValue => {
    const value = React.useContext(RouterContext);
    return value;
};
