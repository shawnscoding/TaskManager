import React from "react";
import { Button, Grid, Typography } from "@material-ui/core/";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCurrentUser } from "../../redux/auth/auth.selectors";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  greenText: {
    color: "rgb(53, 104, 220)",
    padding: "0 10px 0 0"
  },
  name: {
    color: "rgb(89, 205, 208)",
    padding: "0 10px",
    fontSize: "1.3rem"
  }
}));

const MyTodoDetailedPage = ({
  openTimer,
  open,
  toggleTimerWarning,
  setTodoOnTimer,
  todo,
  setOpen,
  hours,
  minutes,
  working,
  user
}) => {
  const classes = useStyles();
  const onClickStart = todo => {
    if (working) {
      toggleTimerWarning();
      setOpen(!open);
    } else {
      setTodoOnTimer(todo);
      openTimer();
      setOpen(!open);
    }
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpen(!open)}
      fullWidth={true}
      aria-labelledby="todo-detail-dialog-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <div style={{ padding: "2rem" }}>
        <div>
          <DialogTitle>
            <Grid container>
              <Grid item>
                <DialogContentText
                  style={{ color: "#000", fontSize: "1.3rem" }}
                  id="todo-detail-dialog-title"
                >
                  Hi
                </DialogContentText>
              </Grid>
              <Grid item>
                <DialogContentText
                  className={classes.name}
                  id="todo-detail-dialog-title"
                >
                  {user.displayName}
                </DialogContentText>
              </Grid>
              <Grid item>
                <DialogContentText
                  style={{ color: "#000", fontSize: "1.3rem" }}
                  id="todo-detail-dialog-title"
                >
                  Are you ready to start?
                </DialogContentText>
              </Grid>
            </Grid>
          </DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item>
                <DialogContentText
                  className={classes.greenText}
                  id="alert-dialog-slide-description"
                >
                  Title:
                </DialogContentText>
              </Grid>
              <Grid item>
                <DialogContentText
                  style={{ color: "#000" }}
                  id="alert-dialog-slide-description"
                >
                  {todo.title}
                </DialogContentText>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item>
                <DialogContentText
                  className={classes.greenText}
                  id="alert-dialog-slide-description"
                >
                  Description:
                </DialogContentText>
              </Grid>
              <Grid item>
                <DialogContentText
                  style={{ color: "#000" }}
                  id="alert-dialog-slide-description"
                >
                  {todo.description}
                </DialogContentText>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <DialogContentText
                  className={classes.greenText}
                  id="alert-dialog-slide-description"
                >
                  About:
                </DialogContentText>
              </Grid>
              <Grid item>
                <DialogContentText
                  style={{ color: "#000" }}
                  id="alert-dialog-slide-description"
                >
                  {todo.category}
                </DialogContentText>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <DialogContentText
                  className={classes.greenText}
                  id="alert-dialog-slide-description"
                >
                  Importance:
                </DialogContentText>
              </Grid>
              <Grid item>
                <DialogContentText
                  style={{ color: "#000" }}
                  id="alert-dialog-slide-description"
                >
                  {todo.importance.toString()}
                </DialogContentText>
              </Grid>
            </Grid>
            {todo.timeToComplete < 60 ? null : (
              <React.Fragment>
                <Typography style={{ color: "rgb(153, 153, 153)" }}>
                  Expected to take &nbsp;
                  {todo.timeToComplete && hours === 0 ? null : hours === 1 ? (
                    <React.Fragment>{hours} hour &nbsp;</React.Fragment>
                  ) : (
                    <React.Fragment>{hours} hours &nbsp;</React.Fragment>
                  )}
                  {todo.timeToComplete && minutes === 0 ? null : minutes ===
                    1 ? (
                    <React.Fragment>{minutes} min</React.Fragment>
                  ) : (
                    <React.Fragment>{minutes} mins</React.Fragment>
                  )}
                  &nbsp;to complete
                </Typography>
              </React.Fragment>
            )}
            {todo.timeToComplete <= 60 && todo.timeToComplete !== 1 ? (
              <Typography style={{ color: "rgb(153, 153, 153)" }}>
                You've got Only 1 min left !
              </Typography>
            ) : null}

            {todo.completed && (
              <Typography style={{ color: "rgb(153, 153, 153)" }}>
                You've completed this task
              </Typography>
            )}
          </DialogContent>

          {todo.completed === true ? null : (
            <DialogActions>
              {/* <Button variant="outlined" color="primary">
                Edit
              </Button> */}
              <Button
                variant="outlined"
                onClick={() => onClickStart(todo)}
                color="primary"
              >
                Start
                <PlayCircleOutlineIcon style={{ padding: "0 0 0 4px" }} />
              </Button>
            </DialogActions>
          )}
        </div>
      </div>
    </Dialog>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(MyTodoDetailedPage));
