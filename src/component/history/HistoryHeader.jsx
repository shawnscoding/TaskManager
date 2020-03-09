import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import CircleProgress from "./../circleProgress/CircleProgress";
import { getThisYear } from "../../utils/helper";

const Container = styled(Grid)`
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
`;

const GridItem = styled(Grid)`
  padding: 3rem;
`;

const GridItemRight = styled(Grid)`
  padding: 3rem 7rem 3rem 3rem;
`;

const SubContainer = styled(Grid)`
  background: linear-gradient(60deg, #ab47bc, #8e24aa);
  width: 70%;
  position: absolute;
  top: -1rem;
  height: 3rem;
`;

const HistoryHeader = () => {
  const year = getThisYear();
  const formattedDate = { year: year };
  return (
    <Grid item container direction="row">
      <GridItem sm={6} item>
        <Container container item>
          <CircleProgress formattedDate={formattedDate} />
        </Container>
      </GridItem>
      <GridItemRight sm={6} item>
        <Container>
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
            <Grid item>ddd</Grid>
            <Grid item>ddd</Grid>
            <Grid item>ddd</Grid>
            <Grid item>ddd</Grid>
            <Grid item>ddd</Grid>
          </Grid>
        </Container>
      </GridItemRight>
    </Grid>
  );
};

export default HistoryHeader;
