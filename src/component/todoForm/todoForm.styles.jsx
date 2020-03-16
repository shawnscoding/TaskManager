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
    height: "4rem",
    [theme.breakpoints.up("md")]: {
      bottom: "4rem",
      right: "4rem",
      width: "4rem",
      height: "4rem"
    },
    [theme.breakpoints.down("md")]: {
      bottom: "4rem",
      right: "4rem",
      width: "3rem",
      height: "3rem"
    },
    [theme.breakpoints.down("sm")]: {
      bottom: "2rem",
      right: "1.5rem",
      width: "3rem",
      height: "3rem"
    }
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
  }
}));

export default useStyles;
