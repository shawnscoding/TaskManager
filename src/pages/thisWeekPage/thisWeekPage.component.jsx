import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import LoadingCompoent from "../../component/loader/loadingCompoent";
import TodoDashBoard from "../../component/todo/todoDashboard.component";
import { selectTodoList } from "../../redux/todo/todo.selectors";
import { format, startOfWeek, endOfWeek, addWeeks, subWeeks } from "date-fns";
import { withRouter } from "react-router-dom";
import { setAnotherTodoStart } from "../../redux/todo/todo.actions";

const ThisWeekPage = ({ todos, getAnotherTodoList }) => {
  const [weeklyTodo, setWeeklyTodo] = React.useState([]);
  const [week, setWeek] = React.useState(new Date());

  React.useEffect(() => {
    if (todos !== weeklyTodo) {
      const filteredTodo = todos.filter(
        todo => format(todo.date.toDate(), "ww") === format(week, "ww")
      );
      if (filteredTodo.length === 0) {
        setWeeklyTodo([
          {
            title: "",
            category: "",
            date: ""
          }
        ]);
      } else {
        setWeeklyTodo(filteredTodo);
      }
    }
  }, [todos, week]);

  const startDay = startOfWeek(week);
  const endDay = endOfWeek(week);

  const formattedDate = {
    month: format(startDay, "MMMM"),
    startDay: format(startDay, "dd"),
    endDay: format(endDay, "dd")
  };

  const handleNextWeek = () => {
    const nextWeek = addWeeks(week, 1);

    setWeek(nextWeek);
  };

  const handlePreWeek = () => {
    const preWeek = subWeeks(week, 1);

    setWeek(preWeek);
  };

  if (weeklyTodo.length === 0) return <LoadingCompoent />;

  return (
    <React.Fragment>
      <TodoDashBoard
        formattedDate={formattedDate}
        withThisWeekPage={true}
        dailyTodo={weeklyTodo}
        handleNextWeek={handleNextWeek}
        handlePreWeek={handlePreWeek}
      />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodoList
});

const mapDispatchToProps = dispatch => ({
  getAnotherTodoList: month => dispatch(setAnotherTodoStart(month))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ThisWeekPage)
);
