import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import TodoSummary from "./todoSummary.component";

const isTodoCompletedArray = ["true", "false"];

const TodoByCompletion = ({ dailyTodo, classes, withCalendar }) => {
  const runIsTodoCompleted = () => {
    const initIsTodoCompleted = isTodoCompletedArray.reduce(
      (todosByCompletion, trueOrFalse) => ({
        ...todosByCompletion,
        [trueOrFalse]: []
      }),
      {}
    );

    console.log(initIsTodoCompleted, "initIsTodoCompleted");

    return Object.entries(
      dailyTodo.reduce((todos, todo) => {
        const { completed } = todo;
        let newCompleted = completed.toString();

        todos[newCompleted] = [...todos[newCompleted], todo];
        return todos;
      }, initIsTodoCompleted)
    );
  };

  let isTodoCompleted;

  if (typeof dailyTodo[0].date !== typeof "") {
    isTodoCompleted = runIsTodoCompleted();
    console.log(isTodoCompleted);
  }

  const handleTodoIsNotExist = (todos, group) => {
    if (todos.length !== 0) return;
    else if (group === "true") {
      return (
        <Grid container>
          <Grid item>
            <Typography>You have not completed any task</Typography>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid container>
          <Grid item>
            <Typography>you have no task to complete</Typography>
          </Grid>
          <Grid item>
            <Typography>click the button below to create! </Typography>
          </Grid>
          <Grid item>
            <Button>Click! </Button>
          </Grid>
        </Grid>
      );
    }
  };

  return (
    <React.Fragment>
      {dailyTodo.length !== 0 && typeof dailyTodo[0].date === typeof "" ? (
        <div>there is no to do for you!</div>
      ) : (
        isTodoCompleted.map(([group, todos]) => (
          <React.Fragment key={group}>
            <Grid className={classes.categoryContainer} container>
              {group === "true" ? (
                <Grid className={classes.todoByCompletionHeader} item>
                  completed task
                </Grid>
              ) : group === "false" ? (
                <Grid className={classes.todoByCompletionHeader} item>
                  uncompleted task
                </Grid>
              ) : null}
            </Grid>

            <Grid className={classes.todosContainer} container>
              {todos.length !== 0 &&
                todos.map(todo => (
                  <TodoSummary
                    key={todo.id}
                    todo={todo}
                    classes={classes}
                    withCalendar={withCalendar}
                  />
                ))}

              {handleTodoIsNotExist(todos, group)}
            </Grid>
          </React.Fragment>
        ))
      )}
    </React.Fragment>
  );
};

export default TodoByCompletion;
