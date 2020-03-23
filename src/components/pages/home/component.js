import { Grid, Box } from "@material-ui/core";
import useStyles from "./style.js";
import Banner from '../../commons/slider/Caraousel'

const Component = ({ t }) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Grid container spacing={0}>
        <Grid item sm={12} md={12} lg={12} xs={12}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <h1 className={styles.titleLogo}>{t("common:home:logoName")}</h1>
            </div>
            <Banner />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Component;
