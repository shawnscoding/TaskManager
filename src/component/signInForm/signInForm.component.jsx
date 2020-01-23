import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TextField, Paper, Divider } from "@material-ui/core";
import { useStyles } from "./signInForm.styles";
import GTranslateIcon from "@material-ui/icons/GTranslate";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SignInForm = () => {
  const [form, setForm] = React.useState({ email: "", password: "" });
  const [open, setOpen] = React.useState(false);

  const handleChange = name => ({ target: { value } }) =>
    setForm({
      ...form,
      [name]: value
    });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        style={{ position: "absolute", right: "3vw", top: "2.1vh" }}
        variant="outlined"
        color="inherit"
        onClick={handleClickOpen}
      >
        LOGIN
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Sign In</DialogTitle>
        <Paper className={classes.paper}>
          <form>
            <TextField
              variant="outlined"
              id="outlined-basic"
              type="email"
              value={form.email}
              label="Email"
              margin="normal"
              onChange={handleChange("email")}
              fullWidth
            />
            <br />
            <TextField
              variant="outlined"
              id="outlined-basic"
              type="password"
              value={form.password}
              label="Password"
              margin="normal"
              onChange={handleChange("password")}
              fullWidth
            />
          </form>
          <DialogActions style={{ marginBottom: 15 }}>
            <Button size="large" color="primary" variant="outlined">
              Sign in
            </Button>
          </DialogActions>
          <Divider />
          <DialogActions className={classes.buttonContainer}>
            <Button
              size="small"
              variant="contained"
              onClick={handleClose}
              color="primary"
            >
              sign up now
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={handleClose}
              color="secondary"
            >
              <GTranslateIcon m="1" />
              Log In with google
            </Button>
          </DialogActions>
        </Paper>
      </Dialog>
    </div>
  );
};

export default SignInForm;
