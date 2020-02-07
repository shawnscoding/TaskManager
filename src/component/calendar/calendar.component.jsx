import React, { useState } from "react";
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
import { Fab, Box } from "@material-ui/core";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import { isTodoExist } from "../../redux/todo/todo.utils";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import LoadingComponent from "./../loader/loadingCompoent";
import { getMonthAndDay } from "./../../utils/helper";
import { selectTodoList } from "./../../redux/todo/todo.selectors";

const Calendar = ({ todos, history }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
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
    if (todos.length === 0) {
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

      while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
          formattedDate = format(day, dateFormat);
          const cloneDay = day;
          const monthAndDate = getMonthAndDay(day);

          // const { dailyTodo, slicedDailyTodo } = countAndSliceTodo(
          //   monthAndDate,
          //   todos
          // );

          let dailyTodo = todos.filter(
            todo => format(todo.date.toDate(), "MMMd") === monthAndDate
          );

          let slicedDailyTodo = dailyTodo.slice(0, 3);

          days.push(
            <Box
              className={`col cell ${
                !isSameMonth(day, monthStart)
                  ? "disabled"
                  : isTodoExist(monthAndDate, todos)
                  ? "task"
                  : ""
              }`}
              key={day}
            >
              <div
                className={
                  dailyTodo.length === 0 ? "clickDisabled" : "clickAbled"
                }
                onClick={() => history.push(`/todo/dailyTodo/${monthAndDate}`)}
              >
                <span className="number">{formattedDate}</span>
                <Fab
                  size="small"
                  variant="extended"
                  color="primary"
                  className="bg"
                >
                  {dailyTodo.length}
                  <PlaylistAddCheckIcon />
                </Fab>
                <div className="title">
                  {slicedDailyTodo && slicedDailyTodo.length === 1 ? (
                    <React.Fragment>
                      <div>{slicedDailyTodo[0].userId}</div>
                    </React.Fragment>
                  ) : slicedDailyTodo.length === 2 ? (
                    <React.Fragment>
                      <div>{slicedDailyTodo[0].userId}</div>

                      <div>{slicedDailyTodo[1].userId}</div>
                    </React.Fragment>
                  ) : slicedDailyTodo.length === 3 ? (
                    <React.Fragment>
                      <div>{slicedDailyTodo[0].userId}</div>

                      <div>{slicedDailyTodo[1].userId}</div>

                      <div>{slicedDailyTodo[2].userId}</div>
                    </React.Fragment>
                  ) : null}
                </div>
              </div>
            </Box>
          );
          day = addDays(day, 1);
        }
        rows.push(
          <div className="row" key={day}>
            {days}
          </div>
        );
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
    <div className="calendar-container">
      <div className="main">
        <div className="calendar">
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodoList
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
