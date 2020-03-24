import React, { useState } from "react";
import useStyles from "../style";
import Typography from "../../../commons/Typography";
import Button from "../../../commons/Button";
import { Slide } from "@material-ui/core";

const Component = ({ open, data, t, onClick }) => {
  const styles = useStyles();

  return (
    <Slide
      direction="right"
      in={open}
      timeout={1500}
      mountOnEnter
      unmountOnExit
    >
      <div className={styles.body}>
        <Typography variant="h1" align="center">
          {t("common:search:mainTitle")}
        </Typography>
        <div className={styles.item}>
          {data.map((item, indx) => (
            <Button
              key={indx}
              variant="text"
              capitalize={true}
              onClick={() => onClick(item) }
            >
              <Typography variant="span">{item}</Typography>
            </Button>
          ))}
        </div>
        <Typography variant="h1" align="center">
          {t("common:search:backTitle")}
        </Typography>
      </div>
    </Slide>
  );
};

export default Component;
