/// <reference types="react-scripts" />
/// <reference types="react" />

declare namespace Router {
    interface IRouteQuery {
        [key: string]: string;
    }

    interface IRouteParams {
        [key: string]: string;
    }

    interface IRouteState {
        [key: string]: any;
    }

    interface IRouterContextValue {
        route: IRoute;
        changeRoute: ChangeRoute;
    }

    interface IRouteContextValue extends IRoute {
        params: IRouteParams;
    }

    interface IRoute {
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

    interface IRouteProps {
        path: string;
        render: React.FC;
    }

    type MatchRoute = () => { matches: boolean, params: IRouteParams }
    type GenerateParams = () => IRouteParams;
    type ChangeRoute = (path: string, state?: IRouteState) => void;
    type Link = React.FC<ILinkProps>;
    type Route = React.FC<IRouteProps>
}