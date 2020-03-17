import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  todoFormButton: {
    background:
      "linear-gradient( 45deg,rgba(8, 72, 202, 0.85) , rgba(28, 148, 234, 0.82) )",
    position: "fixed",
    color: "#fff",
    bottom: "5rem",
    right: "5rem",
    width: "4rem",
    height: "4rem",
    "&:hover": {
      backgroundColor: theme.palette.info.dark
    },
    [theme.breakpoints.up("md")]: {
      bottom: "4rem",
      right: "4rem",
      width: "4rem",
      height: "4rem"
    },
    [theme.breakpoints.down("md")]: {
      bottom: "4rem",
      right: "4rem",
      width: "3.5rem",
      height: "3.5rem"
    },
    [theme.breakpoints.down("sm")]: {
      bottom: "2rem",
      right: "1.5rem",
      width: "3rem",
      height: "3rem"
    }
  },
  container: {
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem 1rem"
    }
  },
  button: {
    padding: "1rem 0 1.5rem 0"
  },

  thirdTextFirst: {
    marginBottom: theme.spacing(1),
    fontSize: "1.4rem"
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
