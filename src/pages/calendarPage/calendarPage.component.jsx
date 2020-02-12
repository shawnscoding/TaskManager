import React from "react";
import { Grid, Box } from "@material-ui/core";
import Calendar from "./../../component/calendar/calendar.component";
import { selectTodoList } from "./../../redux/todo/todo.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import LoadingCompoent from "../../component/loader/loadingCompoent";
import DailyTodoDashBoard from "./../../component/dailyTodo/dailyTodoDashboard.component";
import { format } from "date-fns";

const CalendarPage = ({ todos }) => {
  const withCalendar = true;
  const [dailyTodo, setDailyTodo] = React.useState([]);
  const today = format(new Date(), "MMMd");
  const [monthAndDate, setMonthAndDate] = React.useState(today);

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
    }
  }, [todos, monthAndDate]);

  const handleClickDate = monthAndDate => {
    setMonthAndDate(monthAndDate);
  };

  if (todos.length === 0) return <LoadingCompoent />;
  return (
    <Grid style={{ overflowY: "auto", height: "100%" }} container>
      <Grid style={{ padding: "2rem 1.5rem 2rem 2rem" }} xs={6} item>
        <Box
          style={{
            backgroundColor: "rgb(249, 249, 249)",
            padding: "0.7rem 1rem 1.5rem 0.5rem",
            boxShadow: "0 0 10px 10px rgb(249, 249, 249)",
            borderRadius: "10px",
            overflowY: "auto",
            height: "96%"
          }}
        >
          <Calendar handleClickDate={handleClickDate} todos={todos} />
        </Box>
      </Grid>
      <Grid
        style={{ padding: "2rem 2rem 2rem 1.5rem", height: "100%" }}
        xs={6}
        item
      >
        <Box
          style={{
            backgroundColor: "rgb(249, 249, 249)",
            padding: "0 1rem 1.5rem 1rem",
            boxShadow: "0 0 10px 10px rgb(249, 249, 249)",
            borderRadius: "10px",
            overflowY: "auto",
            height: "96%"
          }}
        >
          <DailyTodoDashBoard
            withCalendar={withCalendar}
            dailyTodo={dailyTodo}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = createStructuredSelector({
  todos: selectTodoList
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
