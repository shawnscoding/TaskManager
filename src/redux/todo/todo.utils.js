import { format } from "date-fns";

export const isTodoExist = (monthAndDate, todos) => {
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i].month + todos[i].dayOfMonth;
    if (todo === monthAndDate) {
      return Boolean(true);
    }
  }
};

export const countAndSliceTodo = (monthAndDate, todos) => {
  let dailyTodo = [];
  for (let i = 0; i < todos.length; i++) {
    let todo = format(todos[i].date.toDate(), "MMMd");
    if (todo === monthAndDate) {
      dailyTodo.push(todos[i]);
    }
  }

  const slicedDailyTodo = dailyTodo.slice(0, 3);
  return { dailyTodo, slicedDailyTodo };
};

export const categories = [
  "Work",
  "Study",
  "HouseChore",
  "Socializing",
  "Health",
  "Shopping",
  "TheRest"
];
