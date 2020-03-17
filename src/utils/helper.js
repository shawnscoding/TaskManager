import { format, startOfYear, addMonths, addHours } from "date-fns";
import { categories } from "./../redux/todo/todo.utils";

export const hoursArray = [];
export const minutesArray = [];

for (let i = 0; i < 11; i++) {
  hoursArray.push(`${i}`);
}

for (let i = 0; i < 60; i++) {
  minutesArray.push(`${i}`);
}

export const getThisMonth = () => {
  const date = new Date();
  const month = format(date, "MMM");
  return month;
};

export const getThisYear = () => {
  const date = new Date();
  return format(date, "yyyy");
};

export const getMonthAndDay = day => {
  return format(day, "MMMd");
};

export const getAllHoursFromSix = () => {
  let hoursArray = [];
  for (let i = 6; i < 24; i++) {
    hoursArray.push(i);
  }

  return hoursArray;
};

export const getThisWeek = () => {
  const thisWeek = format(new Date(), "ww");
  return thisWeek;
};

export const beforeRenderTodo = todos => {
  if (todos.length !== 0 && typeof todos[0].date !== typeof "") {
    return true;
  } else {
    return false;
  }
};

export const getPercentageOfCompletedTodo = todos => {
  if (todos.length === 0) return 0;
  const completedTodo = todos.filter(todo => todo.completed === true);
  const result = Math.round((completedTodo.length / todos.length) * 100);
  return {
    result,
    completedTodo
  };
};

export const getMinutes = seconds => {
  if (!seconds) {
    return;
  }
  return Math.floor((seconds / 60) % 60);
};

export const getHours = seconds => {
  if (!seconds) {
    return;
  }
  return Math.floor(seconds / 3600);
};

export const createRateOfCompletionDataByMonth = (todos, year) => {
  const monthList = [];
  if (todos.length === 0) return monthList;
  let month = startOfYear(year);

  for (let i = 0; i < 12; i++) {
    const march = todos.filter(todo => todo.month === format(month, "MMM"));
    const completed = march.filter(todo => todo.completed === true);
    monthList.push({
      name: format(month, "MMM"),
      completed: completed.length,
      total: march.length
    });
    month = addMonths(month, 1);
  }

  return monthList;
};

export const createRateOfCompletionDataByHour = todos => {
  const monthList = [];
  if (todos.length === 0) return monthList;
  let hour = new Date("2020 1 1 06:01");
  for (let i = 0; i < 18; i++) {
    const total = todos.filter(
      todo => format(todo.date.toDate(), "H") === format(hour, "H")
    );
    const completed = total.filter(todo => todo.completed === true);
    monthList.push({
      name: format(hour, "hh"),
      completed: completed.length,
      total: total.length
    });

    hour = addHours(hour, 1);
  }

  return monthList;
};

export const createRateOfCompletionDataByCategory = todos => {
  const monthList = [];
  if (todos.length === 0) return monthList;
  const category = categories;
  for (let i = 0; i < category.length; i++) {
    const total = todos.filter(todo => todo.category === category[i]);
    const completed = total.filter(todo => todo.completed === true);
    monthList.push({
      name: category[i],
      completed: completed.length,
      total: total.length
    });
  }

  return monthList;
};

export const createRateOfCompletionDataByImportance = todos => {
  const monthList = [];
  if (todos.length === 0) return monthList;
  const importance = [1, 2, 3, 4, 5];
  const importanceInLetter = ["One", "Two", "Three", "Four", "Five"];
  for (let i = 0; i < importance.length; i++) {
    const total = todos.filter(todo => todo.importance === importance[i]);
    const completed = total.filter(todo => todo.completed === true);
    monthList.push({
      name: importanceInLetter[i],
      completed: completed.length,
      total: total.length
    });
  }

  return monthList;
};

export const getMostFrequentItem = array => {
  if (array.length == 0) return null;
  var modeMap = {};
  var maxEl = array[0],
    maxCount = 1;
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
};

// solve it later
// export const getLeastFrequentItem = array => {
//   if (array.length == 0) return null;
//   var modeMap = {};
//   var minEl = array[0],
//     minCount = 100;
//   for (var i = 0; i < array.length; i++) {
//     var el = array[i];
//     if (modeMap[el] == null) modeMap[el] = 100;
//     else modeMap[el]--;
//     if (modeMap[el] < minCount) {
//       minEl = el;
//       minCount = modeMap[el];
//     }
//     console.log("modeMap", modeMap);
//   }
//   console.log("minEl", minEl);
//   return minEl;
// };
