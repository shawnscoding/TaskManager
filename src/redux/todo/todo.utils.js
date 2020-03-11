import { format } from "date-fns";

export const isTodoExist = (monthAndDate, todos) => {
  if (!todos[0].date) {
    return Boolean(false);
  }
  for (let i = 0; i < todos.length; i++) {
    let date = todos[i].date.toDate();
    let todo = format(date, "MMMd");
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

export const setDailyTodo = (todos, monthAndDate) => {
  return todos.filter(todo => todo.month === monthAndDate);
};

export const checkIfTodoExist = todoList => {
  if (todoList.length === 0) {
    console.log("runnneddd in check");
    return [{ date: "" }];
  } else {
    return todoList;
  }
};

// export const onChageWeeklyTodo = todos => {
//   if (todos.length === 0) {
//     return [{ date: "" }];
//   } else {
//     return [...todos];
//   }
// };

// export const isTodoThisWeek = (todos, newTodo) => {
//   if(todos.length === 0){
//     todos
//   }

//   // if(week !== null){
//   //   format(week, "ww")
//   // }
//   // if (todos.length === 0 && week !== 0) {
//   //   return [...newTodo];
//   // }
//   // if (newTodo.week === todos[0].week) {
//   //   return [newTodo, ...todos];
//   // } else {
//   //   return [...todos];
//   // }
// };

export const categories = [
  "Work",
  "Study",
  "HouseChore",
  "Socializing",
  "Health",
  "Shopping",
  "TheRest"
];

export const createNewTodo = (form, date, userId) => {
  const {
    title,
    description,
    category,
    hours,
    minutes,
    importance,
    reward = ""
  } = form;

  const mins = Number(minutes) * 60;
  const hour = Number(hours) * 3600;
  const timeToComplete = mins + hour;
  const totalHour = mins + hour;
  const workingHour = 0;

  const month = format(date, "MMM");
  const year = format(date, "yyyy");
  const week = format(date, "ww");
  return {
    userId,
    title,
    workingHour,
    totalHour,
    description,
    category,
    timeToComplete,
    importance,
    reward,
    year,
    week,
    month,
    createdAt: new Date(),
    date,
    completed: false
  };
};
