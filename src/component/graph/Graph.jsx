import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import styled, { css } from "styled-components";

import {
  LineChart,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar
} from "recharts";
import {
  createRateOfCompletionDataByMonth,
  createRateOfCompletionDataByHour,
  createRateOfCompletionDataByCategory,
  createRateOfCompletionDataByImportance
} from "../../utils/helper";

const GraphContainer = styled(ComposedChart)`

  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.3);
  
  ${props =>
    props.firleft === "true" &&
    css`
      background: linear-gradient(60deg, #31cbdfd6, #0ba4bc);
    `}

    ${props =>
      props.firright === "true" &&
      css`
        background: linear-gradient(60deg, #66bb6a, #43a047);
      `}

    ${props =>
      props.secleft === "true" &&
      css`
        background: linear-gradient(
          60deg,
          rgba(28, 206, 234, 0.82),
          rgba(8, 124, 202, 0.83)
        );
      `}

    ${props =>
      props.secright === "true" &&
      css`
        background: linear-gradient(60deg, #ffa726, #fb8c00);
      `}
`;

const Graph = ({
  firleft = "false",
  firright = "false",
  secleft = "false",
  secright = "false",
  todos,
  year,
  width
}) => {
  console.log(width);
  const [todoData, setTodoData] = useState(null);
  useEffect(() => {
    if (todos.length !== 0) {
      if (firleft === "true") {
        const result = createRateOfCompletionDataByMonth(todos, year);
        setTodoData(result);
      } else if (firright === "true") {
        const result = createRateOfCompletionDataByHour(todos);
        setTodoData(result);
      } else if (secleft === "true") {
        const result = createRateOfCompletionDataByCategory(todos);
        setTodoData(result);
      } else if (secright === "true") {
        const result = createRateOfCompletionDataByImportance(todos);
        setTodoData(result);
      } else {
      }
    }
  }, [todos]);
  // need to fix
  if (!todoData) return <div>dd</div>;
  return (
    <Grid style={{ margin: "-1.5rem 0 0 1rem" }} item>
      <GraphContainer
        width={width === "md" ? 300 : 370}
        height={width === "md" ? 180 : 240}
        data={todoData ? todoData : data}
        firleft={firleft}
        firright={firright}
        secleft={secleft}
        secright={secright}
        margin={
          width === "md"
            ? { top: 10, right: 40, bottom: 10 }
            : {
                top: 20,
                right: 40,
                bottom: 20
              }
        }
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="total"
          barSize={width === "md" ? 10 : 15}
          fill="#ebebeb"
        />
        <Line type="monotone" dataKey="completed" stroke="#ff7300" />
      </GraphContainer>
    </Grid>
  );
};

export default Graph;
const data = [
  {
    name: "Page A",
    completed: 59,
    total: 80
  },
  {
    name: "Page B",
    completed: 86,
    total: 96
  },
  {
    name: "Page C",
    completed: 50,
    total: 100
  },
  {
    name: "Page D",
    completed: 20,
    total: 30
  },
  {
    name: "Page E",
    completed: 1,
    total: 11
  },
  {
    name: "Page F",
    completed: 14,
    total: 68
  }
];
