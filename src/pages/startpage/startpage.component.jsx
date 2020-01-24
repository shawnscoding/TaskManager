import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  }
}));

const StartPage = ({ history }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        className={classes.root}
        contianer
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography component="h1" variant="h2">
            Welcome to My Motivator
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            we can help you acheive your daily goals and enhance your
            productivity
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            We have helped a lot of people around the world
          </Typography>
          <Typography variant="h5">check out the review!</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            we can help you acheive your daily goals and enhance your
            productivity
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">sign in now!</Typography>
          <Button>sign in</Button>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            haven't signed up yet? sign up now!
          </Typography>
          <Button>sign up</Button>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            wonder how it works? visit about us page
          </Typography>
          <Button>About Us</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default StartPage;
