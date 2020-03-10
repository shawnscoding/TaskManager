import React from "react";
import { CircleProgress } from "react-gradient-progress";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import Graph from "../graph/Graph";

const GridContainer = styled(Grid)`
  border-radius: 6px;
  padding: 20px 3rem;
`;

const SubContainer = styled(Grid)`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  background-color: #fff;
  position: relative;
`;

const TextContainer = styled(Grid)`
  width: 500px;
  text-align: flex-start;
  margin-bottom: 2rem;
`;

const HistoryContainer = ({ first, todos, year }) => {
  let firleft;
  let firright;
  let secleft;
  let secright;
  if (first) {
    firleft = "true";
    firright = "true";
  } else {
    secleft = "true";
    secright = "true";
  }
  return (
    <Grid style={{ margin: "3rem 0" }} item justify="space-around" container>
      <GridContainer sm={6} xs={12} item>
        <SubContainer
          justify="center"
          direction="column"
          alignItems="center"
          container
          item
        >
          <Graph
            year={year}
            todos={todos}
            firleft={firleft}
            secleft={secleft}
          />

          <TextContainer item>
            {first ? (
              <Typography gutterBottom>Completion Rate By Month</Typography>
            ) : (
              <Typography gutterBottom>
                Completion Rate By Categories
              </Typography>
            )}
          </TextContainer>
        </SubContainer>
      </GridContainer>
      <GridContainer sm={6} xs={12} item>
        <SubContainer
          justify="center"
          direction="column"
          alignItems="center"
          container
          item
        >
          <Graph
            year={year}
            todos={todos}
            secright={secright}
            firright={firright}
          />
          <TextContainer item>
            {first ? (
              <Typography gutterBottom>Completion Rate By Hour</Typography>
            ) : (
              <Typography gutterBottom>
                Completion Rate By Importance
              </Typography>
            )}
          </TextContainer>
        </SubContainer>
      </GridContainer>
    </Grid>
  );
};

export default HistoryContainer;
