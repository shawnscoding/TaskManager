import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { selectTodoList } from "./../../redux/todo/todo.selectors";
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
        {todos.map((todo, index) => (
          <Grid key={index} item>
            {todo.title}
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodoList
});

export default connect(mapStateToProps)(StartPage);
