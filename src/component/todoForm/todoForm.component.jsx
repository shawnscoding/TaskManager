import React, { useState } from "react";
import {
  Step,
  Stepper,
  StepLabel,
  Button,
  Typography,
  Grid,
  Fab
} from "@material-ui/core";
import TodoFormFirst from "./todoFormSteps/todoFormFirst.component";
import TodoFormSecond from "./todoFormSteps/todoFormSecond.component";
import TodoFormThird from "./todoFormSteps/todoFormThird.component";
import { connect } from "react-redux";
import { addTodoStart } from "./../../redux/todo/todo.actions";
import { createStructuredSelector } from "reselect";
import {
  selectStep,
  selectTodoFormOpen
} from "../../redux/async/async.selectors";
import {
  increaseTodoFormStep,
  decreaseTodoFormStep,
  setTodoFormStepToZero,
  toggleTodoFormOpen
} from "../../redux/async/async.actions";
import useStyles from "./todoForm.styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import AddIcon from "@material-ui/icons/Add";
import TodoFormLast from "./todoFormSteps/todoFormLast.component";
import { format } from "date-fns";
import ProgressButton from "./../progress/ProgressButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
      return "Make sure you are going to do this!";
    default:
      return "Unknown stepIndex";
  }
};

const TodoForm = ({
  addTodo,
  activeStep,
  increaseStep,
  decreaseStep,
  setStepToZero,
  open,
  toggleOpen
}) => {
  // const [openReady, setOpenReady] = useState(false);
  const [date, setDate] = useState(new Date());
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    hours: "",
    minutes: "0",
    importance: 3
  });

  const classes = useStyles();

  const steps = getSteps();

  const handleNext = () => {
    increaseStep();
  };

  const handleBack = () => {
    decreaseStep();
  };

  const handleDateChange = date => {
    let copyDate = date;
    const compare = format(copyDate, "H");
    if (Number(compare) >= 6) {
      setDate(date);
    } else {
      alert("Sorry, we don't support setting a task before 6 AM ");
    }
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

  const onUserLeave = () => {
    setForm({
      title: "",
      description: "",
      category: "",
      hours: "",
      minutes: "",
      importance: 3
    });
    setDate(new Date());
  };

  const onSubmit = () => {
    let copyDate = date;
    const compare = format(copyDate, "H");
    if (Number(compare) < 6) {
      alert("Sorry, we don't support task setting before 6 AM ");
    }

    const formArray = Object.values(form);

    for (let i = 0; i < formArray.length; i++) {
      if (formArray[i] === "") {
        alert("you need to fill in all of the required fields");
        return;
      }
    }
    addTodo(form, date);
  };

  const handleOpen = () => {
    toggleOpen();
  };

  return (
    <React.Fragment>
      <Fab
        className={classes.todoFormButton}
        color="secondary"
        onClick={handleOpen}
        aria-label="add"
      >
        <AddIcon style={{ fontSize: "2rem" }} />
      </Fab>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleOpen}
        fullWidth={true}
        maxWidth="md"
      >
        <Grid
          style={{ height: "75vh" }}
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <Grid
            container
            item
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid xs={10} item>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
          </Grid>

          {activeStep === steps.length ? (
            <TodoFormLast
              setStepToZero={setStepToZero}
              onUserLeave={onUserLeave}
              toggleOpen={toggleOpen}
              open={open}
            />
          ) : (
            <React.Fragment>
              <Grid item>
                <Typography gutterBottom color="primary" variant="h4">
                  {getStepContent(activeStep)}
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                item
                style={{ maxHeight: "37vh", minHeight: "35vh" }}
              >
                <Grid xs={9} item>
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
                </Grid>
              </Grid>
              <Grid className={classes.button} item>
                <div className={classes.root}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <ProgressButton onTodo={true} onSubmit={onSubmit} />
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
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Dialog>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  activeStep: selectStep,
  open: selectTodoFormOpen
});

const mapDispatchToProps = dispatch => ({
  addTodo: (form, date) => dispatch(addTodoStart(form, date)),
  increaseStep: () => dispatch(increaseTodoFormStep()),
  decreaseStep: () => dispatch(decreaseTodoFormStep()),
  setStepToZero: () => dispatch(setTodoFormStepToZero()),
  toggleOpen: () => dispatch(toggleTodoFormOpen())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
