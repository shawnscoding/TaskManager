import React from "react";
import DailyTodoByCategory from "./dailyTodoByCategory.component";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DailyTodoAll from "./dailyTodoAll.component";
import DailyTodoByCompletion from "./dailyTodoByCompletion.component";
import DailyTodoByPriority from "./dailyTodoByPriority.component";

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

const DailyTodoDashBoard = ({ dailyTodo, classes }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="ALL" {...a11yProps(0)} />
          <Tab label="By Category" {...a11yProps(1)} />
          <Tab label="Priority" {...a11yProps(2)} />
          <Tab label="Completed" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <DailyTodoAll classes={classes} dailyTodo={dailyTodo} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <DailyTodoByCategory classes={classes} dailyTodo={dailyTodo} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <DailyTodoByPriority dailyTodo={dailyTodo} classes={classes} />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <DailyTodoByCompletion dailyTodo={dailyTodo} classes={classes} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default DailyTodoDashBoard;