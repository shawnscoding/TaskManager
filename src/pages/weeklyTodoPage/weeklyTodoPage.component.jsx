import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import WeeklyTodoHeader from "../../component/weeklyTodoHeader/weeklyTodoHeader.component";
import LoadingCompoent from "../../component/loader/loadingCompoent";
import DailyTodoDashBoard from "./../../component/dailyTodo/dailyTodoDashboard.component";
import { selectTodoList } from "./../../redux/todo/todo.selectors";
import { useStyles } from "./weeklyTodoPage.styles";
import { format } from "date-fns";

const WeeklyTodoPage = ({ match, todos }) => {
  const classes = useStyles();
  const monthAndDate = match.params.monthAndDate;

  let dailyTodo = todos.filter(
    todo => format(todo.date.toDate(), "MMMd") === monthAndDate
  );

  if (todos.length === 0) return <LoadingCompoent />;
  return (
    <React.Fragment>
      <WeeklyTodoHeader
        dailyTodo={dailyTodo}
        monthAndDate={monthAndDate}
        classes={classes}
      />
      <DailyTodoDashBoard classes={classes} dailyTodo={dailyTodo} />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodoList
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyTodoPage);
