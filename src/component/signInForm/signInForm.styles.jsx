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
