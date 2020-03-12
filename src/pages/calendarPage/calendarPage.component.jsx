import React from "react";
import { Grid, Box } from "@material-ui/core";
import Calendar from "./../../component/calendar/calendar.component";
import { selectMonthlyTodo } from "./../../redux/todo/todo.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import TodoDashBoard from "../../component/todo/todoDashboard.component";
import { format } from "date-fns";
import {
  setAnotherTodoStart,
  resetMonthlyTodoOnRoute
} from "../../redux/todo/todo.actions";
import { selectLoading } from "./../../redux/async/async.selectors";
import { getThisMonth } from "./../../utils/helper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2rem 1.5rem 2rem 2rem",
    height: "100%",
    [theme.breakpoints.up("lg")]: {
      padding: "2rem 1.5rem 2rem 2rem "
    },
    [theme.breakpoints.down("lg")]: {
      padding: "2rem 0rem 2rem 0rem "
    },
    "@media (max-width:960px)": {
      padding: "2rem 0 0 0"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  box: {
    backgroundColor: "rgb(249, 249, 249)",
    padding: "0.7rem 1rem 1.5rem 0.5rem",
    boxShadow: "0 0 10px 10px rgb(249, 249, 249)",
    borderRadius: "10px",
    overflowY: "auto",
    height: "96%",
    [theme.breakpoints.down("md")]: {
      padding: "0 3rem 0 3rem"
    },
    [theme.breakpoints.up("md")]: {
      padding: "0.7rem 1rem 1.5rem 0.5rem"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.7rem 2rem 1.5rem 2rem"
    }
  },
  container: {
    overflowY: "auto",
    height: "95vh",
    [theme.breakpoints.down("md")]: {
      height: "unset"
    },
    [theme.breakpoints.up("md")]: {
      height: "95vh"
    }
  }
}));

const CalendarPage = ({ todos, getAnotherTodo, loading }) => {
  const classes = useStyles();
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
    getAnotherTodo(month);
    console.log(month);
    console.log(month + "1");
    const thisMonth = getThisMonth();
    if (month === thisMonth) {
      setMonthAndDate(today);
    } else {
      setMonthAndDate(month + "1");
    }
  };

  return (
    <Grid justify="center" className={classes.container} container>
      <Grid className={classes.root} md={6} sm={12} item>
        <Box className={classes.box}>
          <Calendar
            loading={loading}
            handleClickAnotherMonth={handleClickAnotherMonth}
            handleClickDate={handleClickDate}
            todos={todos}
          />
        </Box>
      </Grid>
      <Grid className={classes.root} md={6} sm={12} item>
        <Box className={classes.box}>
          <TodoDashBoard withCalendar={withCalendar} dailyTodo={dailyTodo} />
        </Box>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = createStructuredSelector({
  todos: selectMonthlyTodo,
  loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
  getAnotherTodo: month => dispatch(setAnotherTodoStart(month))
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
