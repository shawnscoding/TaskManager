import { makeStyles } from "@material-ui/styles";

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  logo: {
    width: 40,
    position: "absolute",
    left: "1vw",
    top: "10px"
  },

  loginIcon: {
    position: "absolute",
    right: "3rem",
    top: "0.6rem"
  },
  paper: {
    height: "81vh"
  }
}));
