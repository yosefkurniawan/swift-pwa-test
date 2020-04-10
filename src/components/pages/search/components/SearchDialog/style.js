import { makeStyles } from "@material-ui/core/styles";
import { WHITE, PRIMARY } from "../../../../../theme/colors";
import { CreateMargin, CreatePadding, FlexRow, FlexColumn, showHide } from "../../../../../theme/mixins";
import { FONT_BIG} from "../../../../../theme/typography";

const useStyles = makeStyles(theme => ({
    appBar : {
        position : 'relative',
        backgroundColor : WHITE,
        ...CreatePadding(10,10,10,10),
        boxShadow : 'none'
    },
    header : {
        height : '10vh',
        ...FlexRow,
    },
    iconClose : {
        ...FONT_BIG,
        color : PRIMARY
    },
    body : {
        ...CreatePadding(0,10,10,'15%'),
       ...FlexColumn,
    },
    textSearch : {
        ...FlexRow,
        justifyContent : 'space-between',
        ...CreatePadding(0,'15%',0,0)
    },
    title : {
        ...CreateMargin(16,0,16,0)
    },
    rmMargin : {
        ...CreateMargin(0,0,0,0)
    },
    result : {
        ...FlexColumn,
        ...CreateMargin(16,0,30,0)
    },
    textValue : {
        ...FlexColumn,
        ...CreateMargin(10,0,10,0)
    },
    ...showHide,

}));

export default useStyles;
