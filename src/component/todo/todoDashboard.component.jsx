import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Grid,
  Tabs,
  Tab,
  Box,
  Typography
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./dailyTodo.styles";
import {
  beforeRenderTodo,
  getPercentageOfCompletedTodo
} from "../../utils/helper";
import DailyTodoAll from "./dailyTodoAll.component";
import TodoByCategory from "./todoByCategory.component";
import TodoByCompletion from "./todoByCompletion.component";
import TodoByPriority from "./todoByPriority.component";
import NonTodoExist from "../nonTodoExist/nonTodoExist.component";
import SmallLoader from "./../loader/SmallLoader";
import { connect } from "react-redux";
import { selectLoading } from "./../../redux/async/async.selectors";
import { createStructuredSelector } from "reselect";

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const a11yProps = index => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
};

const TodoDashBoard = ({
  withThisWeekPage = false,
  dailyTodo,
  handleNextWeek,
  loading,
  handlePreWeek,
  withCalendar = false,
  formattedDate = false
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  if (withThisWeekPage) {
    if (loading) return <SmallLoader />;
    return (
      <div className={classes.root}>
        <Grid
          justify="flex-end"
          className={classes.twAppBarContainer}
          container
        >
          <Grid xs={6} item container>
            <Grid xs={4} style={{ position: "relative" }} container item>
              <Grid
                style={{
                  zIndex: 100
                }}
                item
              >
                <CircularProgress
                  style={{
                    width: "10rem",
                    height: "10rem"
                  }}
                  variant="static"
                  value={
                    getPercentageOfCompletedTodo(dailyTodo).result === 0
                      ? 60
                      : 50
                  }
                />
              </Grid>
              <Grid container className={classes.percentage}>
                <Grid item>
                  {getPercentageOfCompletedTodo(dailyTodo).result}
                </Grid>
                <Grid style={{ fontSize: "1rem", marginTop: "37px" }} item>
                  %
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={8} container direction="column" justify="center" item>
              <Grid item>
                <Typography>
                  {formattedDate.month} &nbsp;
                  {formattedDate.startDay} ~ &nbsp; {formattedDate.endDay}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>Completed Tasks </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  {getPercentageOfCompletedTodo(dailyTodo).completedTodo.length}{" "}
                  / {dailyTodo.length}{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  onClick={handlePreWeek}
                  style={{
                    margin: "10px 10px 10px 0"
                  }}
                  variant="outlined"
                >
                  Last Week
                </Button>
                <Button
                  color="secondary"
                  onClick={handleNextWeek}
                  style={{
                    margin: "10px 0 10px 0"
                  }}
                  variant="contained"
                >
                  Next Week
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} container direction="column" justify="flex-end" item>
            <AppBar className={classes.twAppBar} position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab
                  label="By Category"
                  {...a11yProps(0)}
                  disabled={beforeRenderTodo(dailyTodo) === false}
                />
                <Tab
                  label="Priority"
                  {...a11yProps(1)}
                  disabled={beforeRenderTodo(dailyTodo) === false}
                />
                <Tab
                  label="Completed"
                  {...a11yProps(2)}
                  disabled={beforeRenderTodo(dailyTodo) === false}
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>

        {beforeRenderTodo(dailyTodo) ? (
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
            className={classes.twPanelContainer}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <TodoByCategory
                withCalendar={withCalendar}
                classes={classes}
                dailyTodo={dailyTodo}
              />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <TodoByPriority
                withCalendar={withCalendar}
                dailyTodo={dailyTodo}
                classes={classes}
              />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <TodoByCompletion
                withCalendar={withCalendar}
                dailyTodo={dailyTodo}
                classes={classes}
              />
            </TabPanel>
          </SwipeableViews>
        ) : (
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={0}
            className={classes.twNoTodoContainer}
          >
            <TabPanel value={0} index={0} dir={theme.direction}>
              <NonTodoExist withThisWeekPage={withThisWeekPage} />
            </TabPanel>
          </SwipeableViews>
        )}
      </div>
    );
  }

  return (
    <div className={withCalendar ? null : classes.root}>
      <AppBar
        className={withCalendar ? classes.caAppBar : classes.tdAppBar}
        position={withCalendar ? "static" : "fixed"}
        color="default"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            style={withCalendar ? { minWidth: "8rem" } : null}
            label="ALL"
            {...a11yProps(0)}
            disabled={beforeRenderTodo(dailyTodo) === false}
          />
          <Tab
            style={withCalendar ? { minWidth: "8rem" } : null}
            label="By Category"
            {...a11yProps(1)}
            disabled={beforeRenderTodo(dailyTodo) === false}
          />
          <Tab
            style={withCalendar ? { minWidth: "8rem" } : null}
            label="Priority"
            {...a11yProps(2)}
            disabled={beforeRenderTodo(dailyTodo) === false}
          />
          <Tab
            style={withCalendar ? { minWidth: "8rem" } : null}
            label="Completed"
            {...a11yProps(3)}
            disabled={beforeRenderTodo(dailyTodo) === false}
          />
        </Tabs>
      </AppBar>

      {beforeRenderTodo(dailyTodo) ? (
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          className={
            withCalendar ? classes.caPanelContainer : classes.tdPanelContainer
          }
        >
          <TabPanel
            style={{ backgroundColor: "#fff", marginTop: "1.5rem" }}
            value={value}
            index={0}
            dir={theme.direction}
          >
            <DailyTodoAll
              withCalendar={withCalendar}
              classes={classes}
              dailyTodo={dailyTodo}
            />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <TodoByCategory
              withCalendar={withCalendar}
              classes={classes}
              dailyTodo={dailyTodo}
            />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <TodoByPriority
              withCalendar={withCalendar}
              dailyTodo={dailyTodo}
              classes={classes}
            />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <TodoByCompletion
              withCalendar={withCalendar}
              dailyTodo={dailyTodo}
              classes={classes}
            />
          </TabPanel>
        </SwipeableViews>
      ) : (
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={0}
          className={
            withCalendar ? classes.caPanelContainer : classes.wdPanelContainer
          }
        >
          <TabPanel value={0} index={0} dir={theme.direction}>
            <NonTodoExist />
          </TabPanel>
        </SwipeableViews>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading
});

export default connect(mapStateToProps)(TodoDashBoard);
