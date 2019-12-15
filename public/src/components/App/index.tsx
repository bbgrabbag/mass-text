/**
 * @file Application root component
 * @version 1.0.0
 */

import * as React from 'react';
import { Paths } from '../../globals';
import { protectedClient } from '../../lib';
import { useAuth, useRouter } from '../../lib/';
import { Route } from '../Route';

const useApp = () => {
    const auth = useAuth();
    const router = useRouter();

    const initialize = () => {
        auth.loadUserProfile()
            .then(() => {
                router.changeRoute('/dashboard');
            })
            .catch(() => {
                router.changeRoute('/login');
            });
    };
    React.useEffect(initialize, []);
};
export const App: React.FC = () => {
    useApp();
    return (
        <div>
            <Route path='/' exact render={() => <div>Landing. Please wait while we load your profile</div>}></Route>
            <Route path='/login' render={() => <div>Login</div>}></Route>
            <Route path='/dashboard' render={() => <div>Dashboard</div>}></Route>
        </div>
    );
};
