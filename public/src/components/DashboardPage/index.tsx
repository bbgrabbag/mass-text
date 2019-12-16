import * as React from 'react';

import { useAuth } from '../../lib';

export const DashboardPage = () => {
    const auth = useAuth();
    return (
        <div>
            <h3>{JSON.stringify(auth.user.name)}</h3>
            <p>{JSON.stringify(auth.user)}</p>
            <button onClick={auth.logout}>Logout</button>
        </div>
    );
};
