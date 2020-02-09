import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import {
  SummaryContainer,
  RoundedBigIcon,
  BorderRoundedBigIcon
} from "../../pages/weeklyTodoPage/weeklyTodoPage.styles";
import { format } from "date-fns";

const importance = ["5", "4", "3", "2", "1"];

const DailyTodoByPriority = ({ dailyTodo, classes }) => {
  const getTodosByPriority = () => {
    const initPriorities = importance.reduce(
      (importanceOftodos, importance) => ({
        ...importanceOftodos,
        [importance]: []
      }),
      {}
    );

    console.log(initPriorities, "reversedPriorities");

    return Object.entries(
      dailyTodo.reduce((todos, todo) => {
        const { importance } = todo;
        let priority = importance.toString();
        console.log(priority);
        todos[priority] = [...todos[priority], todo];
        return todos;
      }, initPriorities)
    );
  };

  let todosByPriority;

  if (typeof dailyTodo[0].date !== typeof "") {
    todosByPriority = getTodosByPriority();
    console.log(todosByPriority);
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
                <SummaryContainer key={todo.id} container sm={5} xs={11} item>
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
                      <Typography color="primary">{todo.title}</Typography>
                      <Typography color="primary">
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
            </Grid>
          </React.Fragment>
        ))
      )}
    </React.Fragment>
  );
};

export default DailyTodoByPriority;
