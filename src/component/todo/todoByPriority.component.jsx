import React from "react";
import { Grid } from "@material-ui/core";
import { RoundedBigIcon, BorderRoundedBigIcon } from "./dailyTodo.styles";
import TodoSummary from "./todoSummary.component";

const importance = ["5", "4", "3", "2", "1"];

const TodoByPriority = ({ dailyTodo, classes, withCalendar }) => {
  const withPriority = true;

  const getTodosByPriority = () => {
    const initPriorities = importance.reduce(
      (importanceOftodos, importance) => ({
        ...importanceOftodos,
        [importance]: []
      }),
      {}
    );

    return Object.entries(
      dailyTodo.reduce((todos, todo) => {
        const { importance } = todo;
        let priority = importance.toString();

        todos[priority] = [...todos[priority], todo];
        return todos;
      }, initPriorities)
    );
  };

  let todosByPriority;

  if (typeof dailyTodo[0].date !== typeof "") {
    todosByPriority = getTodosByPriority();
  }

  return (
    <React.Fragment>
      {dailyTodo.length !== 0 && typeof dailyTodo[0].date === typeof "" ? (
        <div>there is no to do for you!</div>
      ) : (
        todosByPriority.reverse().map(([group, todos]) => (
          <React.Fragment key={group}>
            <Grid className={classes.categoryContainer} container>
              {todos.length === 0 ? null : group === "1" ? (
                <Grid item>
                  <RoundedBigIcon />

                  <BorderRoundedBigIcon />
                  <BorderRoundedBigIcon />
                  <BorderRoundedBigIcon />
                  <BorderRoundedBigIcon />
                </Grid>
              ) : group === "2" ? (
                <Grid item>
                  <RoundedBigIcon />

                  <RoundedBigIcon />

                  <BorderRoundedBigIcon />
                  <BorderRoundedBigIcon />
                  <BorderRoundedBigIcon />
                </Grid>
              ) : group === "3" ? (
                <Grid item>
                  <RoundedBigIcon />

                  <RoundedBigIcon />

                  <RoundedBigIcon />

                  <BorderRoundedBigIcon />

                  <BorderRoundedBigIcon />
                </Grid>
              ) : group === "4" ? (
                <Grid item>
                  <RoundedBigIcon />

                  <RoundedBigIcon />

                  <RoundedBigIcon />

                  <RoundedBigIcon />

                  <BorderRoundedBigIcon />
                </Grid>
              ) : group === "5" ? (
                <Grid item>
                  <RoundedBigIcon />

                  <RoundedBigIcon />

                  <RoundedBigIcon />

                  <RoundedBigIcon />

                  <RoundedBigIcon />
                </Grid>
              ) : (
                <Grid item></Grid>
              )}
            </Grid>

            <Grid className={classes.todosContainer} container>
              {todos.map(todo => (
                <TodoSummary
                  withPriority={withPriority}
                  key={todo.id}
                  todo={todo}
                  classes={classes}
                  withCalendar={withCalendar}
                />
              ))}
            </Grid>
          </React.Fragment>
        ))
      )}
    </React.Fragment>
  );
};

export default TodoByPriority;
