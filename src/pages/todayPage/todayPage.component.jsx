import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import DailyTodoHeader from "../../component/dailyTodoHeader/dailyTodoHeader.component";
import LoadingCompoent from "../../component/loader/loadingCompoent";
import TodoDashBoard from "../../component/todo/todoDashboard.component";
import { selectMonthlyTodo } from "../../redux/todo/todo.selectors";
import { useStyles } from "./todayPage.styles";
import { format } from "date-fns";

const TodayPage = ({ match, todos }) => {
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
      } else {
        setDailyTodo(newTodos);
      }
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

  if (dailyTodo.length === 0) return <LoadingCompoent />;

  return (
    <React.Fragment>
      <DailyTodoHeader
        dailyTodo={dailyTodo}
        monthAndDate={monthAndDate}
        classes={classes}
        onDayClick={onDayClick}
      />
      <TodoDashBoard dailyTodo={dailyTodo} />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectMonthlyTodo
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodayPage);
