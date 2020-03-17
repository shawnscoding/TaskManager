import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { toggleTodoFormOpen } from "./../../redux/async/async.actions";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    width: "60%",
    padding: "1.5rem",
    background: "#fff",
    maxWidth: "570px",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
      width: "80%"
    }
  },
  caContainer: {
    padding: "2rem 0",
    background: "#fff",
    maxWidth: "570px",
    borderRadius: "10px"
  },
  hsContainer: {
    width: "60%",
    padding: "3rem 0 2rem 0",
    margin: "6rem 0 0 0",
    background: "#fff",
    maxWidth: "570px",
    borderRadius: "10px"
  },
  logo: {
    color: "rgba(215, 217, 217, 0.95)",
    width: "20rem",
    height: "20rem",
    [theme.breakpoints.down("sm")]: {
      width: "14rem",
      height: "13rem"
    }
  }
}));

const NonTodoExist = ({
  toggleOpen,
  withThisWeekPage = false,
  withCalendar = false,
  onHistory = false
}) => {
  const handleAddTodo = () => {
    toggleOpen();
  };
  const classes = useStyles();
  return (
    <Grid alignItems="center" justify="center" container>
      <Grid
        direction="column"
        justify="space-around"
        alignItems="center"
        container
        item
        className={
          withCalendar
            ? classes.caContainer
            : onHistory
            ? classes.hsContainer
            : classes.container
        }
      >
        <Grid item>
          <Typography gutterBottom variant="h4">
            {onHistory ? (
              <React.Fragment>
                Sorry, You have no History This year
              </React.Fragment>
            ) : (
              <React.Fragment>
                {" "}
                You have No task &nbsp;
                {withThisWeekPage ? (
                  <React.Fragment>this week</React.Fragment>
                ) : (
                  <React.Fragment>this day</React.Fragment>
                )}{" "}
              </React.Fragment>
            )}
          </Typography>
        </Grid>
        <Grid item>
          <InsertInvitationIcon className={classes.logo} />
        </Grid>
        {onHistory ? null : (
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={handleAddTodo}
              startIcon={<AddIcon />}
            >
              Add Task
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleOpen: () => dispatch(toggleTodoFormOpen())
});

export default connect(null, mapDispatchToProps)(NonTodoExist);
