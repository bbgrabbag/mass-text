import * as React from 'react';

import { Paths } from '../../../globals';
import { protectedClient } from '../../../lib';

export const useAuthProvider = (): Auth.ContextValue => {

    const [user, setUser] = React.useState();
    const loadUserProfile = async () => {
        return await protectedClient.get<Models.IUser>(Paths.Profile)
            .then((data) => data.json())
            .then((profile) => { setUser(profile); });
    };

    const [googleOAuthLink, setOauthLink] = React.useState('');

    return {
        googleOAuthLink,
        loadUserProfile,
        user,
    };
};
