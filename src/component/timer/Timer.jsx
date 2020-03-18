import React, { Component } from "react";
import { Grid, Typography, Dialog, Button, Slide } from "@material-ui/core";
import {} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import TimerIcon from "@material-ui/icons/Timer";
import { connect } from "react-redux";
import { selectCurrentTask } from "../../redux/todo/todo.selectors";
import { createStructuredSelector } from "reselect";
import {
  startedWork,
  stoppedWork,
  storeUpdatedTodoStart
} from "./../../redux/todo/todo.actions";
import { CircleProgress } from "react-gradient-progress";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { primaryColor } from "../circleProgress/CircleProgress";
import StopIcon from "@material-ui/icons/Stop";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const styles = theme => ({
  container: {
    width: "21rem",
    height: "34rem",
    position: "relative"
  },
  leftTime: {
    position: "absolute",
    top: "13.5rem",
    zIndex: "200"
  },
  alert: {
    position: "absolute",
    top: "2.5rem",
    zIndex: "200"
  },
  alertTypo: {
    fontSize: "2rem",
    color: "#23a49e",
    textTransform: "uppercase"
  },
  button: {
    border: "2px solid rgba(255, 255, 255, 0.9)",
    color: "rgba(255, 255, 255, 0.9)",
    "&:disabled": {
      border: "2px solid rgba(255, 255, 255, 0.2)"
    }
  },
  headerItem: {
    color: "rgba(255, 255, 255, 0.9)",
    padding: "5px"
  },
  header: {
    height: "2.1rem",
    width: "100%",
    background: "linear-gradient(45deg, #33b7c8, 30%, #08e9dff5 90%)"
  }
});

const ButtonContainer = styled(Grid)`
  padding: 1rem;
  background: linear-gradient(45deg, #33b7c8, 30%, #08e9dff5 90%);
`;

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      stopped: true,
      started: false,
      disableFinish: true,
      total: 0,
      increment: 0
    };
  }

  getSecond = () => {
    return ("0" + (this.state.counter % 60)).slice(-2);
  };

  getMinutes = () => {
    return ("0" + Math.floor((this.state.counter / 60) % 60)).slice(-2);
  };

  getHours = () => {
    return ("0" + Math.floor(this.state.counter / 3600)).slice(-2);
  };

  displayNone = () => {
    if (this.state.counter === 0) {
      return true;
    }
    return false;
  };

  componentWillUnmount() {
    const { currentTask, storeUpdatedTodo, userSignOut } = this.props;
    if (userSignOut === true) {
      return;
    }
    const { task } = currentTask;
    task.timeToComplete = this.state.counter;
    task.workingHour = task.workingHour + this.state.increment;
    clearInterval(this.myInterval);
    storeUpdatedTodo(task);
    this.setState({
      counter: 0,
      started: false,
      stopped: true,
      disableFinish: true,
      increment: 0
    });
  }

  componentDidMount() {
    const { currentTask } = this.props;
    if (currentTask !== null) {
      this.setState({
        ...this.state,
        counter: currentTask.timeToComplete,
        total: currentTask.task.totalHour
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
        started: false,
        total: currentTask.task.totalHour,
        increment: 0
      });
    }
    if (this.state.counter === 1) {
      task.timeToComplete = this.state.counter;
      task.completed = true;
      task.workingHour = task.workingHour + this.state.increment;

      clearInterval(this.myInterval);
      storeUpdatedTodo(task);
      this.setState({
        counter: 0,
        started: true,
        stopped: true,
        disableFinish: true,
        increment: 0
      });
    }
  }

  onClickFinish = () => {
    const { storeUpdatedTodo, currentTask } = this.props;
    const { task } = currentTask;
    clearInterval(this.myInterval);
    this.props.stoppedWork();
    task.timeToComplete = this.state.counter;
    task.workingHour = task.workingHour + this.state.increment;
    if (this.state.counter === 1) {
      task.completed = true;
    }
    storeUpdatedTodo(task);
    this.setState({
      counter: 0,
      increment: 0,
      started: true,
      stopped: true,
      disableFinish: true
    });
  };

  clickStart = () => {
    this.myInterval = setInterval(() => {
      this.setState(pre => ({
        ...this.state,
        counter: pre.counter - 1,
        increment: pre.increment + 1
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

  getPercentage = () => {
    const { counter, total } = this.state;
    const percent = Math.floor((counter / total) * 100);
    return percent;
  };

  render() {
    const { started, stopped, disableFinish } = this.state;
    const { openTimer, closeTimer } = this.props;
    const { classes } = this.props;
    const percent = this.getPercentage();

    return (
      <Dialog
        open={openTimer}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeTimer}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Grid container alignItems="center" justify="center">
          <Grid
            style={{
              zIndex: 100
            }}
            item
            container
            alignItems="center"
            justify="space-between"
            direction="column"
            className={classes.container}
          >
            <Grid
              container
              alignItems="flex-end"
              justify="space-between"
              direction="row"
              className={classes.header}
              item
            >
              <Grid
                className={classes.headerItem}
                style={{ cursor: "pointer" }}
                item
                onClick={closeTimer}
              >
                <CloseIcon />
              </Grid>
              <Grid style={{ opacity: 0 }} className={classes.headerItem} item>
                <TimerIcon />
              </Grid>
              <Grid style={{ opacity: 0 }} className={classes.headerItem} item>
                <TimerIcon />
              </Grid>
            </Grid>
            <Grid className={classes.alert} item>
              {this.displayNone() ? (
                <Typography className={classes.alertTypo}>
                  Set Next task
                </Typography>
              ) : stopped ? (
                <Typography className={classes.alertTypo}>
                  Start task
                </Typography>
              ) : null}
            </Grid>
            <Grid className={classes.leftTime} item>
              <Typography style={{ fontSize: "2.9rem" }}>
                {this.getHours()} : {this.getMinutes()} :{this.getSecond()}
              </Typography>
            </Grid>

            <Grid item>
              <CircleProgress
                percentage={percent}
                strokeWidth={15}
                width={300}
                fontColor="#fff"
                secondaryColor="#f0f0f0"
                primaryColor={primaryColor}
              />
            </Grid>
            <ButtonContainer
              container
              alignItems="center"
              justify="space-between"
              item
            >
              <Button
                onClick={this.clickStop}
                disabled={stopped}
                variant="outlined"
                className={classes.button}
              >
                <StopIcon />
              </Button>
              <Button
                onClick={this.onClickFinish}
                variant="outlined"
                disabled={disableFinish}
                className={classes.button}
              >
                Store
              </Button>
              <Button
                onClick={this.clickStart}
                variant="outlined"
                disabled={started}
                className={classes.button}
              >
                <PlayArrowIcon />
              </Button>
            </ButtonContainer>
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
