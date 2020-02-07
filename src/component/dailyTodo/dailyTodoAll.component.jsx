import React from "react";
import { Grid, Button, Box, Divider, Typography } from "@material-ui/core";
import { getAllHoursFromSix } from "./../../utils/helper";
import { format } from "date-fns";
import { categories } from "./../../redux/todo/todo.utils";
import WorkIcon from "@material-ui/icons/Work";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";

const DailyTodoAll = ({ dailyTodo, classes }) => {
  const allHours = getAllHoursFromSix();

  const substract12 = hour => {
    return hour - 12;
  };

  return (
    <React.Fragment>
      {allHours.map((hour, index) => (
        <Grid className={classes.todoAllContainer} key={index} container>
          <Grid className={classes.todoAllHour} sm={1} xs={2} item>
            {index < 6 ? (
              <React.Fragment>
                <Typography color="textSecondary">{hour.toString()}</Typography>
                <Typography color="textSecondary">AM</Typography>
              </React.Fragment>
            ) : hour === 12 ? (
              <React.Fragment>
                <Typography color="textSecondary">{hour.toString()}</Typography>
                <Typography color="textSecondary">PM</Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography color="textSecondary">
                  {substract12(hour).toString()}
                </Typography>
                <Typography color="textSecondary">PM</Typography>
              </React.Fragment>
            )}
          </Grid>
          <Grid sm={11} xs={10} item>
            <Divider />
            <Grid container>
              <Grid sm={8} item>
                {dailyTodo.length !== 0 &&
                  dailyTodo
                    .filter(todo => {
                      return (
                        format(todo.date.toDate(), "k") === hour.toString()
                      );
                    })
                    .map(newTodo => (
                      <React.Fragment key={newTodo.id}>
                        <Button
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
                            <Grid xs={7} item>
                              <Typography>{newTodo.title}</Typography>
                            </Grid>
                            <Grid xs={5} item></Grid>
                          </Grid>
                        </Button>
                      </React.Fragment>
                    ))}
              </Grid>
              <Grid sm={4} item></Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default DailyTodoAll;
