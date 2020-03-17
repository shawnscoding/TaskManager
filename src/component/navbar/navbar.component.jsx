import React, { useState } from "react";
import {
  AppBar,
  Paper,
  Fab,
  Typography,
  Toolbar,
  Drawer,
  Divider,
  Grid,
  IconButton
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import HistoryIcon from "@material-ui/icons/History";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import TimeToLeaveIcon from "@material-ui/icons/TimeToLeave";
import { useStyles } from "./navbar.styles";
import { Route, Switch, withRouter } from "react-router-dom";
import StartPage from "../../pages/startPage/StartPage";
import TodoForm from "../todoForm/todoForm.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/auth/auth.selectors";
import { connect } from "react-redux";
import { selectStep } from "../../redux/async/async.selectors";
import { setTodoFormStepToZero } from "../../redux/async/async.actions";
import TodayPage from "../../pages/todayPage/todayPage.component";
import { format } from "date-fns";
import CalendarPage from "./../../pages/calendarPage/calendarPage.component";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import {
  selectMonthlyTodo,
  selectTimer,
  selectCurrentTask,
  selectWorking
} from "./../../redux/todo/todo.selectors";
import ThisWeekPage from "../../pages/thisWeekPage/thisWeekPage.component";
import { getThisWeek, getThisYear } from "../../utils/helper";
import {
  getWeeklyTodoStart,
  openTimer,
  closeTimer,
  resetMonthlyTodoOnRoute
} from "../../redux/todo/todo.actions";
import { selectLoading } from "./../../redux/async/async.selectors";
import Timer from "../timer/Timer";
import { selectTimerWarning } from "./../../redux/warning/warning.selectors";
import { toggleTimerWarning } from "./../../redux/warning/warning.actions";
import Warning from "./../warning/TimerWarning";
import HistoryPage from "./../../pages/historyPage/HistoryPage";
import TimerIcon from "@material-ui/icons/Timer";
import { fecthFormarTodoStart } from "./../../redux/todo/todo.actions";
import {
  signOutStart,
  directUserAfterLogAct
} from "./../../redux/auth/auth.actions";
import withWidth from "@material-ui/core/withWidth";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import DateRangeIcon from "@material-ui/icons/DateRange";

const Navbar = props => {
  const {
    container,
    user,
    signOut,
    working,
    resetTodo,
    timerWarning,
    toggleTimerWarning,
    currentTask,
    openTimer,
    directAfterLogOut,
    closeTimer,
    timer,
    getWeeklyTodo,
    history
  } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [year, setYear] = useState(new Date());

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onClickHistory = async () => {
    history.push(`/history/${user.id}`);
  };

  const today = format(new Date(), "MMMd");

  const thisWeek = getThisWeek();

  const onClickCalendar = async () => {
    await resetTodo();
    history.push("/todo/calendar");
  };

  const onClickThisWeek = async () => {
    await getWeeklyTodo(thisWeek);
    history.push(`/todo/thisWeek/${thisWeek}`);
  };
  const handleSignOut = () => {
    signOut();
    directAfterLogOut(false);
    history.push("/");
  };

  const onClickToday = async () => {
    await resetTodo();
    history.push(`/todo/dailyTodo/${today}`);
  };

  const drawer = (
    <div className={classes.sidebar}>
      <Grid
        justify="flex-start"
        alignItems="center"
        container
        className={classes.sidebarLogoBox}
      >
        <Grid style={{ padding: "8px 5px 0 10px" }} item>
          <InsertInvitationIcon
            style={{ color: "  rgb(89, 205, 208)", fontSize: "1.8rem" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h3">Task Manager</Typography>
        </Grid>
      </Grid>
      <Divider />
      <div>
        <List>
          <ListItem onClick={onClickToday} button>
            <ListItemIcon>
              <PlayCircleOutlineIcon className={classes.icon} />
            </ListItemIcon>
            <Typography>Today</Typography>
          </ListItem>
          <ListItem onClick={onClickThisWeek} button>
            <ListItemIcon>
              <PlaylistAddCheckIcon className={classes.icon} />
            </ListItemIcon>
            <Typography>This week</Typography>
          </ListItem>
          <ListItem onClick={onClickCalendar} button>
            <ListItemIcon>
              <DateRangeIcon className={classes.icon} />
            </ListItemIcon>
            <Typography>Calendar</Typography>
          </ListItem>

          <ListItem onClick={onClickHistory} button>
            <ListItemIcon>
              <HistoryIcon className={classes.icon} />
            </ListItemIcon>
            <Typography>History</Typography>
          </ListItem>
          {/* <ListItem button>
            <ListItemIcon>
              <ForumIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem> */}
        </List>
        <Divider />
        <List>
          {/* <ListItem button>
            <ListItemIcon>
              <PeopleOutlineIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="People" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>*/}
          <ListItem onClick={handleSignOut} button>
            <ListItemIcon>
              <TimeToLeaveIcon style={{ color: "#f50057" }} />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          {user ? (
            <>
              <Typography variant="h3" noWrap>
                Welcome !
              </Typography>
              <Typography
                style={{
                  color: "rgb(89, 205, 208)",
                  padding: "0 0 0 0.6rem"
                }}
                variant="h3"
                noWrap
              >
                {user.displayName}
              </Typography>
            </>
          ) : (
            <Typography variant="h3" noWrap>
              Welcome !
            </Typography>
          )}
          <AccountCircleRoundedIcon className={classes.loginIcon} />
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
        <React.Fragment>
          {/* {user ? ( */}
          <React.Fragment>
            <Switch>
              <Route exact path="/start" render={() => <StartPage />} />

              <Route
                exact
                path="/todo/thisWeek/:thisWeek"
                component={ThisWeekPage}
              />

              <Route exact path="/todo/calendar" component={CalendarPage} />
              <Route
                exact
                path="/todo/dailyTodo/:monthAndDate"
                component={TodayPage}
              />
              <Route
                exact
                path={"/history/:userId"}
                render={() => (
                  <HistoryPage year={year} setYear={setYear} user={user} />
                )}
              />
            </Switch>
            <TodoForm />
            <Warning
              timerWarning={timerWarning}
              toggleTimerWarning={toggleTimerWarning}
              openTimer={openTimer}
            />
            {currentTask ? (
              <Timer openTimer={timer} closeTimer={closeTimer} />
            ) : null}
            {working && !timer ? (
              <Fab
                color="inherit"
                className={classes.timerContainer}
                onClick={openTimer}
              >
                <TimerIcon style={{ fontSize: "2.7rem" }} />
              </Fab>
            ) : null}
          </React.Fragment>
          {/* : null}  */}
        </React.Fragment>
      </Paper>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  user: selectCurrentUser,
  activeStep: selectStep,
  todos: selectMonthlyTodo,
  timer: selectTimer,
  currentTask: selectCurrentTask,
  timerWarning: selectTimerWarning,
  working: selectWorking
});

const mapDispatchToProps = dispatch => ({
  setStepToZero: () => dispatch(setTodoFormStepToZero()),
  getWeeklyTodo: formattedWeek => dispatch(getWeeklyTodoStart(formattedWeek)),
  openTimer: () => dispatch(openTimer()),
  closeTimer: () => dispatch(closeTimer()),
  toggleTimerWarning: () => dispatch(toggleTimerWarning()),
  resetTodo: () => dispatch(resetMonthlyTodoOnRoute()),
  fetchFormerTodo: year => dispatch(fecthFormarTodoStart(year)),
  signOut: () => dispatch(signOutStart()),
  directAfterLogOut: () => dispatch(directUserAfterLogAct())
});

export default withWidth()(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))
);
