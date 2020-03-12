import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import Graph from "../graph/Graph";

const Container = styled(Grid)`
  border-radius: 6px;
  padding: 20px 1.5rem;
`;

const SubContainer = styled(Grid)`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  background-color: #fff;
  position: relative;

  @media (max-width: 830px) {
    background-color: transparent;
    box-shadow: unset;
  }
`;

const TextContainer = styled(Grid)`
  width: 500px;
  text-align: flex-start;
  margin: 2rem;
`;

const HistoryContainer = ({ first, todos, year, width }) => {
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
      <Container md={6} sm={12} item>
        <SubContainer
          justify="center"
          direction="column"
          alignItems="flex-start"
          container
          item
        >
          <Graph
            width={width}
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
      </Container>
      <Container md={6} sm={12} item>
        <SubContainer
          justify="center"
          direction="column"
          alignItems="flex-start"
          container
          item
        >
          <Graph
            year={year}
            width={width}
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
      </Container>
    </Grid>
  );
};

export default HistoryContainer;
