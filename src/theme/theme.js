import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#818181"
        },
        error: {
            main: red.A400
        },
        background: {
            default: "#fff"
        }
    },
    overrides : {
        MuiGrid : {
            root : {
                padding : 0,
                margin : 0
            }
        }
    },
    props: {
        MuiTypography: {
          variantMapping: {
            h1: 'h3',
            h2: 'h3',
            h3: 'h3',
            h4: 'h3',
            h5: 'h3',
            h6: 'h3',
            subtitle1: 'h3',
            subtitle2: 'h3',
            body1: 'span',
            body2: 'span',
          },
        },
      },

});

export default theme;
