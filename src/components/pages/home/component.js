import { Grid, Box } from "@material-ui/core";
import useStyles from "./style.js";
const Component = ({ t }) => {
  const styles = useStyles();
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item sm={12} md={12} lg={12} xs={12} spacing={0}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <h1>{t("common:about:text")}</h1>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Component;
