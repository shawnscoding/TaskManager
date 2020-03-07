import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import {
  format,
  startOfWeek,
  addDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  isSameMonth,
  subDays,
  subMonths
} from "date-fns";
import { HeaderDay } from "../../pages/todayPage/todayPage.styles";
import { withRouter } from "react-router-dom";
import { DayContainer } from "./../todo/dailyTodo.styles";
import "./dailyTodoHeader.css";
import { useStyles } from "./../../pages/todayPage/todayPage.styles";

const DailyTodoHeader = ({ history, match, dailyTodo }) => {
  const classes = useStyles();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [moveDays, toggleMoveDays] = useState(null);
  const [renderBtn, setRenderBtn] = useState(null);

  const currentDay = match.params.monthAndDate;

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  useEffect(() => {
    const date = new Date(currentDay);
    const day = format(date, "d");
    const endDay = subDays(monthEnd, 2);

    if (Number(day) > Number(format(endDay, "d"))) {
      setRenderBtn(1);
      console.log("reddned");
    } else if (Number(day) <= 2) {
      setRenderBtn(0);
      console.log("goooogogogo");
    } else {
      setRenderBtn(null);
    }
  }, [dailyTodo]);

  const onClickDay = (day, currentDay) => {
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

      for (let i = 1; i < 3; i++) {
        sevenDays.push(Number(date) - 3 + i);
      }
      sevenDays.push(Number(date));
      for (let i = 1; i < 3; i++) {
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
                    ? `aniOne`
                    : moveDays === 1
                    ? `aniTwo`
                    : moveDays === 2
                    ? "aniThree"
                    : moveDays === 3
                    ? "aniFour"
                    : "aniFive"
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

      console.log(moveDays);
      return (
        <Grid
          container
          className={classes.header}
          justify="space-between"
          alignItems="center"
        >
          {renderBtn === 0 && <Button>ddd</Button>}
          {days}
          {renderBtn === 1 && <Button>ddd</Button>}
        </Grid>
      );
    }
  };
  return <React.Fragment>{renderDays()}</React.Fragment>;
};

export default withRouter(DailyTodoHeader);
