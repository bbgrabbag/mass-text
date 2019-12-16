import * as React from 'react';

import { Paths } from '../../../globals';
import { protectedClient, publicClient } from '../../../lib';

export const useAuthProvider = (): Auth.ContextValue => {

    const [user, setUser] = React.useState({} as Models.IUser);
    const loadUserProfile = async () => {
        return await protectedClient.get<Models.IUser>(Paths.Profile)
            .then((data) => data.json())
            .then((profile) => { setUser(profile); });
    };
    const logout = () => {
        localStorage.removeItem('bearer-token');
        setUser({} as Models.IUser);
    };

    const [googleOAuthLink, setOauthLink] = React.useState('');
    const getOAuthLink = async () => {
        return await publicClient.get<Resources.IGoogleOAuth>(Paths.OAuthLink)
            .then((data) => data.json())
            .then((oAuth) => { setOauthLink(oAuth.link); });
    };

    return {
        getOAuthLink,
        googleOAuthLink,
        loadUserProfile,
        logout,
        user,
    };
};
