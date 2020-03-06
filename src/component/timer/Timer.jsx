import React, { Component } from "react";
import {
  Grid,
  Typography,
  Dialog,
  Button,
  CircularProgress,
  Slide
} from "@material-ui/core";
import {} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import TimerIcon from "@material-ui/icons/Timer";
import TimerOffIcon from "@material-ui/icons/TimerOff";
import { connect } from "react-redux";
import { selectCurrentTask } from "../../redux/todo/todo.selectors";
import { createStructuredSelector } from "reselect";
import {
  startedWork,
  stoppedWork,
  storeUpdatedTodoStart
} from "./../../redux/todo/todo.actions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const styles = theme => ({
  container: {}
});

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      stopped: true,
      started: false,
      disableFinish: true
    };
  }

  getSecond = () => {
    return ("0" + (this.state.counter % 60)).slice(-2);
  };

  getMinutes = () => {
    return ("0" + Math.floor((this.state.counter / 60) % 60)).slice(-2);
  };

  getHours = () => {
    return Math.floor(this.state.counter / 3600);
  };

  displayNone = () => {
    console.log(this.state.counter, "ddd");
    if (this.state.counter === 0) {
      return true;
    }
    return false;
  };

  componentWillUnmount() {}

  componentDidMount() {
    const { currentTask } = this.props;
    if (currentTask !== null) {
      this.setState({
        ...this.state,
        counter: currentTask.timeToComplete
      });
    }
  }

  componentDidUpdate(prev) {
    const { currentTask, storeUpdatedTodo } = this.props;
    const { task } = currentTask;
    if (currentTask.timeToComplete !== prev.currentTask.timeToComplete) {
      this.setState({
        ...this.state,
        counter: currentTask.timeToComplete,
        started: false
      });
    }
    console.log(this.state.counter);
    if (this.state.counter === 1) {
      task.timeToComplete = this.state.counter;
      task.completed = true;
      console.log("task", task);
      clearInterval(this.myInterval);
      storeUpdatedTodo(task);
      console.log(this.state.counter, "succeed");
      this.setState({
        counter: 0,
        started: true,
        stopped: true,
        disableFinish: true
      });
    }
  }

  onClickFinish = () => {
    const { storeUpdatedTodo, currentTask } = this.props;
    const { task } = currentTask;
    clearInterval(this.myInterval);
    this.props.stoppedWork();
    task.timeToComplete = this.state.counter;
    storeUpdatedTodo(task);
    this.setState({
      counter: 0,
      started: true,
      stopped: true,
      disableFinish: true
    });
  };

  clickStart = () => {
    this.myInterval = setInterval(() => {
      this.setState(pre => ({
        ...this.state,
        counter: pre.counter - 1
      }));
    }, 1000);

    this.props.startedWork();
    this.setState({
      ...this.state,
      started: true,
      stopped: false,
      disableFinish: false
    });
  };

  clickStop = () => {
    clearInterval(this.myInterval);
    this.props.stoppedWork();
    this.setState({
      ...this.state,
      started: false,
      stopped: true
    });
  };

  render() {
    const { openTimer, closeTimer } = this.props;
    const { classes } = this.props;
    const { started, stopped, disableFinish } = this.state;
    return (
      <Dialog
        open={openTimer}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeTimer}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
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
              {this.displayNone() ? (
                <Typography>Set Next task</Typography>
              ) : (
                <Typography>
                  {this.getHours()} : {this.getMinutes()} :{this.getSecond()}
                </Typography>
              )}
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
                disabled={stopped}
                variant="outlined"
                color="secondary"
              >
                <TimerOffIcon />
              </Button>
              <Button
                onClick={this.clickStart}
                variant="outlined"
                color="secondary"
                disabled={started}
              >
                <TimerIcon />
              </Button>
            </Grid>
            <Grid>
              <Button
                color="secondary"
                onClick={this.onClickFinish}
                variant="contained"
                disabled={disableFinish}
              >
                Finish
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentTask: selectCurrentTask
});

const mapDispatchToProps = dispatch => ({
  startedWork: () => dispatch(startedWork()),
  stoppedWork: () => dispatch(stoppedWork()),
  storeUpdatedTodo: todo => dispatch(storeUpdatedTodoStart(todo))
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Timer)
);
