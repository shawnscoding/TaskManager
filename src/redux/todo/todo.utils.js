import { thisMonth } from "./../../utils/helper";

export const onFilterTodoForThisMonth = todoList => {
  const month = thisMonth();
  return todoList.filter(todo => todo.month === month);
};

export const onIsTodoExist = (monthAndDate, todos) => {
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i].month + todos[i].date;
    console.log(todo);
    if (todo === monthAndDate) {
      return Boolean(true);
    }
  }
};
