import { makeStyles } from "@material-ui/core/styles";
import { FONT_12 } from "../../../theme/typography";
import { PRIMARY } from "../../../theme/colors";
const useStyles = makeStyles(theme => ({
  root: {
    margin: 5,
    color: PRIMARY,
  },
  p: {
    fontSize: 10,
    fontWeight: "400"
  },
  h1: {
    fontWeight: "bold",
    'text-transform' : 'uppercase'
  },
  span: {
    fontSize: FONT_12,
    fontWeight: "400",
    margin: 5,
    'text-transform' : 'capitalize'
  },
  capitalize : {
    'text-transform' : 'capitalize'
  },
  uppercase : {
    'text-transform' : 'uppercase'
  },
  lowercase : {
    'text-transform' : 'lowercase'
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
