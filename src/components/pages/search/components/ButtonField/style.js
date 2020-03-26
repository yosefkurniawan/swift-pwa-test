import { makeStyles } from "@material-ui/core/styles";
import { CreatePadding, CreateMargin } from "../../../../../theme/mixins";
import { PRIMARY, GRAY_SECONDARY } from "../../../../../theme/colors";

const useStyles = makeStyles(theme => ({ 
    container : {
        minWidth : '250px',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        borderBottom : `1px solid ${PRIMARY}`,
    },
    placeholder : {
        color : `${ GRAY_SECONDARY} !important`
    }
}))

export default useStyles;