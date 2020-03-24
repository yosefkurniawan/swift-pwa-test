import { makeStyles } from "@material-ui/core/styles";
import { CreatePadding, CreateMargin } from '../../../theme/mixins'

const useStyles = makeStyles(theme => ({ 
    container : {
        ...CreatePadding(18,18,18,18),
        width : '100%',
        height : '10vh',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        ...CreateMargin(0,0,18,0)
    },
    leftContainer : {
        alignItems : 'flex-start',
    },
    rightContainer : {
        alignItems : 'flex-end',
    },
    centerContainer : {
        alignItems : 'center',
    }
}))

export default useStyles;