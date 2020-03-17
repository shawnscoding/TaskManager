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
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

function Warning({ toggleTimerWarning, timerWarning, openTimer }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    toggleTimerWarning();
    openTimer();
  };

  return (
    <div className={classes.root}>
      <Snackbar open={timerWarning} onClose={() => handleClose()}>
        <Alert onClose={() => handleClose()} severity="warning">
          You need to either finish or store current task first !
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Warning;
