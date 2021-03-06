import useStyles from "./style";
import { Grid } from "@material-ui/core";
import Image from "../Image";
import Typography from "../Typography";
import Button from "../Button";

const Component = ({}) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Grid container justify="center">
        <Grid item sm={12} md={12} lg={12}>
          <div className={styles.imageContainer}>
            <Image src="error" />
          </div>
        </Grid>
        <Grid item sm={12} md={12} lg={12}>
          <div className={styles.contentContainer}>
            <Typography variant="title" type="bold" align="center">
              Quis Nostrud Exercitation Ullamco Laboris Nisi ut Aliquip
            </Typography>
            <Typography variant="p">
              Excepteur sint cupidatat non proident
            </Typography>
            <Button variant="text">
              <Typography variant="span" type="bold" className={styles.textBtn}>
                SHOP NOW
              </Typography>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Component;
