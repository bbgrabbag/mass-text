import * as React from 'react';

import { useAuth, useRouter } from '../../lib';
import { Route } from '../Route';

const useProtectedRoute = (redirectTo: string): Router.IProtectedRoute => {
    const auth = useAuth();
    const router = useRouter();

    const isAuthenticated = !!auth.user._id;

    React.useEffect(() => {
        if (!isAuthenticated && router.route.path !== redirectTo) {
            router.changeRoute(redirectTo);
        }
    }, [isAuthenticated, redirectTo, router]);

    return {
        isAuthenticated,
    };
};

export const ProtectedRoute: Router.Route = ({ render: C, ...props }) => {

    const Redirect = () => {
        const route = useProtectedRoute('/');

        if (!route.isAuthenticated) {
            return null;
        }
        return <C />;
    };

    return (
        <Route render={Redirect} {...props} />
    );
};
