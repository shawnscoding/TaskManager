import React from "react";
import { selectLoading } from "./../../redux/async/async.selectors";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: "relative"
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },

  button: {
    backgroundColor: green[500],
    color: "#fff",
    "&:hover": {
      backgroundColor: green[700]
    }
  }
}));

const ProgressButton = ({
  loading,
  onSubmit,
  onSignIn = false,
  onSignUp = false,
  onTodo = false
}) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Button
        variant="contained"
        className={classes.button}
        disabled={loading}
        onClick={onSubmit}
      >
        {onTodo ? <>Submit</> : onSignIn ? <>Sign In</> : <>Sign Up</>}
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading
});

export default connect(mapStateToProps)(ProgressButton);
