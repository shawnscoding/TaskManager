import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ToolbarHeight } from "../navbar/navbar.styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: `calc(100% - ${ToolbarHeight}rem)`
  }
}));

const SmallLoader = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justify="center"
    >
      <CircularProgress color="secondary" />
    </Grid>
  );
};

export default SmallLoader;
