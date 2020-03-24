import { makeStyles } from "@material-ui/core/styles";
import { GRAY_PRIMARY, WHITE } from "../../../../theme/colors";
const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    height: "100%",
    position : 'relative',
    backgroundColor : WHITE
  },
  caraousel : {
    padding : '0 55px'
  },
  slideContainer  : {
    padding : '0 15px',
  },
  itemContainer : {
      minWidth : 233,
      maxWidth : '80%',
      display : 'flex',
      flexDirection : 'column',
      height : '100%'
  },
  imgItem : {
      width : '100%',
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      height : 288,
      backgroundColor : GRAY_PRIMARY,
  },
  detailItem : {
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center',
      height : 150,
  }
}));

export default useStyles;
