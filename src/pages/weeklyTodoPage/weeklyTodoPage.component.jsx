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
  const [dailyTodo, setDailyTodo] = React.useState([]);
  const classes = useStyles();
  const monthAndDate = match.params.monthAndDate;

  React.useEffect(() => {
    if (todos.length !== 0) {
      let newTodos = todos.filter(
        todo => format(todo.date.toDate(), "MMMd") === monthAndDate
      );
      if (newTodos.length === 0) {
        const mockDate = monthAndDate.slice(3);
        setDailyTodo([
          {
            title: "",
            category: "",
            date: mockDate
          }
        ]);
        console.log("fired !");
      } else {
        setDailyTodo(newTodos);
      }
      console.log("dailyTodo", dailyTodo);
    }
  }, [todos, monthAndDate]);

  const onDayClick = day => {
    const monthAndDate = format(day, "MMMd");
    let newTodos = todos.filter(
      todo => format(todo.date.toDate(), "MMMd") === monthAndDate
    );
    if (newTodos.length === 0) {
      const date = format(day, "d");
      setDailyTodo([
        {
          title: "",
          category: "",
          date: date
        }
      ]);
    } else {
      setDailyTodo(newTodos);
    }
  };
  console.log("dailyTodo", dailyTodo);

  if (dailyTodo.length === 0) return <LoadingCompoent />;

  return (
    <React.Fragment>
      <WeeklyTodoHeader
        dailyTodo={dailyTodo}
        monthAndDate={monthAndDate}
        classes={classes}
        onDayClick={onDayClick}
      />
      <DailyTodoDashBoard dailyTodo={dailyTodo} />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodoList
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyTodoPage);
