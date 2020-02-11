import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  todoFormButton: {
    position: "fixed",
    bottom: "5rem",
    right: "5rem",
    width: "4rem",
    height: "4rem"
  },
  wrapper: {
    position: "relative"
  },
  button: {
    margin: theme.spacing(4, 0)
  },

  thirdTextFirst: {
    fontSize: "1.5rem",
    marginBottom: theme.spacing(1)
  },
  thirdTextSecond: {
    fontSize: "1.3rem",
    marginBottom: theme.spacing(1)
  },
  thirdRatingBox: {
    fontSize: "2.2rem"
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  formControlSecond: {
    minWidth: 120,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    width: "100%"
  },
  formControlFirst: {
    minWidth: 120,
    margin: theme.spacing(1)
  },

  stepper: {
    width: "80%"
  },

  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  }
}));

export default useStyles;
