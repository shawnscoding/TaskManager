import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import LoadingCompoent from "../../component/loader/loadingCompoent";
import TodoDashBoard from "../../component/todo/todoDashboard.component";
import { selectWeeklyTodo } from "../../redux/todo/todo.selectors";
import { format, startOfWeek, endOfWeek, addWeeks, subWeeks } from "date-fns";
import { withRouter } from "react-router-dom";
import {
  setAnotherTodoStart,
  getWeeklyTodoStart
} from "../../redux/todo/todo.actions";
import NotTodoExist from "../../component/nonTodoExist/nonTodoExist.component";

const ThisWeekPage = ({ getWeeklyTodo, weeklyTodo, match }) => {
  const [week, setWeek] = React.useState(new Date());
  const [todo, setTodo] = React.useState(null);
  const [noTodo, setNotodo] = React.useState(false);
  React.useEffect(() => {
    // if (thisWeek !== week) {
    //   setWeek(thisWeek);
    // }

    const formattedWeek = format(week, "ww");

    if (weeklyTodo.length === 0 && formattedWeek === match.params.thisWeek) {
      getWeeklyTodo(formattedWeek);
    } else if (
      weeklyTodo.length === 0 &&
      formattedWeek !== match.params.thisWeek
    ) {
      setNotodo(!noTodo);
    }

    if (weeklyTodo.length !== 0) {
      if (weeklyTodo[0].date === "") {
        setNotodo(!noTodo);
      } else {
        setNotodo(false);
        setTodo(weeklyTodo);
      }
    }
  }, [weeklyTodo, week]);

  const startDay = startOfWeek(week);
  const endDay = endOfWeek(week);
  const formattedDate = {
    month: format(startDay, "MMMM"),
    startDay: format(startDay, "dd"),
    endDay: format(endDay, "dd")
  };

  const handleNextWeek = () => {
    const newWeek = addWeeks(week, 1);

    setWeek(newWeek);

    const formattedWeek = format(newWeek, "ww");

    getWeeklyTodo(formattedWeek);
  };

  const handlePreWeek = () => {
    const newWeek = subWeeks(week, 1);
    setWeek(newWeek);
    const formattedWeek = format(newWeek, "ww");
    console.log(newWeek);
    getWeeklyTodo(formattedWeek);
  };

  if (todo === null) return <LoadingCompoent />;
  if (noTodo) return <NotTodoExist />;
  return (
    <React.Fragment>
      <TodoDashBoard
        handleNextWeek={handleNextWeek}
        handlePreWeek={handlePreWeek}
        formattedDate={formattedDate}
        withThisWeekPage={true}
        dailyTodo={todo}
      />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  weeklyTodo: selectWeeklyTodo
});

const mapDispatchToProps = dispatch => ({
  getWeeklyTodo: formattedWeek => dispatch(getWeeklyTodoStart(formattedWeek))
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ThisWeekPage)
);
