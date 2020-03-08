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
    fontSize: "1rem",
    color: "#00aced"
  },
  tdRateOfCompletion: {
    margin: "6px 0 0",
    fontSize: "2.3rem"
  },
  twRateOfCompletion: {
    margin: "5px 0 0 0px",
    fontSize: "2.5rem"
  },
  twTypeDate: {},
  twTypeMonth: {
    margin: "0 0 0 14px"
  }
}));

export const primaryColor = ["#33b7c8", "#08e9dff5"];
const primaryConlorSecond = ["#00BBFF", "#92d7f1"];

const CcProgressOnCompletion = ({
  todo,
  formattedDate,
  withToday,
  handlePreWeek,
  handleNextWeek
}) => {
  const classes = useStyles();
  const [aniPercent, setAniPercent] = useState(0);
  const [afterAni, setAfterAni] = useState(false);
  const { result, completedTodo } = getPercentageOfCompletedTodo(todo);

  let ani = 0;
  let test = 0;
  // const animationPercentage = () => {
  //   const myInterval = setInterval(() => {
  //     ani += 1;
  //     // setAniPercent(aniPercent + 1);
  //     console.log(ani);
  //   }, 1000);
  // };

  useEffect(() => {
    const clear = setInterval(() => {
      ani += 1;

      setAniPercent(ani);
    }, 10);
    setTimeout(() => {
      console.log("runnned");
      clearInterval(clear);
      setAfterAni(true);
    }, 1000);
  }, []);

  // const rst = animationPercentage();
  // console.log(aniPercent);
  return (
    <React.Fragment>
      <Grid xs={4} style={{ position: "relative" }} container item>
        <CircleProgress
          percentage={afterAni ? result : aniPercent}
          strokeWidth={10}
          width={190}
          fontColor={afterAni ? "inherit" : "#fafafa"}
          secondaryColor="#f0f0f0"
          primaryColor={primaryColor}
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
            <Typography
              color="primary"
              className={
                withToday
                  ? classes.tdRateOfCompletion
                  : classes.twRateOfCompletion
              }
            >
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

export default CcProgressOnCompletion;
