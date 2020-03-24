import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { GRAY_PRIMARY, PRIMARY, SECONDARY, WHITE } from './colors'
import { FONT_24, FONT_DEFAULT } from "./typography";

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: PRIMARY,
        },
        secondary: {
            main: SECONDARY
        },
        error: {
            main: red.A400
        },
        background: {
            default: WHITE
        }
    },
    overrides : {
        MuiGrid : {
            root : {
                padding : 0,
                margin : 0
            }
        },
        MuiTextField : {
            root : {
                borderBottom : `1px solid ${PRIMARY}`,
                '&placeholder' : {
                    fontWeight : '500',
                    color : GRAY_PRIMARY
                }
            },
        },
        MuiTypography : {
            h1 : {
                ...FONT_24,
                ...FONT_DEFAULT
            }
        }
    },
    props: {
        MuiTypography: {
          variantMapping: {
            h1: 'h1',
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
        }
      },
});

export default theme;
