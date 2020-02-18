import React, {useState} from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import {

  SummaryContainer
} from "./dailyTodo.styles";
import { format } from "date-fns";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import MyTodoDetailedPage from "./../../pages/myTodoDetailedPage/myTodoDetailedPage.component"

const TodoSummary= ({ todo, classes, withCalendar = false }) => {
    const [  open, setOpen ] = useState(false )
     return (
<React.Fragment 
    >
  <SummaryContainer

    container
    sm={withCalendar ? 11 : 5}
    xs={11}
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
      <Grid item>
        <Typography color="primary">{todo.title}</Typography>
        <Typography color="primary">
          expected to take &nbsp;
          {todo.hours === " 1"
            ? todo.hours + " hour"
            : todo.hours + " hours"}
          {false
            ? todo.minutes === "1"
              ? todo.minutes + "minute"
              : todo.minutes + "minutes"
            : null}
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
        </Grid>
        <Grid item>
          <Button color="primary" variant="outlined">
            start
          </Button>
          <Button onClick={() => setOpen(!open)} color="primary" variant="outlined">
            view
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </SummaryContainer>
  <MyTodoDetailedPage todo={todo} open={open} setOpen={setOpen} />
 
</React.Fragment>


    )

}

 
export default TodoSummary
