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
import { openTimer } from "../../redux/todo/todo.actions";
import { makeStyles } from "@material-ui/core/styles";

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
    padding: "0 10px"
  },
  lightGreenText: {
    color: "rgb(39, 155, 174)"
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
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(!open)}
        fullWidth={true}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <Grid container>
            <Grid item>
              <DialogContentText id="alert-dialog-slide-description">
                Hi
              </DialogContentText>
            </Grid>
            <Grid item>
              <DialogContentText
                className={classes.name}
                id="alert-dialog-slide-description"
              >
                {user.displayName}
              </DialogContentText>
            </Grid>
            <Grid item>
              <DialogContentText id="alert-dialog-slide-description">
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
              <DialogContentText id="alert-dialog-slide-description">
                {todo.title}
              </DialogContentText>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogContent>
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
              <DialogContentText id="alert-dialog-slide-description">
                {todo.description}
              </DialogContentText>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
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
                <DialogContentText id="alert-dialog-slide-description">
                  {todo.category}
                </DialogContentText>
              </Grid>
            </Grid>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
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
                <DialogContentText id="alert-dialog-slide-description">
                  {todo.importance.toString()}
                </DialogContentText>
              </Grid>
            </Grid>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            {todo.timeToComplete < 60 ? null : (
              <React.Fragment>
                <Typography className={classes.lightGreenText}>
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
              <Typography className={classes.lightGreenText}>
                You've got Only 1 min left !
              </Typography>
            ) : null}

            {todo.completed && (
              <Typography className={classes.lightGreenText}>
                You've completed this task
              </Typography>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary">
            Edit
          </Button>
          <Button
            variant="outlined"
            onClick={() => onClickStart(todo)}
            color="primary"
          >
            Start
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(MyTodoDetailedPage));
