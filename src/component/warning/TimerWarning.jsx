import React from "react";
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

const Warning = ({ toggleTimerWarning, timerWarning, openTimer }) => {
  const onClickTimerOpen = () => {
    toggleTimerWarning();
    openTimer();
  };
  return (
    <Dialog
      open={timerWarning}
      onClose={() => toggleTimerWarning()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        You're already working for the task{" "}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You need to finish the task before swiching to this one
        </DialogContentText>
      </DialogContent>
      <Typography>Want to open timer?</Typography>
      <Button onClick={() => onClickTimerOpen()} color="primary">
        open
      </Button>
      <Typography>Want to cancle this action?</Typography>
      <Button onClick={() => toggleTimerWarning()} color="primary" autoFocus>
        cancle
      </Button>
    </Dialog>
  );
};

export default Warning;
