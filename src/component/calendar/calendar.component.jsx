import React, { useState, useEffect } from "react";
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
import "./calendar.styles.css";
import { Fab, Box, Button, Grid, Typography } from "@material-ui/core";
import { isTodoExist } from "../../redux/todo/todo.utils";

import LoadingComponent from "./../loader/loadingCompoent";
import { getMonthAndDay } from "./../../utils/helper";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Calendar = ({ todos, history, handleClickDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarTodos, setCalendarTodos] = useState([]);
  const [dayOpen, setDayOpen] = useState(null);

  const handleDayOpen = index => {
    setDayOpen(index);
  };

  useEffect(() => {
    if (todos.length !== 0) {
      setCalendarTodos(todos);
    } else {
      setCalendarTodos([{}]);
    }
  }, [todos]);

  const renderHeader = () => {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, "MMMM yyyy")}</span>
        </div>
        <div className="col col-end" onClick={nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EEEE";
    const days = [];

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  };

  const renderCells = () => {
    if (calendarTodos.length === 0) {
      return;
    } else {
      const monthStart = startOfMonth(currentMonth);
      const monthEnd = endOfMonth(monthStart);
      const startDate = startOfWeek(monthStart);
      const endDate = endOfWeek(monthEnd);

      const dateFormat = "d";
      const rows = [];

      let days = [];
      let day = startDate;
      let formattedDate = "";
      let indexOfRow = 0;

      while (day <= endDate) {
        const index = indexOfRow;
        for (let i = 0; i < 7; i++) {
          formattedDate = format(day, dateFormat);
          const cloneDay = day;
          const monthAndDate = getMonthAndDay(day);

          // const { dailyTodo, slicedDailyTodo } = countAndSliceTodo(
          //   monthAndDate,
          //   todos
          // );

          let dailyTodo;

          if (calendarTodos[0].date) {
            dailyTodo = calendarTodos.filter(
              todo => format(todo.date.toDate(), "MMMd") === monthAndDate
            );
          } else {
            dailyTodo = calendarTodos;
          }

          let slicedDailyTodo = dailyTodo.slice(0, 3);

          days.push(
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              onClick={() => handleClickDate(monthAndDate)}
              className={`col cell ${
                !isSameMonth(day, monthStart)
                  ? "disabled"
                  : isTodoExist(monthAndDate, calendarTodos)
                  ? "task"
                  : ""
              }`}
              key={day}
            >
              <Grid item>
                <Typography style={{ fontSize: "1.5rem" }}>
                  {formattedDate}
                </Typography>
              </Grid>

              {dailyTodo.length !== 0 ? (
                <div className="exist">
                  <span className="number">
                    <FiberManualRecordIcon style={{ fontSize: "1rem" }} />
                  </span>

                  {/* <div className="icons">
                  <span style={{ fontSize: "2.4rem" }}>{dailyTodo.length}</span>
                  <PlaylistAddCheckIcon style={{ fontSize: "2.4rem" }} />
                </div> */}
                </div>
              ) : null}
            </Grid>
          );
          day = addDays(day, 1);
        }

        rows.push(
          <React.Fragment key={day}>
            <div className="row">{days}</div>
            <Grid hidden={dayOpen === index ? false : true}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur vel sit est officiis eos fugit suscipit voluptatum.
              Fugit distinctio pariatur atque veritatis similique velit,
              quisquam quidem aut recusandae commodi totam.
            </Grid>
          </React.Fragment>
        );
        indexOfRow += 1;
        days = [];
      }
      return <div className="body">{rows}</div>;
    }
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  if (todos.length === 0) return <LoadingComponent />;
  return (
    <React.Fragment>
      <div className="main">
        <div className="calendar">
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calendar;
