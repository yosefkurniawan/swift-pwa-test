import React from "react";
import useStyles from "./style";
import checkComponent from "../../../helpers/checkComponent";
import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import Typography from "../Typography";

const Component = ({ LeftComponent, CenterComponent, RightComponent }) => {
  const styles = useStyles();
  const back = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {React.isValidElement(LeftComponent) ? (
          LeftComponent
        ) : (
          <Button
            onClick={
              (LeftComponent &&
                LeftComponent.onClick &&
                LeftComponent.onClick) ||
              back()
            }
          >
            <ArrowBack />
          </Button>
        )}
      </div>
      <div className={styles.centerContainer}>
        {React.isValidElement(CenterComponent)
          ? CenterComponent
          : CenterComponent && (
              <Typography variant="title" type="bold">
                {(CenterComponent.title && CenterComponent.title) || "Header"}
              </Typography>
            )}
      </div>
      <div className={styles.rightContainer}>
        {checkComponent(RightComponent) && RightComponent}
      </div>
    </div>
  );
};

export default Component;
