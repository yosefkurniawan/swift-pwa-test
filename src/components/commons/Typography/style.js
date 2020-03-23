import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root : {
    margin : 5
  },
  p: {
    fontSize: 10,
    color: theme.palette.primary,
    fontWeight: "400"
  },
  h1: {
    fontWeight: "bold"
  },
  span: {
    fontSize: 12,
    color: theme.palette.primary,
    fontWeight: "400",
    margin: 5
  },
  title : {
    fontSize : 16,
  },
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  }
}));

export default useStyles;
