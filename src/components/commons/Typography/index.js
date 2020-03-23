import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography } from "@material-ui/core";
import useStyles from "./style";

const Component = ({
  variant,
  type,
  className = {},
  children,
  align = "left"
}) => {
  const styles = useStyles();
  let customStyle = classNames(
    styles.root,
    styles[variant],
    styles[type],
    className
  );
  return (
    <Typography variant={variant} className={customStyle} align={align}>
      {children}
    </Typography>
  );
};

Component.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h6", "p", "span", "title"]),
  type: PropTypes.oneOf(["bold", "italic"]),
  className: PropTypes.object
};

export default Component;
