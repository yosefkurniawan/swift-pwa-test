import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import Slide from "@material-ui/core/Slide";
import { InputBase, Link } from "@material-ui/core";

import useStyles from "./style";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function Search(props) {
  const classes = useStyles();
  const open = props.open;

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <ArrowBackIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.dialogContent}>
          <div className="searcbox">
            <InputBase
              className={classes.input}
              placeholder="Search..."
              inputProps={{ "aria-label": "search..." }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </div>
          <div className="category-list">
            <h2>NEW IN COLLECTION</h2>
            <div>
              <Link href="#">
                <a>Subcategory</a>
              </Link>
            </div>
            <div>
              <Link href="#">
                <a>Subcategory</a>
              </Link>
            </div>
            <div>
              <Link href="#">
                <a>Subcategory</a>
              </Link>
            </div>
            <div>
              <Link href="#">
                <a>Subcategory</a>
              </Link>
            </div>
            <h2>BACK IN STOCK</h2>
            <h2>SALE</h2>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Search;
