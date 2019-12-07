/**
 * @file
 * @version
 */

import * as React from 'react';
import { AuthContext, useAuthProvider } from './lib';

export const AuthProvider: React.FC = (props) => {
    const value = useAuthProvider();
    return (
        <AuthContext.Provider value={value} >
            {props.children}
        </AuthContext.Provider >
    );
};

export const useAuth = (): Auth.ContextValue => {
    const xhr = React.useContext(AuthContext);
    return xhr;
};
