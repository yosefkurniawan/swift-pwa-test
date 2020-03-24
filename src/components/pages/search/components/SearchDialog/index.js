import React from "react";
import useStyles from "./style";
import { Dialog, Slide, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import Typography from "../../../../commons/Typography";
import Button from "../../../../commons/Button";
import TextField from "../../../../commons/Forms/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Component = ({ open, setOpen }) => {
  const styles = useStyles();
  return (
    <Dialog
      fullScreen
      open={open}
      TransitionComponent={Transition}
      onClose={setOpen}
    >
       <AppBar className={styles.appBar}>
          <Toolbar>
            <IconButton edge="start" onClick={setOpen} aria-label="close">
              <CloseIcon className={styles.iconClose}/>
            </IconButton>
            <TextField placeholder="Search ..." />
          </Toolbar>
        </AppBar>
        <div className={styles.body}>
            <Typography variant="span" type="bold" letter="uppercase">
                Brand
            </Typography>
        </div>
    </Dialog>
  );
};

export default Component;
