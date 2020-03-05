import React, { Component } from "react";
import { Grid, Typography, Button, CircularProgress } from "@material-ui/core";
import {} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import TimerIcon from "@material-ui/icons/Timer";
import TimerOffIcon from "@material-ui/icons/TimerOff";

const styles = theme => ({
  container: {
    height: `calc(100%)`
  }
});

class StartTaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 300 };
  }

  clickStart = () => {
    this.myInterval = setInterval(() => {
      this.setState(pre => ({
        timer: pre.timer - 1
      }));
    }, 1000);
  };

  getSecond = () => {
    return ("0" + (this.state.timer % 60)).slice(-2);
  };

  getMinutes = () => {
    return Math.floor(this.state.timer / 60);
  };

  clickStop = () => {
    clearInterval(this.myInterval);
  };

  render() {
    const { classes } = this.props;
    const { timer } = this.state;
    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid
          style={{
            zIndex: 100,
            width: "20rem"
          }}
          item
          container
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <Typography>
              {this.getMinutes()} :{this.getSecond()}
            </Typography>
          </Grid>
          <Grid item>
            <CircularProgress
              style={{
                width: "10rem",
                height: "10rem"
              }}
              variant="static"
              value={100}
            />
          </Grid>
          <Grid container alignItems="center" justify="space-between" item>
            <Button
              onClick={this.clickStop}
              variant="outlined"
              color="secondary"
            >
              <TimerOffIcon />
            </Button>
            <Button
              onClick={this.clickStart}
              variant="outlined"
              color="secondary"
            >
              <TimerIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(StartTaskPage);
