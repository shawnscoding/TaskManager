import React from "react";
import { Grid, Typography, Button, Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

const TodoFormLast = ({ toggleOpen, onUserLeave, setStepToZero }) => {
  const handleClose = () => {
    onUserLeave();
    toggleOpen();
    setStepToZero();
  };

  const handleAddMore = () => {
    onUserLeave();
    setStepToZero();
  };

  return (
    <React.Fragment>
      <Grid item>
        <Typography gutterBottom color="primary" variant="h3">
          Added Successfully!
        </Typography>
      </Grid>
      <Grid item>
        <Avatar
          style={{ width: "250px", height: "250px" }}
          src="/assets/success.jpg"
          alt="success image"
        />
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        item
        style={{ margin: "2rem 0" }}
      >
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleAddMore}
            startIcon={<AddIcon />}
          >
            Add more
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClose}
            startIcon={<CloseIcon />}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TodoFormLast;
