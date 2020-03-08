import React, { Component } from "react";
import { Grid, Typography, Dialog, Button, Slide } from "@material-ui/core";
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
import { CircleProgress } from "react-gradient-progress";
import { makeStyles } from "@material-ui/core/styles";
import { primaryColor } from "./../completion/Completion";
import styled from "styled-components";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const styles = theme => ({
  container: {
    width: "21rem",
    height: "26rem",
    position: "relative",
    marginTop: "4rem"
  },
  leftTime: {
    position: "absolute",
    top: "7rem",
    zIndex: "200"
  },
  alert: {
    position: "absolute",
    top: "-3.5rem",
    zIndex: "200"
  },
  alertTypo: {
    fontSize: "2rem",
    color: "#2196f4",
    textTransform: "uppercase"
  },
  button: {
    border: "2px solid rgba(255, 255, 255, 0.9)",
    color: "rgba(255, 255, 255, 0.9)",
    "&:disabled": {
      border: "2px solid rgba(255, 255, 255, 0.2)"
    }
  }
});

const ButtonContainer = styled(Grid)`
  padding: 1rem;
  background: linear-gradient(45deg, #00bbff 30%, #92d7f1 90%);
`;

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
            <Grid className={classes.alert} item>
              {this.displayNone() ? (
                <Typography className={classes.alertTypo}>
                  Set Next task
                </Typography>
              ) : null}
            </Grid>
            <Grid className={classes.leftTime} item>
              <Typography style={{ fontSize: "3rem" }}>
                {this.getHours()} : {this.getMinutes()} :{this.getSecond()}
              </Typography>
            </Grid>

            <Grid item>
              <CircleProgress
                percentage={80}
                strokeWidth={15}
                width={300}
                fontColor="#fff"
                secondaryColor="#f0f0f0"
              />
            </Grid>
            <ButtonContainer
              fullWidth
              container
              alignItems="center"
              justify="space-between"
              item
            >
              <Button
                onClick={this.clickStop}
                disabled={stopped}
                variant="outlined"
                color="contained"
                className={classes.button}
              >
                <TimerOffIcon />
              </Button>
              <Button
                onClick={this.onClickFinish}
                variant="outlined"
                disabled={disableFinish}
                color="contained"
                className={classes.button}
              >
                Finish
              </Button>
              <Button
                onClick={this.clickStart}
                variant="outlined"
                disabled={started}
                color="contained"
                className={classes.button}
              >
                <TimerIcon />
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
