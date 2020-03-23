import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "60%"
  },
  iconButton: {
    padding: 10
  },
  dialogContent: {
    padding: 15,
    textAlign: "center"
  }
}));

export default useStyles;
