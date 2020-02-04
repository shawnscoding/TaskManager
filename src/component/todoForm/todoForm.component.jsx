import React from "react";
import {
  Step,
  Stepper,
  StepLabel,
  Button,
  Typography,
  Box,
  Grid,
  CircularProgress
} from "@material-ui/core";
import TodoFormFirst from "./todoFormSteps/todoFormFirst.component";
import TodoFormSecond from "./todoFormSteps/todoFormSecond.component";
import TodoFormThird from "./todoFormSteps/todoFormThird.component";
import { connect } from "react-redux";
import { addTodoStart } from "./../../redux/todo/todo.actions";
import { createStructuredSelector } from "reselect";
import { selectLoading, selectStep } from "../../redux/async/async.selectors";
import {
  increaseTodoFormStep,
  decreaseTodoFormStep
} from "../../redux/async/async.actions";
import todoFormLast from "./todoFormSteps/todoFormLast.component";
import useStyles from "./todoForm.styles";
import TodoPage from "../../pages/todoPage/todoPage.component";

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

const TodoForm = ({
  history,
  addTodo,
  loading,
  activeStep,
  increaseStep,
  decreaseStep
}) => {
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
    increaseStep();
  };

  const handleBack = () => {
    decreaseStep();
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

  const handleSubmit = () => {
    addTodo(form, date);
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
        <TodoPage />
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
              <TodoFormThird
                onChange={handleChange}
                classes={classes}
                form={form}
                onRatingChange={handleRatingChange}
              />
            ) : null}
          </form>

          <Box mt={3}>
            <div className={classes.root}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>{" "}
              {activeStep === steps.length - 1 ? (
                <div className={classes.wrapper}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.buttonSuccess}
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    Accept terms
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </div>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  activeStep: selectStep
});

const mapDispatchToProps = dispatch => ({
  addTodo: (form, date) => dispatch(addTodoStart(form, date)),
  increaseStep: () => dispatch(increaseTodoFormStep()),
  decreaseStep: () => dispatch(decreaseTodoFormStep())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
