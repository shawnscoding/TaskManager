import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import LoadingCompoent from "../../component/loader/loadingCompoent";
import TodoDashBoard from "../../component/todo/todoDashboard.component";
import { selectTodoList } from "../../redux/todo/todo.selectors";
import { getWeeklyTodoStart } from "../../redux/todo/todo.actions";
import { format, startOfWeek, endOfWeek } from "date-fns";

const ThisWeekPage = ({ match, todos }) => {
  const [weeklyTodo, setWeeklyTodo] = React.useState([]);
  const thisWeek = match.params.thisWeek;
  const [week, setWeek] = React.useState(null);

  React.useEffect(() => {
    if (thisWeek !== week) {
      setWeek(thisWeek);
    }
    if (todos !== weeklyTodo) {
      const filteredTodo = todos.filter(
        todo => format(todo.date.toDate(), "ww") === thisWeek.slice(4)
      );

      setWeeklyTodo(filteredTodo);
    }
  }, [todos, week]);

  const monthDate = new Date(thisWeek.slice(0, 2) + " " + thisWeek.slice(2, 4));

  const startDay = startOfWeek(monthDate);
  const endDay = endOfWeek(monthDate);

  const formattedDate = {
    month: format(startDay, "MMMM"),
    startDay: format(startDay, "dd"),
    endDay: format(endDay, "dd")
  };

  console.log(formattedDate);

  const onClickAnthorWeek = day => {
    const monthAndDate = format(day, "MMMd");
    let newTodos = todos.filter(
      todo => format(todo.date.toDate(), "MMMd") === monthAndDate
    );
    if (newTodos.length === 0) {
      const date = format(day, "d");
      setWeeklyTodo([
        {
          title: "",
          category: "",
          date: date
        }
      ]);
    } else {
      setWeeklyTodo(newTodos);
    }
  };
  if (weeklyTodo.length === 0) return <LoadingCompoent />;

  return (
    <React.Fragment>
      <TodoDashBoard
        formattedDate={formattedDate}
        withThisWeekPage={true}
        dailyTodo={weeklyTodo}
      />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodoList
});

const mapDispatchToProps = dispatch => ({
  getWeeklyTodo: week => dispatch(getWeeklyTodoStart(week))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThisWeekPage);
