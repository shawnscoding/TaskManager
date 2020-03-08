import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { getPercentageOfCompletedTodo } from "../../utils/helper";
import { makeStyles } from "@material-ui/core/styles";
import { CircleProgress } from "react-gradient-progress";

const useStyles = makeStyles(theme => ({
  percentBig: {
    position: "absolute",
    fontSize: "3rem",

    top: "2.5rem",
    left: "2.5rem",

    letterSpacing: "-1px"
  },
  percentMedium: {
    position: "absolute",
    fontSize: "3rem",

    top: "2.5rem",
    left: "3.2rem",

    letterSpacing: "-1px"
  },
  secondCircle: {
    position: "absolute",
    top: 0,
    left: 0,
    color: "#fff"
  },
  dateBox: {
    paddingLeft: "2rem",
    color: "#00aced"
  },
  typoDay: {
    fontSize: "1.7rem"
  },
  typoDate: {
    fontSize: "1rem"
  },
  NumberOfCompletion: {
    margin: "2px 0 0 8px",
    fontSize: "2rem"
  },
  twTypeDate: {},
  twTypeMonth: {
    margin: "0 0 0 14px"
  }
}));

export const primaryColor = ["#80FF72", "#7EE8FA"];
const primaryConlorSecond = ["#00BBFF", "#92d7f1"];

const Completion = ({
  todo,
  formattedDate,
  withToday,
  handlePreWeek,
  handleNextWeek
}) => {
  const classes = useStyles();
  const [circle, setCircle] = useState(null);
  const { result, completedTodo } = getPercentageOfCompletedTodo(todo);

  useEffect(() => {
    if (result === 100) {
      setCircle(true);
    }
    if (result !== 100) {
      setCircle(false);
    }
  }, [result]);
  return (
    <React.Fragment>
      <Grid xs={4} style={{ position: "relative" }} container item>
        <CircleProgress
          percentage={result}
          strokeWidth={10}
          width={190}
          secondaryColor="#f0f0f0"
        />
      </Grid>
      <Grid
        xs={8}
        className={withToday ? classes.dateBox : null}
        container
        direction="column"
        justify="center"
        item
      >
        <Grid container item>
          {withToday ? (
            <>
              <Grid item>
                <Typography
                  gutterBottom
                  color="primary"
                  className={classes.typoDay}
                >
                  {formattedDate.day}
                </Typography>
              </Grid>
              <Grid color="primary" style={{ margin: "12px 0 0 12px" }} item>
                <Typography gutterBottom className={classes.typoDate}>
                  {formattedDate.date} {formattedDate.month}
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid item>
                <Typography
                  gutterBottom
                  color="primary"
                  className={classes.typoDay}
                >
                  {formattedDate.startDay} ~ {formattedDate.endDay}
                </Typography>
              </Grid>
              <Grid color="primary" style={{ margin: "12px 0 0 12px" }} item>
                <Typography className={classes.typoDate}>
                  {formattedDate.month}
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
        <Grid item>
          <Typography color="primary">Completed Tasks </Typography>
        </Grid>
        <Grid container item>
          <Grid item>
            <Typography color="primary" className={classes.NumberOfCompletion}>
              {completedTodo.length} / {todo.length}
            </Typography>
          </Grid>

          {withToday ? null : (
            <Grid style={{ margin: "0 0 0 3rem" }} item>
              <Button
                color="primary"
                onClick={handlePreWeek}
                style={{
                  margin: "10px 10px 10px 0"
                }}
                variant="outlined"
              >
                Last Week
              </Button>
              <Button
                color="primary"
                onClick={handleNextWeek}
                style={{
                  margin: "10px 0 10px 0"
                }}
                variant="contained"
              >
                Next Week
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Completion;
