import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  format,
  startOfWeek,
  addDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  isSameMonth
} from "date-fns";
import { HeaderDay } from "../../pages/todayPage/todayPage.styles";
import { withRouter } from "react-router-dom";
import { DayContainer } from "./../todo/dailyTodo.styles";
import "./dailyTodoHeader.css";

const DailyTodoHeader = ({ history, match, classes, dailyTodo }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [moveDays, toggleMoveDays] = useState(null);

  // useEffect(() => {
  //   toggleMoveDays(null);
  // }, [dailyTodo]);

  const currentDay = match.params.monthAndDate;

  const onClickDay = (day, currentDay) => {
    // const selectedDate = format(day, "MMMd");
    let currentDate = currentDay.slice(3);
    let selectedDate = format(day, "d");
    if (currentDate < selectedDate) {
      if (moveDays === 0) {
        toggleMoveDays(2);
      } else {
        toggleMoveDays(0);
      }
    } else {
      if (moveDays === 1) {
        toggleMoveDays(3);
      } else {
        toggleMoveDays(1);
      }
    }
  };

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

      let date;

      if (typeof dailyTodo[0].date === typeof "") {
        date = dailyTodo[0].date;
      } else {
        date = format(dailyTodo[0].date.toDate(), "d");
      }

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

        let clonedDay = day;

        let monthAndDay = format(day, "MMMd");

        for (let i = 0; i < sevenDays.length; i++) {
          if (
            isSameMonth(day, monthStart) &&
            formattedDate === sevenDays[i].toString()
          ) {
            days.push(
              <DayContainer
                key={day}
                onClick={() => onClickDay(clonedDay, currentDay)}
                className={
                  moveDays === 0
                    ? `test`
                    : moveDays === 1
                    ? `testTwo`
                    : moveDays === 2
                    ? "testThree"
                    : moveDays === 3
                    ? "testFour"
                    : "testFive"
                }
              >
                <HeaderDay
                  onClick={() => history.push(`/todo/dailyTodo/${monthAndDay}`)}
                  className={
                    Number(formattedDate) < Number(date)
                      ? classes.days
                      : Number(formattedDate) === Number(date)
                      ? classes.selectedDay
                      : Number(formattedDate) > Number(date)
                      ? classes.days
                      : null
                  }
                  item
                >
                  <div>
                    <Typography className={classes.dayOfMonth}>
                      {formattedDate}
                    </Typography>
                    <Typography className={classes.dayOfWeek}>
                      {formattedDay}
                    </Typography>
                  </div>
                </HeaderDay>
              </DayContainer>
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

  console.log("tggg", moveDays);
  return <React.Fragment>{renderDays()}</React.Fragment>;
};

export default withRouter(DailyTodoHeader);
