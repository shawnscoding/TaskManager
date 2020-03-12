import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TextField, Paper, Divider } from "@material-ui/core";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import { createStructuredSelector } from "reselect";
import { selectToggleSignUpForm } from "./../../redux/auth/auth.selectors";
import { toggleSignUpForm } from "./../../redux/auth/auth.actions";
import { connect } from "react-redux";
import { emailSignInStart } from "./../../redux/auth/auth.actions";

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
  buttonContainer: {
    marginTop: 20
  },
  paper: {
    padding: "20px",
    marginTop: "5px",
    height: "53vh",
    overflowY: "auto"
  },
  googleIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SignInForm = ({ signUpOpen, signInWithEmail }) => {
  const [form, setForm] = React.useState({ email: "", password: "" });
  const [open, setOpen] = React.useState(false);

  const handleChange = name => ({ target: { value } }) =>
    setForm({
      ...form,
      [name]: value
    });

  const handleSubmit = () => {
    signInWithEmail(form);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignUpFormOpen = () => {
    setOpen(false);
    signUpOpen();
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        style={{ position: "absolute", right: "3vw", top: "10px" }}
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
              type="email"
              value={form.email}
              label="Email"
              margin="normal"
              onChange={handleChange("email")}
              fullWidth
              id="alert-dialog-slide-description"
            />
            <br />
            <TextField
              variant="outlined"
              type="password"
              value={form.password}
              label="Password"
              margin="normal"
              onChange={handleChange("password")}
              fullWidth
            />
          </form>
          <DialogActions style={{ marginBottom: 15 }}>
            <Button
              onClick={handleSubmit}
              size="large"
              color="primary"
              variant="outlined"
            >
              Sign in
            </Button>
          </DialogActions>
          <Divider />
          <DialogActions className={classes.buttonContainer}>
            <Button
              size="small"
              variant="contained"
              onClick={handleSignUpFormOpen}
              color="primary"
            >
              sign up now
            </Button>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              startIcon={<GTranslateIcon />}
            >
              Log In with google
            </Button>
          </DialogActions>
        </Paper>
      </Dialog>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  open: selectToggleSignUpForm
});

const mapDispatchToProps = dispatch => ({
  signUpOpen: () => dispatch(toggleSignUpForm()),
  signInWithEmail: form => dispatch(emailSignInStart(form))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
