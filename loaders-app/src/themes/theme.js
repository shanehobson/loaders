import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey, teal, blue } from '@material-ui/core/colors';

const customMuiTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: grey
    }
});

export default customMuiTheme;