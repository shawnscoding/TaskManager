import React, { useState } from "react";
import { AppBar, Avatar, Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import HistoryIcon from "@material-ui/icons/History";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ForumIcon from "@material-ui/icons/Forum";
import TimeToLeaveIcon from "@material-ui/icons/TimeToLeave";
import SettingsIcon from "@material-ui/icons/Settings";
import { useStyles } from "./navbar.styles";
import StartPage from "../../pages/startpage/startpage.component";
import { Route, Switch, withRouter } from "react-router-dom";
import SignInForm from "../signInForm/signInForm.component";
import TodoPage from "../../pages/todoPage/todoPage.component";
import TodoForm from "../todoForm/todoForm.component";
import InfoIcon from "@material-ui/icons/Info";
import Calendar from "../calendar/calendar.component";
import SignUpForm from "../signUpForm/signUpForm.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/auth/auth.selectors";
import { connect } from "react-redux";
import ProfileIcon from "./navbarMaterials/profileIcon.component";
import { selectStep } from "../../redux/async/async.selectors";
import { setTodoFormStepToZero } from "../../redux/async/async.actions";
import WeeklyTodoPage from "../../pages/weeklyTodoPage/weeklyTodoPage.component";

const Navbar = props => {
  const { container, currentUser, setStepToZero, activeStep } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [warning, setWarning] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onClickCreate = () => {
    if (activeStep === 3) {
      setStepToZero();
    } else {
      setWarning(!warning);
      props.history.push("/todo/createTodo");
    }
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Avatar alt="logo" src="/assets/logo.png" className={classes.logo} />
        <Typography variant="h6" style={{ margin: "1vw 0 0 4vw" }}>
          My Motivator
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <PlayCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Today" />
        </ListItem>
        <ListItem onClick={onClickCreate} button>
          <ListItemIcon>
            <PlaylistAddCheckIcon />
          </ListItemIcon>
          <ListItemText primary="This week" />
        </ListItem>
        <ListItem onClick={() => props.history.push("/todo/calendar")} button>
          <ListItemIcon>
            <PlaylistAddCheckIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>

        <ListItem button onClick={() => props.history.push("/startTask")}>
          <ListItemIcon>
            <PlayCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Start Task" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ForumIcon />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <PeopleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TimeToLeaveIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
          {currentUser ? <ProfileIcon classes={classes} /> : <SignInForm />}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Paper className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route
            exact
            path="/start"
            render={() => (currentUser ? <TodoPage /> : <StartPage />)}
          />
          <Route exact path="/startTask" component={StartPage} />
          <Route
            exact
            path="/todo/createTodo"
            render={() => (
              <TodoForm setWarning={setWarning} warning={warning} />
            )}
          />
          <Route exact path="/todo/calendar" component={Calendar} />
          <Route
            exact
            path="/todo/dailyTodo/:monthAndDate"
            component={WeeklyTodoPage}
          />
        </Switch>
        <SignUpForm />
      </Paper>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  activeStep: selectStep
});

const mapDispatchToProps = dispatch => ({
  setStepToZero: () => dispatch(setTodoFormStepToZero())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
