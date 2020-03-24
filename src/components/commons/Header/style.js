import { makeStyles } from "@material-ui/core/styles";
import { CreatePadding, CreateMargin } from '../../../theme/mixins'

const useStyles = makeStyles(theme => ({ 
    container : {
        ...CreatePadding(10,10,10,10),
        width : '100%',
        height : '10vh',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        ...CreateMargin(0,0,18,0)
    },
    leftContainer : {
        justifyContent : 'flex-start',
        alignItems : 'center'
    },
    rightContainer : {
        alignItems : 'flex-end',
    },
    centerContainer : {
        alignItems : 'center',
    },
    backIcon : {
        fontSize : 30
    },
}))

export default useStyles;