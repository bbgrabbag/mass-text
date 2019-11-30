/**
 * @file Theme configuration
 * @version 1.0.0
 */

import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        background: {
            default: '#fff',
        },
        error: {
            main: red.A400,
        },
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
    },
});
