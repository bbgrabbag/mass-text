/**
 * @file Application root component
 * @version 1.0.0
 */

import * as React from 'react';
import { Link, Route } from '../';
import { useRoute, useRouter } from '../../lib';

const Test: React.FC = (props) => {
    const route = useRoute();
    return (
        <p>{JSON.stringify(route.params)}</p>
    );
};
export const App: React.FC = () => {
    const router = useRouter();
    return (
        <div className='App'>
            {JSON.stringify(router.route)}
            <Link to={{ path: '/' }}>base</Link>
            <Link to={{ path: '/#contacts?foo=bar' }}>test</Link>
            <Link to={{ path: '/#contacts/qxi76fefi7q34f' }}>test</Link>

            <Route path='/' render={Test} />
            <Route path='/#contacts' render={Test} />
            <Route path='/#contacts/:id' render={Test} />

        </div>
    );
};
