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
import { Fab } from "@material-ui/core";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import { onIsTodoExist } from "../../redux/todo/todo.utils";
import { createStructuredSelector } from "reselect";
import { selectTodoListByMonth } from "../../redux/todo/todo.selectors";
import { connect } from "react-redux";
import { selectLoading } from "../../redux/async/async.selectors";
import LoadingComponent from "./../loader/loadingCompoent";
import { getMonthAndDay } from "./../../utils/helper";

const Calendar = ({ todos }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
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

        // let todoArray = todos.map(todo => todo.dateInTotal.toDate() === day);
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart) ? "disabled" : false ? "task" : ""
            }`}
            key={day}
          >
            <span className="number">{formattedDate}</span>
            {onIsTodoExist(monthAndDate, todos) ? (
              <Fab
                size="small"
                variant="extended"
                color="primary"
                className="bg"
              >
                {formattedDate}
                <PlaylistAddCheckIcon />
              </Fab>
            ) : null}
          </div>
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
  };

  // const onDateClick = day => {
  //   this.setState({
  //     isTaskExist: day
  //   });
  // };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

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
  todos: selectTodoListByMonth,
  loading: selectLoading
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
