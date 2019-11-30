/**
 * @file Application root component
 * @version 1.0.0
 */

import * as React from 'react';
import { Link } from '../';
import { useRouter } from '../../lib';

export const App: React.FC = () => {
    const router = useRouter();
    return (
        <div className='App'>
            {JSON.stringify(router.route)}
            <Link to={{ path: '/test/?foo=bar&foos=bars', state: { test: 'test' } }}>test</Link>
            <Link to={{ path: '/test/again/?foo=bar', state: { again: 'again' } }}>again</Link>
            <Link to={{ path: '/', state: {} }}>reset</Link>
            <Link to={{ path: '/test?', state: {} }}>reset</Link>
        </div>
    );
};
