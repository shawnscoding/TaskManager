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
      return "make sure you are going to do it!";
    default:
      return "Unknown stepIndex";
  }
};

const TodosForm = ({ history }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [form, setForm] = React.useState({
    title: "",
    discription: "",
    importance: 4,
    category: ""
  });

  const classes = useStyles();

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleChange = name => ({ target: { value } }) => {
    setForm({
      ...form,
      [name]: value
    });
    console.log(form);
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
        (() => history.push("/start"))()
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
              <TodosFormSecond />
            ) : activeStep === 2 ? (
              <TodosFormLast />
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

{
  /* <Box component="fieldset" mb={3} borderColor="transparent">
                      <Typography varient="h5" component="legend">
                        how important is it?
                      </Typography>
                      <Rating
                        name="simple-controlled"
                        value={form.importance}
                        onChange={handleRatingChange}
                      />
                    </Box> */
  // const handleRatingChange = ({ target: { value } }) => {
  //   setForm({
  //     ...form,
  //     importance: Number(value)
  //   })import TodosFormSecond from './todosFormSteps/todosFormSecond.component';
  //   console.log(form);
  // };
}

export default TodosForm;
