import * as React from 'react';

import { useAuthLink } from './lib';
export const LoginPage = () => {
    const oauth = useAuthLink();
    // load auth link
    const renderLoginButton = () => {
        return (
            <a href={oauth.link}>Login</a>
        );
    };

    if (oauth.loading) { return <div>...Loading</div>; }
    return (
        <div>
            {renderLoginButton()}
        </div>
    );
};
