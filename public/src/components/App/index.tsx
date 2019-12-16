/**
 * @file Application root component
 * @version 1.0.0
 */

import * as React from 'react';

import { DashboardPage } from '../DashboardPage';
import { LandingPage } from '../LandingPage';
import { LoginPage } from '../LoginPage';
import { ProtectedRoute } from '../ProtectedRoute';
import { Route } from '../Route';

export const App: React.FC = () => {
    return (
        <div>
            <Route path='/' exact render={LandingPage}></Route>
            <Route path='/login' render={LoginPage}></Route>
            <ProtectedRoute path='/dashboard' render={DashboardPage}></ProtectedRoute>
        </div>
    );
};
