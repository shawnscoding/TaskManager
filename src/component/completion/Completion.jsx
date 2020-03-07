import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "../todo/dailyTodo.styles";
import { getPercentageOfCompletedTodo } from "../../utils/helper";

const Completion = ({ todo, classes }) => {
  return (
    <React.Fragment>
      <Grid xs={4} style={{ position: "relative" }} container item>
        <Grid
          style={{
            zIndex: 100
          }}
          item
        >
          <CircularProgress
            style={{
              width: "10rem",
              height: "10rem"
            }}
            variant="static"
            value={100}
            // value={getPercentageOfCompletedTodo(todo).result === 0 ? 60 : 50}
          />
        </Grid>
        <Grid container className={classes.percentage}>
          {/* <Grid item>{getPercentageOfCompletedTodo(todo).result}</Grid> */}
          <Grid style={{ fontSize: "1rem", marginTop: "37px" }} item>
            %
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={8} container direction="column" justify="center" item>
        <Grid item>
          {/* <Typography>
            {formattedDate.month} &nbsp;
            {formattedDate.startDay} ~ &nbsp; {formattedDate.endDay}
          </Typography> */}
        </Grid>
        <Grid item>
          <Typography>Completed Tasks </Typography>
        </Grid>
        <Grid item>
          <Typography>
            {/* {getPercentageOfCompletedTodo(todo).completedTodo.length} /{" "}
            {todo.length}{" "} */}
          </Typography>
        </Grid>
        {/* <Grid item>
          <Button
            color="secondary"
            onClick={handlePreWeek}
            style={{
              margin: "10px 10px 10px 0"
            }}
            variant="outlined"
          >
            Last Week
          </Button>
          <Button
            color="secondary"
            onClick={handleNextWeek}
            style={{
              margin: "10px 0 10px 0"
            }}
            variant="contained"
          >
            Next Week
          </Button>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

export default Completion;
