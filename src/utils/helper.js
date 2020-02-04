export const hoursArray = [];
export const minutesArray = [];

for (let i = 1; i < 11; i++) {
  hoursArray.push(`${i}`);
}

for (let i = 1; i < 61; i++) {
  minutesArray.push(`${i}`);
}

export const createNewTodo = (
  form,
  year,
  month,
  dateInTotal,
  newDate,
  userId,
  time
) => {
  const {
    title,
    discription,
    category,
    hours,
    minutes,
    importance,
    reward
  } = form;
  return {
    userId,
    title,
    discription,
    category,
    hours,
    minutes,
    importance,
    reward,
    createdAt: new Date(),
    dateInTotal: dateInTotal,
    year,
    month,
    date: newDate,
    time,
    completed: false
  };
};

export const pickUpYearMonthAndDate = date => {
  const year = date.toString().slice(11, 15);
  const month = date.toString().slice(4, 7);
  const newDate = date.toString().slice(8, 10);
  const timeHour = date.toString().slice(16, 18);
  const timeMinutes = date.toString().slice(19, 21);
  const time = timeHour + timeMinutes;
  return { year, month, newDate, time };
};

export const thisMonth = () => {
  const date = new Date();
  const month = date.toString().slice(4, 7);
  return month;
};

export const getMonthAndDay = day => {
  const newDay = day.toString().slice(8, 10);
  const month = day.toString().slice(4, 7);

  return month + newDay;
};
