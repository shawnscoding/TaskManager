import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import {
  WorkTitle,
  StudyTitle,
  HouseChoreTitle,
  HealthTitle,
  TheRestTitle,
  SocializingTitle,
  ShoppingTitle,
  SummaryContainer
} from "./dailyTodo.styles";
import { categories } from "./../../redux/todo/todo.utils";
import { format } from "date-fns";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

const DailyTodoByCategory = ({ dailyTodo, classes, withCalendar }) => {
  const getTodosByCategories = () => {
    const initCategories = categories.reduce(
      (typeOftodos, category) => ({
        ...typeOftodos,
        [category]: []
      }),
      {}
    );

    return Object.entries(
      dailyTodo.reduce((todos, todo) => {
        const { category } = todo;
        todos[category] = [...todos[category], todo];
        return todos;
      }, initCategories)
    );
  };

  let todosByCategories;

  if (typeof dailyTodo[0].date !== typeof "") {
    todosByCategories = getTodosByCategories();
  }

  return (
    <React.Fragment>
      {dailyTodo.length !== 0 && typeof dailyTodo[0].date !== typeof "" ? (
        todosByCategories.map(([group, todos]) =>
          todos.length !== 0 ? (
            <React.Fragment key={group}>
              <Grid className={classes.categoryContainer} container>
                {todos.length === 0 ? null : group === "Study" ? (
                  <Grid item>
                    <StudyTitle>{group}</StudyTitle>
                  </Grid>
                ) : group === "Health" ? (
                  <Grid item>
                    <HealthTitle>{group}</HealthTitle>
                  </Grid>
                ) : group === "Work" ? (
                  <Grid item>
                    <WorkTitle>{group}</WorkTitle>
                  </Grid>
                ) : group === "HouseChore" ? (
                  <Grid item>
                    <HouseChoreTitle>{group}</HouseChoreTitle>
                  </Grid>
                ) : group === "Socializing" ? (
                  <Grid item>
                    <SocializingTitle>{group}</SocializingTitle>
                  </Grid>
                ) : group === "Shopping" ? (
                  <Grid item>
                    <ShoppingTitle>{group}</ShoppingTitle>
                  </Grid>
                ) : (
                  <Grid item>
                    <TheRestTitle>{group}</TheRestTitle>
                  </Grid>
                )}
              </Grid>

              <Grid className={classes.todosContainer} container>
                {todos.map(todo => (
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
                        <Typography color="primary">{todo.title}</Typography>
                        <Typography color="primary">
                          expected to take &nbsp;
                          {todo.hours === " 1"
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
                        justify="space-between"
                        alignItems="flex-start"
                        container
                        className={classes.rateBox}
                        item
                      >
                        <Grid item>
                          {todo.importance === 1 ? (
                            <React.Fragment>
                              <StarRoundedIcon />

                              <StarBorderRoundedIcon />
                              <StarBorderRoundedIcon />
                              <StarBorderRoundedIcon />
                              <StarBorderRoundedIcon />
                            </React.Fragment>
                          ) : todo.importance === 2 ? (
                            <React.Fragment>
                              <StarRoundedIcon />
                              <StarRoundedIcon />
                              <StarBorderRoundedIcon />
                              <StarBorderRoundedIcon />
                              <StarBorderRoundedIcon />
                            </React.Fragment>
                          ) : todo.importance === 3 ? (
                            <React.Fragment>
                              <StarRoundedIcon />
                              <StarRoundedIcon />
                              <StarRoundedIcon />
                              <StarBorderRoundedIcon />

                              <StarBorderRoundedIcon />
                            </React.Fragment>
                          ) : todo.importance === 4 ? (
                            <React.Fragment>
                              <StarRoundedIcon />
                              <StarRoundedIcon />
                              <StarRoundedIcon />
                              <StarRoundedIcon />
                              <StarBorderRoundedIcon />
                            </React.Fragment>
                          ) : todo.importance === 5 ? (
                            <React.Fragment>
                              <StarRoundedIcon />
                              <StarRoundedIcon />
                              <StarRoundedIcon />
                              <StarRoundedIcon />
                              <StarRoundedIcon />
                            </React.Fragment>
                          ) : null}
                        </Grid>
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
          ) : null
        )
      ) : (
        <div> There is no todo for you </div>
      )}
    </React.Fragment>
  );
};

export default DailyTodoByCategory;
