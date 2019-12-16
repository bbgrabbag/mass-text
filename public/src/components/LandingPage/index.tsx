import * as React from 'react';
import { useAuth, useRoute, useRouter } from '../../lib/';

const useLanding = () => {
    const auth = useAuth();
    const router = useRouter();
    const route = useRoute();

    const initialize = () => {
        if (route.query.apiToken !== undefined && !localStorage.getItem('bearer-token')) {
            localStorage.setItem('bearer-token', route.query.apiToken);
        }
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
export const LandingPage = () => {
    useLanding();
    return (
        <div>
            <h3>Welcome to Mass Text</h3>
            <p>Please wait while we load your profile</p>
        </div>
    );
};
