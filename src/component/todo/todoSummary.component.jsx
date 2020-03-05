import React, { useState } from "react";
import { Grid, Typography, Button, ButtonGroup } from "@material-ui/core";
import { SummaryContainer } from "./dailyTodo.styles";
import { format } from "date-fns";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import MyTodoDetailedPage from "./../../pages/myTodoDetailedPage/myTodoDetailedPage.component";
import { setTodoOnTimer, openTimer } from "../../redux/todo/todo.actions";
import { connect } from "react-redux";
import { getMinutes } from "../../utils/helper";
import { getHours } from "./../../utils/helper";
import { selectWorking } from "../../redux/todo/todo.selectors";

import { createStructuredSelector } from "reselect";

const TodoSummary = ({
  setTodoOnTimer,
  todo,
  classes,
  withCalendar = false,
  withPriority = false,
  openTimer,
  working
}) => {
  const [open, setOpen] = useState(false);

  const onClickStart = todo => {
    if (working) {
      return;
    }
    setTodoOnTimer(todo);
    openTimer();
  };

  const minutes = getMinutes(todo.timeToComplete);
  const hours = getHours(todo.timeToComplete);
  return (
    <React.Fragment>
      <SummaryContainer container sm={withCalendar ? 11 : 5} xs={11} item>
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
          <Grid item>
            <Typography color="primary">{todo.title}</Typography>
            <Typography color="primary">
              expected &nbsp;
              {todo.timeToComplete && hours === 0 ? null : hours === 1 ? (
                <React.Fragment>{hours} hour</React.Fragment>
              ) : (
                <React.Fragment>{hours} hours</React.Fragment>
              )}
              &nbsp;
              {todo.timeToComplete && minutes === 0 ? null : minutes === 1 ? (
                <React.Fragment>{minutes} min</React.Fragment>
              ) : (
                <React.Fragment>{minutes} mins</React.Fragment>
              )}{" "}
              to complete
            </Typography>
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
                      <StarRoundedIcon />

                      <StarBorderRoundedIcon />
                      <StarBorderRoundedIcon />
                      <StarBorderRoundedIcon />
                      <StarBorderRoundedIcon />
                    </React.Fragment>
                  ) : todo.importance === 2 ? (
                    <React.Fragment>
                      <StarRoundedIcon />
                      <StarRoundedIcon />
                      <StarBorderRoundedIcon />
                      <StarBorderRoundedIcon />
                      <StarBorderRoundedIcon />
                    </React.Fragment>
                  ) : todo.importance === 3 ? (
                    <React.Fragment>
                      <StarRoundedIcon />
                      <StarRoundedIcon />
                      <StarRoundedIcon />
                      <StarBorderRoundedIcon />

                      <StarBorderRoundedIcon />
                    </React.Fragment>
                  ) : todo.importance === 4 ? (
                    <React.Fragment>
                      <StarRoundedIcon />
                      <StarRoundedIcon />
                      <StarRoundedIcon />
                      <StarRoundedIcon />
                      <StarBorderRoundedIcon />
                    </React.Fragment>
                  ) : todo.importance === 5 ? (
                    <React.Fragment>
                      <StarRoundedIcon />
                      <StarRoundedIcon />
                      <StarRoundedIcon />
                      <StarRoundedIcon />
                      <StarRoundedIcon />
                    </React.Fragment>
                  ) : null}
                </>
              )}
            </Grid>
            <Grid item>
              <Button
                style={{ marginRight: "0.5rem" }}
                color="primary"
                className={classes.summaryButton}
                variant="outlined"
                onClick={() => onClickStart(todo)}
              >
                start
              </Button>
              <Button
                className={classes.summaryButton}
                onClick={() => setOpen(!open)}
                color="primary"
                variant="outlined"
              >
                view
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </SummaryContainer>
      <MyTodoDetailedPage
        onClickStart={onClickStart}
        setTodoOnTimer={setTodoOnTimer}
        todo={todo}
        open={open}
        setOpen={setOpen}
      />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  working: selectWorking
});

const mapDispatchToProps = dispatch => ({
  setTodoOnTimer: todo => dispatch(setTodoOnTimer(todo)),
  openTimer: () => dispatch(openTimer())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoSummary);
