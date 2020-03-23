import classNames from "classnames";
import useStyles from "./style";

const Component = ({ className = {}, children }) => {
  const styles = useStyles();
  const customClass = classNames(styles.span, className);
  return <div className={customClass}>{children}</div>;
};

export default Component;
