/// <reference types="react-scripts" />
/// <reference types="react" />

declare namespace Router {
    interface IRouteQuery {
        [key: string]: string;
    }
    interface IRouteParams {

    }
    interface IRouteState {

    }
    interface IRouterContextValue {
        route: IRoute;
        changeRoute: ChangeRoute;
    }
    interface IRoute {
        params: IRouteParams;
        query: IRouteQuery;
        path: string;
        state: IRouteState;
    }

    interface ILinkProps extends React.ButtonHTMLAttributes<T> {
        to: {
            path: string;
            state?: IRouteState
        }
    }

    type ChangeRoute = (path: string, state?: IRouteState) => void;
    type Link = React.FC<ILinkProps>;

}