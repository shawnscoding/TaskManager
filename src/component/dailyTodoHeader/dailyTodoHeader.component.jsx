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
  subMonths,
  addMonths
} from "date-fns";
import {
  HeaderDay,
  HeaderButton
} from "../../pages/todayPage/todayPage.styles";
import { withRouter } from "react-router-dom";
import { DayContainer } from "./../todo/dailyTodo.styles";
import "./dailyTodoHeader.css";
import { useStyles } from "./../../pages/todayPage/todayPage.styles";
import { setAnotherTodoStart } from "./../../redux/todo/todo.actions";
import { connect } from "react-redux";
import { getThisYear } from "../../utils/helper";

const DailyTodoHeader = ({ history, match, dailyTodo, setAnotherTodo }) => {
  const classes = useStyles();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [moveDays, toggleMoveDays] = useState(null);
  const [renderBtn, setRenderBtn] = useState(null);

  const currentDay = match.params.monthAndDate;
  const fmdMonth = format(currentMonth, "MMMd");

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const preMonth = subMonths(currentMonth, 1);
  const preMonthEnd = endOfMonth(preMonth);

  const preDate = format(preMonthEnd, "d");
  const preDay = format(preMonthEnd, "eee");
  const PreMonthAndDate = format(preMonthEnd, "MMMd");

  const nextMonth = addMonths(currentMonth, 1);
  const nextMonthStart = startOfMonth(nextMonth);

  const nextDate = format(nextMonthStart, "d");
  const nextDay = format(nextMonthStart, "eee");
  const nextMonthAndDate = format(nextMonthStart, "MMMd");

  const handlePreMonth = () => {
    const month = format(preMonth, "MMM");
    setAnotherTodo(month);

    setCurrentMonth(preMonthEnd);
    history.push(`/todo/dailyTodo/${PreMonthAndDate}`);
  };

  const handleNextMonth = () => {
    const month = format(nextMonth, "MMM");
    setAnotherTodo(month);
    const day = new Date(preMonthEnd);

    setCurrentMonth(nextMonthStart);
    history.push(`/todo/dailyTodo/${nextMonthAndDate}`);
  };

  useEffect(() => {
    const clonedCurrentDay = currentDay;
    const year = getThisYear();
    const date = new Date(year + clonedCurrentDay);

    const day = format(date, "d");
    const endDay = subDays(monthEnd, 2);
    const formattedMonthEnd = format(monthEnd, "d");

    if (Number(day) >= Number(format(endDay, "d"))) {
      setRenderBtn(1);
    } else if (Number(day) <= 2) {
      setRenderBtn(0);
    } else {
      setRenderBtn(null);
    }

    if (formattedMonthEnd === dailyTodo[0].date) {
      setRenderBtn(1);
    }

    if (currentDay !== fmdMonth) {
      setCurrentMonth(date);
    }
  }, [dailyTodo, currentDay]);

  const onClickDay = (day, currentDay) => {
    let currentDate = currentDay.slice(3);
    let selectedDate = format(day, "d");
    if (currentDate < selectedDate) {
      if (moveDays === 0 && moveDays !== 1 && moveDays !== 3) {
        toggleMoveDays(2);
      } else {
        toggleMoveDays(0);
      }
    } else {
      if (moveDays === 1 && moveDays !== 0 && moveDays !== 2) {
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
      return (
        <Grid
          container
          className={classes.header}
          justify="space-between"
          alignItems="center"
        >
          {renderBtn === 0 && (
            <DayContainer>
              <HeaderButton
                onClick={handlePreMonth}
                variant="contained"
                className={
                  moveDays === 1
                    ? `aniTwo`
                    : moveDays === 3
                    ? "aniFour"
                    : "aniFive"
                }
              >
                <div>
                  <Typography className={classes.dayOfMonth}>
                    {preDate}
                  </Typography>
                  <Typography className={classes.dayOfWeek}>
                    {preDay}
                  </Typography>
                </div>
              </HeaderButton>
            </DayContainer>
          )}
          {days}
          {renderBtn === 1 && (
            <DayContainer>
              <HeaderButton
                onClick={handleNextMonth}
                variant="contained"
                className={
                  moveDays === 0
                    ? `aniOne`
                    : moveDays === 2
                    ? "aniThree"
                    : "aniFive"
                }
              >
                <div>
                  <Typography className={classes.dayOfMonth}>
                    {nextDate}
                  </Typography>
                  <Typography className={classes.dayOfWeek}>
                    {nextDay}
                  </Typography>
                </div>
              </HeaderButton>
            </DayContainer>
          )}
        </Grid>
      );
    }
  };
  return <React.Fragment>{renderDays()}</React.Fragment>;
};

const mapDispatchToProps = dispatch => ({
  setAnotherTodo: month => dispatch(setAnotherTodoStart(month))
});

export default withRouter(connect(null, mapDispatchToProps)(DailyTodoHeader));
