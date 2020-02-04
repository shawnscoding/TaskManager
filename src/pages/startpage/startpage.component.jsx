import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { selectTodoListByMonth } from "./../../redux/todo/todo.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  }
}));

const StartPage = ({ history, todos }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        className={classes.root}
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {todos.map(todo => (
          <Grid key={todo.id} item></Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodoListByMonth
});

// const mapDispatchToProps = dispatch => ({
//   getTodoForThisMonth: () => dispatch(filterTodoForThisMonth())
// })

export default connect(mapStateToProps)(StartPage);
