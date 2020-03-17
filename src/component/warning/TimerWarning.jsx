import React from "react";
import {
  Typography,
  Button,
  Dialog,
  Grid,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "2rem",
    height: "40vh"
  },
  logo: {
    color: "rgb(245, 0, 87)",
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem"
    }
  },
  title: {
    fontSize: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem"
    }
  }
}));

const Warning = ({ toggleTimerWarning, timerWarning, openTimer }) => {
  const classes = useStyles();
  const onClickTimerOpen = () => {
    toggleTimerWarning();
    openTimer();
  };
  return (
    <Dialog open={timerWarning} onClose={() => toggleTimerWarning()}>
      <Grid
        className={classes.container}
        justify="space-between"
        direction="column"
        container
      >
        <Grid container item>
          <Grid item>
            <Typography className={classes.title}>
              You're already working on the Task
            </Typography>
          </Grid>
          <Grid style={{ padding: "0 0 0 10px" }} item>
            <InsertInvitationIcon className={classes.logo} />
          </Grid>
        </Grid>
        <Grid item>
          <Typography>
            You need to finish current task to switch to this one
          </Typography>
        </Grid>

        <Grid container item>
          <Grid item>
            <Typography>Want to open timer to stop?</Typography>
          </Grid>
          <Grid item>
            <Button onClick={() => onClickTimerOpen()} color="primary">
              open
            </Button>
          </Grid>
        </Grid>

        <Grid container item>
          <Grid item>
            <Typography>Want to go back?</Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={() => toggleTimerWarning()}
              color="primary"
              autoFocus
            >
              cancle
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default Warning;
