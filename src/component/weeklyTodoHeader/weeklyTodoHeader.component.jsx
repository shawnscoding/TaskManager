import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  format,
  startOfWeek,
  addDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  isSameMonth,
  addMonths,
  subMonths
} from "date-fns";

const WeeklyTodoHeader = ({ classes, dailyTodo }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const renderDays = () => {
    if (dailyTodo.length !== 0) {
      const monthStart = startOfMonth(currentMonth);
      const monthEnd = endOfMonth(monthStart);
      const startDate = startOfWeek(monthStart);
      const endDate = endOfWeek(monthEnd);
      let formattedDate = "";
      let formattedDay = "";

      const dateFormat = "d";
      const dayFormat = "eee";
      const days = [];
      let day = startDate;
      let sevenDays = [];

      let date = format(dailyTodo[0].date.toDate(), "d");

      for (let i = 1; i < 4; i++) {
        sevenDays.push(Number(date) - 4 + i);
      }
      sevenDays.push(Number(date));
      for (let i = 1; i < 4; i++) {
        sevenDays.push(Number(date) + i);
      }

      while (day <= endDate) {
        formattedDate = format(day, dateFormat);
        formattedDay = format(day, dayFormat);

        for (let i = 0; i < sevenDays.length; i++) {
          if (
            isSameMonth(day, monthStart) &&
            formattedDate === sevenDays[i].toString()
          ) {
            days.push(
              <Grid
                key={day}
                className={
                  Number(formattedDate) < Number(date)
                    ? classes.beforeToday
                    : Number(formattedDate) === Number(date)
                    ? classes.day
                    : Number(formattedDate) > Number(date)
                    ? classes.afterToday
                    : null
                }
                item
              >
                <Typography> {formattedDate}</Typography>
                <Typography> {formattedDay}</Typography>
              </Grid>
            );
          }
        }
        day = addDays(day, 1);
      }

      return (
        <Grid
          container
          className={classes.header}
          justify="space-around"
          alignItems="center"
        >
          {days}
        </Grid>
      );
    }
  };

  return <React.Fragment>{renderDays()}</React.Fragment>;
};

export default WeeklyTodoHeader;
