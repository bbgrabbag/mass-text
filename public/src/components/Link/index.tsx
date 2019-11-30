import * as React from 'react';
import { useRouter } from '../../lib';

export const Link: Router.Link = ({ children, to, ...props }) => {
    const router = useRouter();
    return (
        <button
            onClick={() => router.changeRoute(to.path, to.state)}{...props}>
            {children}
        </button>
    );
};
