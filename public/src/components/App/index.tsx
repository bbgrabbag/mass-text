/**
 * @file Application root component
 * @version 1.0.0
 */

import * as React from 'react';
import { Link, Route } from '../';
import { useAuth, useRoute, useRouter } from '../../lib';

const Test: React.FC = (props) => {
    const route = useRoute();
    return (
        <p>{JSON.stringify(route.params)}</p>
    );
};
export const App: React.FC = () => {
    const router = useRouter();
    const auth = useAuth();

    return (
        <div className='App'>
        </div>
    );
};
