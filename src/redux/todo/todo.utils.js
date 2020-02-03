import { thisMonth } from "./../../utils/helper";

export const onFilterTodoForThisMonth = todoList => {
  const month = thisMonth();
  return todoList.filter(todo => todo.month === month);
};
