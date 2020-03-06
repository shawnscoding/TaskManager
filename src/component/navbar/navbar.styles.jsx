import { makeStyles } from "@material-ui/styles";
import { Toolbar } from "@material-ui/core/Toolbar";

export const drawerWidth = 220;

export const ToolbarHeight = 3.3;

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
  sidebar: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.background.paper,
    height: "100%"
  },
  icon: {
    color: "#fff"
  },
  sidebarLogoBox: {
    minHeight: `${ToolbarHeight}rem`,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.background.paper
  },
  toolbar: {
    minHeight: `${ToolbarHeight}rem`,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.black
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    paddingTop: "3.3rem",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    height: "100vh"
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
  },
  timerContainer: {
    position: "fixed",
    bottom: "11rem",
    right: "5rem",
    width: "4rem",
    height: "4rem"
  }
}));
