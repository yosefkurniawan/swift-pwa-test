import { makeStyles } from "@material-ui/core/styles";
import { FONT_12 } from "../../../theme/typography";
const useStyles = makeStyles(theme => ({
  root: {
    margin: 5
  },
  p: {
    fontSize: 10,
    color: theme.palette.primary,
    fontWeight: "400"
  },
  h1: {
    fontWeight: "bold",
    'text-transform' : 'uppercase'
  },
  span: {
    fontSize: FONT_12,
    color: theme.palette.primary,
    fontWeight: "400",
    margin: 5,
    'text-transform' : 'capitalize'
  },
  title: {
    fontSize: 16
  },
  bold: {
    fontWeight: "bold"
  },
  semiBold: {
    fontWeight: "500"
  },
  italic: {
    fontStyle: "italic"
  }
}));

export default useStyles;
