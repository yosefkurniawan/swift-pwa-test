import { makeStyles } from "@material-ui/core/styles";
import { GRAY_PRIMARY, WHITE } from "../../../../theme/colors";
const useStyles = makeStyles(theme => ({
  caraousel: {
    padding: 20,
    width: "100%",
    height: "100%",
    position : 'relative'
  },
  dots: {
    zIndex: 2,
    display: "flex",
    flexDirection : 'row',
    position : 'absolute',
    justifyContent : 'space-arround',
    bottom : '15vh',
    left : '50%',
    transform: 'translate(-50%, -50%)'
  },      
  dotsItem: {
    width: 17,
    height: 17,
    border: `3px solid ${WHITE}`,
    borderRadius: 100,
    backgroundColor : 'transparent',
    margin : 5,
    cursor : 'pointer'
  },
  dotActive : {
    backgroundColor : GRAY_PRIMARY
  },
  hide : {
    display : 'none'
  }
}));

export default useStyles;
