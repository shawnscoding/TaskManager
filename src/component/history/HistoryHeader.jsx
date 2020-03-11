import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import CircleProgress from "./../circleProgress/CircleProgress";
import {
  getThisYear,
  getMostFrequentItem,
  getLeastFrequentItem
} from "../../utils/helper";
import { format } from "date-fns";
import { getPercentageOfCompletedTodo } from "./../../utils/helper";

const LeftItem = styled(Grid)`
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
`;

const RightItem = styled(Grid)`
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
  width: 25rem;
`;

const LeftContainer = styled(Grid)`
  padding: 3rem;
`;

const RightContainer = styled(Grid)`
  padding: 3rem 7rem 3rem 3rem;
`;

const SubContainer = styled(Grid)`
  background: linear-gradient(60deg, #ab47bc, #8e24aa);
  width: 70%;
  position: absolute;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  top: -1rem;
  height: 3rem;
`;

const TypoContainer = styled(Grid)`
  width: 80%;
  margin-bottom: 7px;
`;

const RightTypo = styled(Grid)`
  padding: 0 0 0 1rem;
`;

const GreyText = styled(Typography)`
  color: #999;
`;

const dummyData = [
  { timeToComplete: 1111 },
  { timeToComplete: 1111 },
  { timeToComplete: 1111 },
  { timeToComplete: 1111 }
];

const HistoryHeader = ({ todos }) => {
  const year = getThisYear();
  const formattedDate = { year: year };

  // try reduce on it for practice
  // getTotal hour
  let totalHour = 0;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].totalHour) {
      totalHour += todos[i].totalHour;
    }
  }

  console.log(totalHour);

  // get working hour
  let workingHour = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].workingHour) {
      workingHour += todos[i].workingHour;
      console.log(workingHour, "workingHour");
    }
  }

  console.log(workingHour);

  let arr = [];
  for (let i = 0; i < todos.length; i++) {
    // fix
    if (todos[i].completed === true) {
      arr.push(format(todos[i].date.toDate(), "MMMM"));
    }
  }
  console.log(arr, "arr");

  const maxMonth = getMostFrequentItem(arr);

  // const minMonth = getLeastFrequentItem(arr);

  const getMinutes = seconds => {
    return ("0" + Math.floor((seconds / 60) % 60)).slice(-2);
  };

  const getHours = seconds => {
    return Math.floor(seconds / 3600);
  };

  const getPercentage = (month, todos) => {
    const mon = month.slice(0, 3);
    const newTodo = todos.filter(todo => todo.month === mon);
    console.log(newTodo);
    const { result } = getPercentageOfCompletedTodo(newTodo);
    console.log(result);
    return result;
  };

  return (
    <Grid item container direction="row">
      <LeftContainer sm={6} item>
        <LeftItem container item>
          <CircleProgress todo={todos} formattedDate={formattedDate} />
        </LeftItem>
      </LeftContainer>
      <RightContainer sm={6} item>
        <RightItem>
          <Grid
            style={{ position: "relative" }}
            justify="center"
            direction="column"
            alignItems="center"
            container
            item
          >
            <SubContainer justify="center" alignItems="center" container item>
              <Grid item>
                <Typography style={{ color: "#fff" }}>DashBoard</Typography>
              </Grid>
            </SubContainer>
            <TypoContainer
              justify="flex-start"
              alignItems="center"
              style={{ paddingTop: "3rem" }}
              container
              item
            >
              <Grid item>
                <GreyText>Total Hour:</GreyText>
              </Grid>
              <RightTypo item>
                {getHours(totalHour) === 0 ? null : getHours(totalHour) ===
                  1 ? (
                  <Typography>{getHours(totalHour)} hour</Typography>
                ) : (
                  <Typography>{getHours(totalHour)} hours</Typography>
                )}
                {getMinutes(totalHour) === 0 ? null : getMinutes(totalHour) ===
                  1 ? (
                  <Typography>{getMinutes(totalHour)} min</Typography>
                ) : (
                  <Typography>{getMinutes(totalHour)} mins</Typography>
                )}
              </RightTypo>
            </TypoContainer>
            <TypoContainer
              justify="flex-start"
              alignItems="center"
              container
              item
            >
              <Grid item>
                <GreyText>Working Hour:</GreyText>
              </Grid>
              <RightTypo item>
                {getHours(workingHour) === 0 ? null : getHours(workingHour) ===
                  1 ? (
                  <Typography>{getHours(workingHour)} hour</Typography>
                ) : (
                  <Typography>{getHours(workingHour)} hours</Typography>
                )}
                {getMinutes(workingHour) === 0 ? null : getMinutes(
                    workingHour
                  ) === 1 ? (
                  <Typography>{getMinutes(workingHour)} min</Typography>
                ) : (
                  <Typography>{getMinutes(workingHour)} mins</Typography>
                )}
              </RightTypo>
            </TypoContainer>
            <TypoContainer
              justify="flex-start"
              alignItems="center"
              container
              item
              style={{ paddingBottom: "2rem" }}
            >
              <Grid item>
                <GreyText> Highest Completion Rate:</GreyText>
              </Grid>
              <RightTypo item>
                <Typography>
                  {getPercentage(maxMonth, todos).toString()}% in {maxMonth}
                </Typography>
              </RightTypo>
            </TypoContainer>
            {/* <TypoContainer
              justify="flex-start"
              alignItems="center"
              container
              item
              style={{ paddingBottom: "2rem" }}
            >
              <Grid item>
                <GreyText> Lowest Completion Rate:</GreyText>
              </Grid>
              <RightTypo item>
                <Typography>
                  {getPercentage(minMonth, todos).toString()}% in {minMonth}
                </Typography>
              </RightTypo>
            </TypoContainer> */}
          </Grid>
        </RightItem>
      </RightContainer>
    </Grid>
  );
};

export default HistoryHeader;
