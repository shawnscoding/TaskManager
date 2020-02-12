import React from "react";
import DailyTodoByCategory from "./dailyTodoByCategory.component";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import DailyTodoAll from "./dailyTodoAll.component";
import DailyTodoByCompletion from "./dailyTodoByCompletion.component";
import DailyTodoByPriority from "./dailyTodoByPriority.component";
import { useStyles } from "./dailyTodo.styles";

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Box>
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

const DailyTodoDashBoard = ({ dailyTodo, withCalendar = false }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  console.log("withCalendar", withCalendar);

  return (
    <div className={withCalendar ? null : classes.root}>
      <AppBar
        className={withCalendar ? classes.caAppBar : classes.wdAppBar}
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
          />
          <Tab
            style={withCalendar ? { minWidth: "8rem" } : null}
            label="By Category"
            {...a11yProps(1)}
          />
          <Tab
            style={withCalendar ? { minWidth: "8rem" } : null}
            label="Priority"
            {...a11yProps(2)}
          />
          <Tab
            style={withCalendar ? { minWidth: "8rem" } : null}
            label="Completed"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className={
          withCalendar ? classes.caPanelContainer : classes.panelContainer
        }
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <DailyTodoAll
            withCalendar={withCalendar}
            classes={classes}
            dailyTodo={dailyTodo}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <DailyTodoByCategory
            withCalendar={withCalendar}
            classes={classes}
            dailyTodo={dailyTodo}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <DailyTodoByPriority
            withCalendar={withCalendar}
            dailyTodo={dailyTodo}
            classes={classes}
          />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <DailyTodoByCompletion
            withCalendar={withCalendar}
            dailyTodo={dailyTodo}
            classes={classes}
          />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default DailyTodoDashBoard;
