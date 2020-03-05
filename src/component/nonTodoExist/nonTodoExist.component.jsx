import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { toggleTodoFormOpen } from "./../../redux/async/async.actions";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

const NonTodoExist = ({ toggleOpen, withThisWeekPage }) => {
  const handleAddTodo = () => {
    toggleOpen();
  };

  return (
    <Grid
      direction="column"
      justify="space-around"
      alignItems="center"
      container
    >
      <Grid item>
        <Typography>
          You have No task{" "}
          {withThisWeekPage ? (
            <React.Fragment>thisWeek</React.Fragment>
          ) : (
            <React.Fragment>today</React.Fragment>
          )}
        </Typography>
      </Grid>
      <Grid item>
        <FormatListBulletedIcon
          color="secondary"
          style={{ width: "21rem", height: "21rem" }}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleAddTodo}
          startIcon={<AddIcon />}
        >
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleOpen: () => dispatch(toggleTodoFormOpen())
});

export default connect(null, mapDispatchToProps)(NonTodoExist);
