/**
 * @file Provide theme/styles for application
 * @version 1.0.0
 */

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { theme } from './lib/';

export const StyleProvider: React.FC = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    );
};
