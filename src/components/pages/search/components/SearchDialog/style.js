import { makeStyles } from "@material-ui/core/styles";
import { WHITE, PRIMARY } from "../../../../../theme/colors";
import { CreateMargin, CreatePadding, FlexRow } from "../../../../../theme/mixins";
import { FONT_BIG} from "../../../../../theme/typography";

const useStyles = makeStyles(theme => ({
    appBar : {
        position : 'relative',
        backgroundColor : WHITE,
        ...CreatePadding(10,10,10,10),
        boxShadow : 'none'
    },
    header : {
        ...CreateMargin(0,0,10,0),
        height : '10vh',
        ...FlexRow,
    },
    iconClose : {
        ...FONT_BIG,
        color : PRIMARY
    },
    body : {
        ...CreatePadding(0,10,10,'15%')
    }
}));

export default useStyles;
