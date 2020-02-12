import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { SummaryContainer } from "./dailyTodo.styles";
import { format } from "date-fns";

const isTodoCompletedArray = ["true", "false"];

const DailyTodoByCompletion = ({ dailyTodo, classes, withCalendar }) => {
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
                  <SummaryContainer
                    key={todo.id}
                    container
                    sm={withCalendar ? 11 : 5}
                    xs={11}
                    item
                  >
                    <Grid
                      container
                      className={classes.summaryLeft}
                      justify="center"
                      alignItems="flex-start"
                      xs={2}
                      item
                    >
                      <Grid
                        container
                        alignItems="center"
                        justify="center"
                        className={classes.summaryTextBox}
                        item
                      >
                        <Typography style={{ textAlign: "center" }}>
                          {format(todo.date.toDate(), "p")}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      direction="column"
                      justify="space-between"
                      alignItems="flex-start"
                      className={classes.summaryRight}
                      xs={10}
                      item
                    >
                      <Grid item>
                        <Typography>{todo.title}</Typography>
                        <Typography>
                          expected to take &nbsp;
                          {todo.hours === "1"
                            ? todo.hours + " hour"
                            : todo.hours + " hours"}
                          {false
                            ? todo.minutes === "1"
                              ? todo.minutes + "minute"
                              : todo.minutes + "minutes"
                            : null}
                        </Typography>
                      </Grid>
                      <Grid
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                        container
                        className={classes.rateBox}
                        item
                      >
                        <Grid item>
                          <Button color="primary" variant="outlined">
                            view
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </SummaryContainer>
                ))}

              {handleTodoIsNotExist(todos, group)}
            </Grid>
          </React.Fragment>
        ))
      )}
    </React.Fragment>
  );
};

export default DailyTodoByCompletion;
