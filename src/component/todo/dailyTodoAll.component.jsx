import React, { useState } from "react";

import { getAllHoursFromSix } from "../../utils/helper";
import { format } from "date-fns";
import { categories } from "../../redux/todo/todo.utils";
import WorkIcon from "@material-ui/icons/Work";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
import { getMinutes, getHours } from "../../utils/helper";
import { Grid, Typography, Button, Divider } from "@material-ui/core";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWorking } from "../../redux/todo/todo.selectors";
import { setTodoOnTimer, openTimer } from "../../redux/todo/todo.actions";
import { toggleTimerWarning } from "./../../redux/warning/warning.actions";
import MyTodoDetailedPage from "./../../pages/myTodoDetailedPage/myTodoDetailedPage.component";

const DailyTodoAll = ({
  dailyTodo,
  classes,
  withCalendar,
  setTodoOnTimer,
  openTimer,
  toggleTimerWarning,
  working
}) => {
  const allHours = getAllHoursFromSix();

  const substract12 = hour => {
    return hour - 12;
  };

  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState(null);

  const handleFormOpen = todo => {
    const minutes = getMinutes(todo.timeToComplete);
    const hours = getHours(todo.timeToComplete);
    setTodo({ todo, hours, minutes });
    setOpen(!open);
  };

  return (
    <div className={withCalendar ? classes.caBox : classes.box}>
      {dailyTodo.length !== 0 && typeof dailyTodo[0].date !== typeof "" ? (
        allHours.map((hour, index) => (
          <React.Fragment key={index}>
            <Grid className={classes.todoAllContainer} container>
              <Grid
                className={classes.todoAllHour}
                sm={withCalendar ? 2 : 1}
                xs={2}
                item
              >
                {index < 6 ? (
                  <React.Fragment>
                    <Typography
                      className={classes.allTimeText}
                      color="textSecondary"
                    >
                      {hour.toString()}
                    </Typography>

                    <Typography
                      className={classes.allTimeText}
                      color="textSecondary"
                    >
                      AM
                    </Typography>
                  </React.Fragment>
                ) : hour === 12 ? (
                  <React.Fragment>
                    <Typography
                      className={classes.allTimeText}
                      color="textSecondary"
                    >
                      {hour.toString()}
                    </Typography>
                    <Typography
                      className={classes.allTimeText}
                      color="textSecondary"
                    >
                      PM
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Typography
                      className={classes.allTimeText}
                      color="textSecondary"
                    >
                      {substract12(hour).toString()}
                    </Typography>
                    <Typography
                      className={classes.allTimeText}
                      color="textSecondary"
                    >
                      PM
                    </Typography>
                  </React.Fragment>
                )}
              </Grid>
              <Grid
                sm={withCalendar ? 10 : 11}
                xs={10}
                direction="column"
                container
                item
              >
                <Grid item>
                  <Divider />
                </Grid>
                <Grid className={classes.btnContainer} container item>
                  <Grid sm={11} xs={11} style={{ overflow: "hidden" }} item>
                    {dailyTodo
                      .filter(todo => {
                        return (
                          format(todo.date.toDate(), "k") === hour.toString()
                        );
                      })
                      .map(newTodo => (
                        <React.Fragment key={newTodo.id}>
                          <Button
                            onClick={() => handleFormOpen(newTodo)}
                            startIcon={
                              newTodo.category === categories[0] ? (
                                <WorkIcon />
                              ) : newTodo.category === categories[1] ? (
                                <MenuBookIcon />
                              ) : newTodo.category === categories[2] ? (
                                <HomeWorkIcon />
                              ) : newTodo.category === categories[3] ? (
                                <LocalBarIcon />
                              ) : newTodo.category === categories[4] ? (
                                <FitnessCenterIcon />
                              ) : newTodo.category === categories[5] ? (
                                <ShoppingCartOutlinedIcon />
                              ) : newTodo.category === categories[6] ? (
                                <MusicNoteOutlinedIcon />
                              ) : null
                            }
                            fullWidth
                            className={
                              newTodo.category === categories[0]
                                ? classes.Work
                                : newTodo.category === categories[1]
                                ? classes.Study
                                : newTodo.category === categories[2]
                                ? classes.HouseChore
                                : newTodo.category === categories[3]
                                ? classes.Socializing
                                : newTodo.category === categories[4]
                                ? classes.Health
                                : newTodo.category === categories[5]
                                ? classes.Shopping
                                : newTodo.category === categories[6]
                                ? classes.TheRest
                                : null
                            }
                          >
                            <Grid container>
                              <Grid item>
                                <Typography>{newTodo.title}</Typography>
                              </Grid>
                            </Grid>
                          </Button>
                        </React.Fragment>
                      ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
        ))
      ) : (
        <div>no todo for you</div>
      )}
      {todo && (
        <MyTodoDetailedPage
          toggleTimerWarning={toggleTimerWarning}
          setTodoOnTimer={setTodoOnTimer}
          todo={todo.todo}
          open={open}
          openTimer={openTimer}
          setOpen={setOpen}
          working={working}
          minutes={todo.minutes}
          hours={todo.hours}
        />
      )}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DailyTodoAll);
