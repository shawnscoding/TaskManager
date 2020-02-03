import React from "react";
import {
  makeStyles,
  Step,
  Stepper,
  StepLabel,
  Button,
  Typography,
  Box,
  Grid
} from "@material-ui/core";
import TodoFormFirst from "./todoFormSteps/todoFormFirst.component";
import TodoFormSecond from "./todoFormSteps/todoFormSecond.component";
import TodoFormLast from "./todoFormSteps/todoFormLast.component";
import { connect } from "react-redux";
import { addTodoStart } from "./../../redux/todo/todo.actions";
import { pickUpYearMonthAndDate, createNewTodo } from "../../utils/helper";

const useStyles = makeStyles(theme => ({
  backButton: {
    marginRight: theme.spacing(1)
  },
  formControl: {
    minWidth: 120,
    margin: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  stepper: {
    width: "50%"
  },
  items: {
    width: "50%"
  }
}));

const getSteps = () => {
  return ["Set your task", "set the date you will work on", "before you add"];
};

const getStepContent = stepIndex => {
  switch (stepIndex) {
    case 0:
      return "Hi! ready to set a goal?";
    case 1:
      return "when you plan to do?";
    case 2:
      return "We are so proud of you for this challenge! now make sure you are going to do this!";
    default:
      return "Unknown stepIndex";
  }
};

const TodoForm = ({ history, addTodo }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [date, setDate] = React.useState(new Date("2020-02-18T00:00:00"));
  const [form, setForm] = React.useState({
    title: "",
    discription: "",
    category: "",
    hours: "",
    minutes: "",
    importance: 3,
    reward: ""
  });

  const classes = useStyles();

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleDateChange = async date => {
    await setDate(date);
  };

  const handleRatingChange = (e, value) => {
    setForm({
      ...form,
      importance: value
    });
  };

  const handleChange = name => ({ target: { value } }) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async form => {
    try {
      await addTodo(form, date);
      history.push("/start");
    } catch (err) {
      console.log(err);
    }
  };

  const onFormSubmit = () => {
    setTimeout(() => {
      handleSubmit(form);
    }, 3000);
    return <div>Wait a bit please...</div>;
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid className={classes.stepper} item>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      {activeStep === steps.length ? (
        onFormSubmit()
      ) : (
        <Grid className={classes.items} item>
          <Typography color="primary" variant="h4">
            {getStepContent(activeStep)}
          </Typography>
          <form>
            {activeStep === 0 ? (
              <TodoFormFirst
                form={form}
                onChange={handleChange}
                classes={classes}
              />
            ) : activeStep === 1 ? (
              <TodoFormSecond
                date={date}
                form={form}
                onHourChange={handleChange}
                classes={classes}
                onDateAndTimeChange={handleDateChange}
              />
            ) : activeStep === 2 ? (
              <TodoFormLast
                onChange={handleChange}
                classes={classes}
                form={form}
                onRatingChange={handleRatingChange}
              />
            ) : null}
          </form>

          <Box mt={3}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: (form, date) => dispatch(addTodoStart(form, date))
});

export default connect(null, mapDispatchToProps)(TodoForm);
