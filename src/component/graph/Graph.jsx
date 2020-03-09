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
  position: absolute;
  top: -1rem;
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
  year
}) => {
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
    <GraphContainer
      width={500}
      height={250}
      data={todoData ? todoData : data}
      firleft={firleft}
      firright={firright}
      secleft={secleft}
      secright={secright}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="total" barSize={15} fill="#ebebeb" />
      <Line type="monotone" dataKey="completed" stroke="#ff7300" />
      {/* <Scatter dataKey="cnt" fill="red" /> */}
    </GraphContainer>
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
