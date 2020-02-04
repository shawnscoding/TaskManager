import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const WarningComponent = ({
  setStepToZero,
  warning,
  setWarning,
  onUserLeave
}) => {
  const selectedLeave = () => {
    if (onUserLeave && setStepToZero) {
      onUserLeave();
      setStepToZero();
    }
    setWarning(!warning);
  };

  const selectedStay = () => {
    setWarning(!warning);
  };

  return (
    <div>
      <Dialog
        open={warning}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={selectedLeave} color="primary">
            Yes, I don't mind
          </Button>
          <Button onClick={selectedStay} color="primary" autoFocus>
            Ok, I will stay here
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default WarningComponent;
