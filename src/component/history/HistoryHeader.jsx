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
  width: 23rem;
  height: 100%;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const ItemColumn = styled(Grid)`
  justify-content: center;
  @media (max-width: 800px) {
    justify-content: flex-start;
  }
`;

const LeftContainer = styled(Grid)`
  padding: 2rem;

  @media (max-width: 960px) {
    padding: 0 0 1rem 0;
  }
`;

const RightContainer = styled(Grid)`
  padding: 2rem 1.5rem 2rem 1.5rem;

  @media (max-width: 800px) {
    padding: 2rem 0;
  }
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

  // get working hour
  let workingHour = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].workingHour) {
      workingHour += todos[i].workingHour;
    }
  }

  let arr = [];
  for (let i = 0; i < todos.length; i++) {
    // fix
    if (todos[i].completed === true) {
      arr.push(format(todos[i].date.toDate(), "MMMM"));
    }
  }

  const maxMonth = getMostFrequentItem(arr);

  // const minMonth = getLeastFrequentItem(arr);

  const getMinutes = seconds => {
    return Math.floor((seconds / 60) % 60);
  };

  const getHours = seconds => {
    return Math.floor(seconds / 3600);
  };

  const getPercentage = (month, todos) => {
    if (!month) return;
    const mon = month.slice(0, 3);
    const newTodo = todos.filter(todo => todo.month === mon);
    const { result } = getPercentageOfCompletedTodo(newTodo);
    return result;
  };
  return (
    <Grid item container direction="row">
      <LeftContainer xs={12} sm={12} md={6} item>
        <LeftItem container item>
          <CircleProgress todo={todos} formattedDate={formattedDate} />
        </LeftItem>
      </LeftContainer>
      <RightContainer xs={12} sm={12} md={6} item>
        <RightItem>
          <ItemColumn
            style={{ position: "relative" }}
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
                <Typography>
                  {getHours(totalHour) === 0 ? null : getHours(totalHour) ===
                    1 ? (
                    <>{getHours(totalHour)} hour &nbsp;</>
                  ) : (
                    <>{getHours(totalHour)} hours &nbsp;</>
                  )}
                  {getMinutes(totalHour) === 0 ? null : getMinutes(
                      totalHour
                    ) === 1 ? (
                    <>{getMinutes(totalHour)} min</>
                  ) : (
                    <>{getMinutes(totalHour)} mins</>
                  )}
                </Typography>
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
                <Typography>
                  {getHours(workingHour) === 0 ? null : getHours(
                      workingHour
                    ) === 1 ? (
                    <>{getHours(workingHour)} hour &nbsp;</>
                  ) : (
                    <>{getHours(workingHour)} hours &nbsp;</>
                  )}
                  {getMinutes(workingHour) === 0 ? null : getMinutes(
                      workingHour
                    ) === 1 ? (
                    <>{getMinutes(workingHour)} min</>
                  ) : (
                    <>{getMinutes(workingHour)} mins</>
                  )}
                </Typography>
              </RightTypo>
            </TypoContainer>
            <TypoContainer
              justify="flex-start"
              alignItems="center"
              container
              item
              style={{ paddingBottom: "2rem" }}
            >
              {getPercentage(maxMonth, todos) === undefined ? null : (
                <React.Fragment>
                  <Grid item>
                    <GreyText> Highest Completion Rate:</GreyText>
                  </Grid>
                  <RightTypo item>
                    <Typography>
                      {getPercentage(maxMonth, todos).toString()} % in{" "}
                      {maxMonth}
                    </Typography>
                  </RightTypo>
                </React.Fragment>
              )}
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
          </ItemColumn>
        </RightItem>
      </RightContainer>
    </Grid>
  );
};

export default HistoryHeader;
