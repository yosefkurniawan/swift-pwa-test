import { makeStyles } from "@material-ui/core/styles";
import { GRAY_PRIMARY, WHITE } from "../../../theme/colors";
const useStyles = makeStyles(theme => ({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: GRAY_PRIMARY
  },
  header: {
    backgroundColor: GRAY_PRIMARY,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative"
  },
  logo: {
    position: "absolute",
    zIndex : 99
  },
  titleLogo: {
    fontWeight: "bold",
    fontFamily: "Playfair Display",
    color : WHITE
  }
}));

export default useStyles;
