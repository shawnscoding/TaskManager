import { format } from "date-fns";

export const hoursArray = [];
export const minutesArray = [];

for (let i = 1; i < 11; i++) {
  hoursArray.push(`${i}`);
}

for (let i = 1; i < 61; i++) {
  minutesArray.push(`${i}`);
}

export const createNewTodo = (form, date, userId) => {
  const {
    title,
    discription,
    category,
    hours,
    minutes,
    importance,
    reward
  } = form;
  const month = format(date, "MMM");
  const year = format(date, "yyyy");
  return {
    userId,
    title,
    discription,
    category,
    hours,
    minutes,
    importance,
    reward,
    year,
    month,
    createdAt: new Date(),
    date,
    completed: false
  };
};

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

// export const pickUpYearMonthAndDate = date => {
//   const year = date.toString().slice(11, 15);
//   const month = date.toString().slice(4, 7);
//   const newDate = date.toString().slice(8, 10);5//   const timeHour = date.toString().slice(16, 18);
//   const timeMinutes = date.toString().slice(19, 21);
//   const time = timeHour + timeMinutes;
//   return { year, month, newDate, time };
// };

// export const getMonthAndDay = day => {
//   const newDay = day.toString().slice(8, 10);
//   const month = day.toString().slice(4, 7);

//   return month + newDay;
// };

// export const getThisMonth = () => {
//   const date = new Date();
//   const month = day.toString().slice(4, 7);
//   return month;
// };
