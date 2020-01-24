import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import {
  Typography,
  Box,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid
} from "@material-ui/core";
// import Rating from "@material-ui/lab/Rating";
import TodosFormFirst from "./todosFormSteps/todosFormFirst.component";
import TodosFormSecond from "./todosFormSteps/todosFormSecond.component";
import TodosFormLast from "./todosFormSteps/todosFormLast.component";

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

const TodosForm = ({ history }) => {
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

  const handleDateChange = date => {
    setDate(date);
  };

  const handleRatingChange = (e, value) => {
    setForm({
      ...form,
      importance: value
    });
    console.log(form);
  };

  const handleChange = name => ({ target: { value } }) => {
    setForm({
      ...form,
      [name]: value
    });
    console.log(form);
  };

  const handleSubmit = form => {
    const test = console.log("submitted", form);
    history.push("/start");
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
        handleSubmit(form)
      ) : (
        <Grid className={classes.items} item>
          <Typography color="primary" variant="h4">
            {getStepContent(activeStep)}
          </Typography>
          <form>
            {activeStep === 0 ? (
              <TodosFormFirst
                form={form}
                onChange={handleChange}
                classes={classes}
              />
            ) : activeStep === 1 ? (
              <TodosFormSecond
                date={date}
                form={form}
                onHourChange={handleChange}
                classes={classes}
                onDateAndTimeChange={handleDateChange}
              />
            ) : activeStep === 2 ? (
              <TodosFormLast
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

export default TodosForm;
