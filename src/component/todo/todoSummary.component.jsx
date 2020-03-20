import React, { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { SummaryContainer } from "./dailyTodo.styles";
import { format } from "date-fns";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import MyTodoDetailedPage from "./../../pages/myTodoDetailedPage/myTodoDetailedPage.component";
import { setTodoOnTimer, openTimer } from "../../redux/todo/todo.actions";
import { connect } from "react-redux";
import { getMinutes, getHours } from "../../utils/helper";

import { selectWorking } from "../../redux/todo/todo.selectors";
import { createStructuredSelector } from "reselect";
import { toggleTimerWarning } from "./../../redux/warning/warning.actions";
import TimerIcon from "@material-ui/icons/Timer";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  sumContainer: {
    padding: "0 2rem 0 0 ",

    [theme.breakpoints.down("lg")]: {
      padding: "0 1rem 0 0 "
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 2rem 0 0 "
    },

    [theme.breakpoints.down("md")]: {
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0"
    }
  },
  caSumContainer: {
    padding: "0 2rem 0 0 ",
    flexGrow: 1,
    [theme.breakpoints.down("lg")]: {
      padding: 0
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 2rem 0 0 "
    }
  },
  starIcon: {
    fontSize: "1.5rem",

    "@media (max-width:1100px)": {
      fontSize: "1.2rem"
    }
  },
  startButton: {
    "@media (max-width:1010px)": {
      display: "none"
    }
  },
  summaryLeft: {
    backgroundColor: theme.palette.paper,
    borderRadius: "10px 0 0 10px",
    padding: theme.spacing(1),
    "& p": {
      color: "#fff"
    },
    position: "relative"
  },
  summaryRight: {
    height: "8rem",
    padding: theme.spacing(1)
  },
  summaryTextBox: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
    padding: "4px 10px"
  },
  rateBox: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
    width: "100%"
  }
}));

const TodoSummary = ({
  setTodoOnTimer,
  todo,
  withCalendar = false,
  withPriority = false,
  openTimer,
  toggleTimerWarning,
  working
}) => {
  const [open, setOpen] = useState(false);

  const onClickStart = todo => {
    if (working) {
      toggleTimerWarning();
    } else {
      setTodoOnTimer(todo);
      openTimer();
    }
  };

  const minutes = getMinutes(todo.timeToComplete);
  const hours = getHours(todo.timeToComplete);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        md={withCalendar ? 12 : 6}
        className={withCalendar ? classes.caSumContainer : classes.sumContainer}
        item
      >
        <SummaryContainer
          completed={todo.completed === true ? "completed" : null}
          container
          item
        >
          <Grid
            container
            className={classes.summaryLeft}
            justify="center"
            alignItems="flex-start"
            xs={2}
            item
          >
            <Grid
              container
              alignItems="center"
              justify="center"
              className={classes.summaryTextBox}
              item
            >
              <Typography style={{ textAlign: "center" }}>
                {format(todo.date.toDate(), "p")}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="flex-start"
            className={classes.summaryRight}
            xs={10}
            item
          >
            <Grid container item>
              <Grid item>
                <Typography style={{ fontSize: "1.1rem", fontWeight: 500 }}>
                  {todo.title}
                </Typography>
              </Grid>
              <Grid item>
                {todo.completed ? (
                  <TimerIcon
                    style={{ padding: "3px 0 0 3px ", color: "#fff" }}
                  />
                ) : (
                  <TimerIcon
                    style={{ padding: "3px 0 0 3px ", color: "#2db0b6" }}
                  />
                )}
              </Grid>
            </Grid>
            <Grid item>
              {todo.timeToComplete < 60 ? null : (
                <React.Fragment>
                  <Typography style={{ color: "#999" }}>
                    {todo.timeToComplete && hours === 0 ? null : hours === 1 ? (
                      <React.Fragment>{hours} hour</React.Fragment>
                    ) : (
                      <React.Fragment>{hours} hours</React.Fragment>
                    )}
                    &nbsp;
                    {todo.timeToComplete && minutes === 0 ? null : minutes ===
                      1 ? (
                      <React.Fragment>{minutes} min</React.Fragment>
                    ) : (
                      <React.Fragment>{minutes} mins</React.Fragment>
                    )}{" "}
                    to complete
                  </Typography>
                </React.Fragment>
              )}
              {todo.timeToComplete <= 60 && todo.timeToComplete !== 1 ? (
                <Typography style={{ color: "#999" }}>
                  You've got Only 1 min left !
                </Typography>
              ) : null}

              {todo.completed && (
                <Typography style={{ color: "#fff" }}>
                  You've completed this task
                </Typography>
              )}
            </Grid>

            <Grid
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              container
              className={classes.rateBox}
              item
            >
              <Grid item>
                {withPriority ? null : (
                  <>
                    {todo.importance === 1 ? (
                      <React.Fragment>
                        <StarRoundedIcon className={classes.starIcon} />

                        <StarBorderRoundedIcon className={classes.starIcon} />
                        <StarBorderRoundedIcon className={classes.starIcon} />
                        <StarBorderRoundedIcon className={classes.starIcon} />
                        <StarBorderRoundedIcon className={classes.starIcon} />
                      </React.Fragment>
                    ) : todo.importance === 2 ? (
                      <React.Fragment>
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarBorderRoundedIcon className={classes.starIcon} />
                        <StarBorderRoundedIcon className={classes.starIcon} />
                        <StarBorderRoundedIcon className={classes.starIcon} />
                      </React.Fragment>
                    ) : todo.importance === 3 ? (
                      <React.Fragment>
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarBorderRoundedIcon className={classes.starIcon} />

                        <StarBorderRoundedIcon className={classes.starIcon} />
                      </React.Fragment>
                    ) : todo.importance === 4 ? (
                      <React.Fragment>
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarBorderRoundedIcon className={classes.starIcon} />
                      </React.Fragment>
                    ) : todo.importance === 5 ? (
                      <React.Fragment>
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarRoundedIcon className={classes.starIcon} />
                        <StarRoundedIcon className={classes.starIcon} />
                      </React.Fragment>
                    ) : null}
                  </>
                )}
              </Grid>
              <Grid item>
                {todo.completed === true ? null : (
                  <Button
                    style={{ marginRight: "0.5rem" }}
                    color="primary"
                    className={classes.startButton}
                    variant="outlined"
                    onClick={() => onClickStart(todo)}
                    size={withCalendar ? "small" : "medium"}
                  >
                    start
                  </Button>
                )}

                <Button
                  onClick={() => setOpen(!open)}
                  color="primary"
                  variant="outlined"
                  size={withCalendar ? "small" : "medium"}
                >
                  view
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </SummaryContainer>
      </Grid>

      <MyTodoDetailedPage
        toggleTimerWarning={toggleTimerWarning}
        setTodoOnTimer={setTodoOnTimer}
        todo={todo}
        open={open}
        openTimer={openTimer}
        setOpen={setOpen}
        working={working}
        minutes={minutes}
        hours={hours}
      />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  working: selectWorking
});

const mapDispatchToProps = dispatch => ({
  setTodoOnTimer: todo => dispatch(setTodoOnTimer(todo)),
  openTimer: () => dispatch(openTimer()),
  toggleTimerWarning: () => dispatch(toggleTimerWarning())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoSummary);
