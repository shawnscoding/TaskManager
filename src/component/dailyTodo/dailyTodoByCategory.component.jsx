import React from "react";
import { Grid } from "@material-ui/core";
import { categories } from "./../../redux/todo/todo.utils";

const red = {
  backgroundColor: "red"
};

const blue = {
  backgroundColor: "blue"
};

const green = {
  backgroundColor: "green"
};

const DailyTodoByCategory = ({ dailyTodo, classes }) => {
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

  const todosByCategories = getTodosByCategories();

  return (
    <React.Fragment>
      {dailyTodo.length !== 0 &&
        todosByCategories.map(([group, todos]) =>
          todos.length !== 0 ? (
            <React.Fragment key={group}>
              {group === "Study" ? (
                <Grid container>
                  <Grid style={red} item>
                    {group}
                  </Grid>
                </Grid>
              ) : group === "Health" ? (
                <Grid container>
                  <Grid style={blue} item>
                    {group}
                  </Grid>
                </Grid>
              ) : group === "Work" ? (
                <Grid container>
                  <Grid style={blue} item>
                    {group}
                  </Grid>
                </Grid>
              ) : group === "HouseChore" ? (
                <Grid container>
                  <Grid style={blue} item>
                    {group}
                  </Grid>
                </Grid>
              ) : group === "Socializing" ? (
                <Grid container>
                  <Grid style={blue} item>
                    {group}
                  </Grid>
                </Grid>
              ) : group === "Shopping" ? (
                <Grid container>
                  <Grid style={blue} item>
                    {group}
                  </Grid>
                </Grid>
              ) : (
                <Grid container>
                  <Grid style={green} item>
                    {group}
                  </Grid>
                </Grid>
              )}

              {todos.map(todo => (
                <Grid key={todo.id} container>
                  <Grid sm={6} xs={12} item>
                    {todo.title}
                  </Grid>
                </Grid>
              ))}
            </React.Fragment>
          ) : null
        )}
    </React.Fragment>
  );
};

export default DailyTodoByCategory;
