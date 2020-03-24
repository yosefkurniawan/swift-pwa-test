import { makeStyles } from "@material-ui/core/styles";
import { Centering, CreatePadding, CreateMargin } from '../../../theme/mixins'
const useStyles = makeStyles(theme => ({
  container : {
    width : "100%",
    height : '100%'
  },
  body : {
    ...Centering,
    ...CreatePadding(50,80,80,80),
    justifyContent : 'space-between'
  },
  item : {
    ...CreateMargin(20,0,40,0),
    ...Centering
  }
}));

export default useStyles;
