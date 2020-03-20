import { makeStyles } from "@material-ui/core/styles";
import { GRAY_PRIMARY } from "../../../theme/colors";
const useStyles = makeStyles(theme => ({
  container: {
    width: "100vh",
    height: "100vw",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    backgroundColor: GRAY_PRIMARY,
    height: '100%',
    width: '100%',
    display : 'flex',
    justifyContent : "center",
    position : 'relative'
  },
  logo : {
      position : 'absolute',
    
  }

}));

export default useStyles;
