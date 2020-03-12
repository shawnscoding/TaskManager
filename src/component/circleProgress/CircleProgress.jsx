import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { getPercentageOfCompletedTodo } from "../../utils/helper";
import { makeStyles } from "@material-ui/core/styles";
import { CircleProgress } from "react-gradient-progress";
import withWidth from "@material-ui/core/withWidth";

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
    paddingLeft: "",
    color: "#00aced",
    fontSize: "1rem"
  },
  typoDay: {
    fontSize: "1.7rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.3rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.7rem"
    },
    "@media (max-width:1120px)": {
      fontSize: "1.2rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }
  },
  typoDate: {
    fontSize: "1rem",
    color: "#00aced",
    [theme.breakpoints.down("lg")]: {
      fontSize: "0.9rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem"
    },
    "@media (max-width:1120px)": {
      fontSize: "0.7rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem"
    }
  },

  tdRateOfCompletion: {
    margin: "6px 0 0",
    fontSize: "2rem"
  },
  twRateOfCompletion: {
    fontSize: "2rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "2rem"
    }
  },
  twTypeMonth: {
    margin: "0 0 0 14px"
  },
  leftbutton: {
    margin: "0 5px 0 0",
    "@media (max-width:700px)": {
      fontSize: "0.6rem"
    },
    "@media (max-width:1150px)": {
      fontSize: "0.6rem"
    }
  },
  rightButton: {
    "@media (max-width:700px)": {
      fontSize: "0.6rem"
    },
    "@media (max-width:1150px)": {
      fontSize: "0.6rem"
    }
  }
}));

export const primaryColor = ["#33b7c8", "#08e9dff5"];
const primaryConlorSecond = ["#00BBFF", "#92d7f1"];

const CcProgressOnCompletion = ({
  todo = [{ date: "0" }],
  formattedDate,
  withToday,
  handlePreWeek,
  handleNextWeek,
  withThisWeek,
  width
}) => {
  const classes = useStyles();
  const [aniPercent, setAniPercent] = useState(0);
  const [afterAni, setAfterAni] = useState(false);
  const { result, completedTodo } = getPercentageOfCompletedTodo(todo);

  let ani = 0;
  console.log(width, "width");
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
    return () => {
      console.log("runeed! ");
      clearInterval(clear);
    };
  }, []);

  return (
    <React.Fragment>
      <Grid
        lg={6}
        md={withThisWeek ? 6 : 8}
        sm={6}
        xs={6}
        style={{ position: "relative" }}
        container
        item
      >
        <CircleProgress
          percentage={afterAni ? result : aniPercent}
          strokeWidth={width === "md" ? 8 : width === "lg" ? 10 : 7}
          width={width === "md" ? 170 : width === "lg" ? 190 : 165}
          fontColor={afterAni ? "inherit" : "#fafafa"}
          secondaryColor="#f0f0f0"
          primaryColor={primaryColor}
        />
      </Grid>
      <Grid
        lg={6}
        md={withThisWeek ? 6 : 4}
        sm={6}
        xs={6}
        className={withToday ? classes.dateBox : null}
        container
        direction="column"
        justify="center"
        item
      >
        <Grid item>
          {withToday ? (
            <>
              <Typography className={classes.typoDate}>
                {formattedDate.date} {formattedDate.month}
              </Typography>
              <Typography color="primary" className={classes.typoDay}>
                {formattedDate.day}
              </Typography>
            </>
          ) : withThisWeek ? (
            <>
              <Grid container item>
                <Grid item>
                  <Typography color="primary" className={classes.typoDay}>
                    {formattedDate.startDay} ~ {formattedDate.endDay}
                  </Typography>
                </Grid>

                <Grid color="primary" style={{ margin: "12px 0 0 12px" }} item>
                  <Typography className={classes.typoDate}>
                    {formattedDate.month}
                  </Typography>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid item>
                <Typography color="primary" className={classes.typoDay}>
                  {formattedDate.year}
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
        <Grid item>
          <Typography className={classes.typoDate} color="primary">
            Completed Tasks{" "}
          </Typography>
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
        </Grid>
        {withThisWeek ? (
          <Grid item>
            <Button
              color="primary"
              onClick={handlePreWeek}
              className={classes.leftbutton}
              variant="outlined"
            >
              Last Week
            </Button>
            <Button
              color="primary"
              className={classes.rightButton}
              onClick={handleNextWeek}
              variant="contained"
            >
              Next Week
            </Button>
          </Grid>
        ) : null}
      </Grid>
    </React.Fragment>
  );
};

export default withWidth()(CcProgressOnCompletion);
