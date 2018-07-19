import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey, blue, cyan, teal } from '@material-ui/core/colors';

const customMuiTheme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: grey
    }
});

export default customMuiTheme;