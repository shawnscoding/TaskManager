import React from "react";
import { Grid, } from "@material-ui/core";
import {
  WorkTitle,
  StudyTitle,
  HouseChoreTitle,
  HealthTitle,
  TheRestTitle,
  SocializingTitle,
  ShoppingTitle,
} from "./dailyTodo.styles";
import { categories } from "../../redux/todo/todo.utils";
import TodoSummary from "./todoSummary.component";

const TodoByCategory = ({ dailyTodo, classes, withCalendar }) => {
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
            <Grid     className={classes.todosContainer} container>
                {todos.map(todo => (

               <TodoSummary key={todo.id} todo={todo} classes={classes} withCalendar={withCalendar}   />
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

export default TodoByCategory;
