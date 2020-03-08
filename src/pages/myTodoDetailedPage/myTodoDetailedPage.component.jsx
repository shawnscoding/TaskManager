import React from "react";
import Button from "@material-ui/core/Button";
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyTodoDetailedPage = ({
  openTimer,
  open,
  toggleTimerWarning,
  setTodoOnTimer,
  todo,
  setOpen,
  working,
  user
}) => {
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
          Hi {user.displayName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            I am your task manager
          </DialogContentText>
        </DialogContent>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Title:
            {todo.title}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Description: {todo.description}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            About: {todo.category}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            expected to take {todo.hour} hour{" "}
            {todo.minutes !== "" ? `${todo.minutes} minutes` : null}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button oolor="primary">Edit</Button>
          <Button onClick={() => onClickStart(todo)} color="primary">
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