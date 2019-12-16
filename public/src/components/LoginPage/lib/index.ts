import * as React from 'react';

import { useAuth } from '../../../lib';

export const useAuthLink = () => {
    const auth = useAuth();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const getAuthLink = () => {
            auth.getOAuthLink()
                .then(() => setLoading(false));
        };
        if (!auth.googleOAuthLink) {
            getAuthLink();
        }
    }, [auth]);

    return {
        link: auth.googleOAuthLink,
        loading,
    };
};
