import React from "react";
import { Grid, Box } from "@material-ui/core";
import Calendar from "./../../component/calendar/calendar.component";
import { selectTodoList } from "./../../redux/todo/todo.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import TodoDashBoard from "../../component/todo/todoDashboard.component";
import { format } from "date-fns";
import { setAnotherTodoStart } from "../../redux/todo/todo.actions";
import { selectLoading } from "./../../redux/async/async.selectors";
import { getThisMonth } from "./../../utils/helper";

const CalendarPage = ({ todos, getAnotherTodoList, loading }) => {
  const withCalendar = true;
  const [dailyTodo, setDailyTodo] = React.useState([
    {
      title: "",
      category: "",
      date: ""
    }
  ]);
  const today = format(new Date(), "MMMd");
  const [monthAndDate, setMonthAndDate] = React.useState(today);

  React.useEffect(() => {
    if (todos.length !== 0) {
      if (todos[0].date === "") {
        setDailyTodo([
          {
            title: "",
            category: "",
            date: ""
          }
        ]);
      } else {
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
    }
  }, [todos, monthAndDate]);

  const handleClickDate = monthAndDate => {
    setMonthAndDate(monthAndDate);
  };

  const handleClickAnotherMonth = month => {
    getAnotherTodoList(month);
    const thisMonth = getThisMonth();
    if (month === thisMonth) {
      setMonthAndDate(today);
    } else {
      setMonthAndDate(month + "1");
    }
  };

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
          <Calendar
            loading={loading}
            handleClickAnotherMonth={handleClickAnotherMonth}
            handleClickDate={handleClickDate}
            todos={todos}
          />
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
            padding: "0 1rem 1.5rem 0.4rem",
            boxShadow: "0 0 10px 10px rgb(249, 249, 249)",
            borderRadius: "10px",
            overflowY: "auto",
            height: "96%"
          }}
        >
          <TodoDashBoard withCalendar={withCalendar} dailyTodo={dailyTodo} />
        </Box>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = createStructuredSelector({
  todos: selectTodoList,
  loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
  getAnotherTodoList: month => dispatch(setAnotherTodoStart(month))
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
