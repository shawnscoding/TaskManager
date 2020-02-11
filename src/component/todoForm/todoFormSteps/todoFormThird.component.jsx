import React from "react";
import { Box, Typography, TextField } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
const TodoFormThird = ({ onChange, form, onRatingChange, classes }) => {
  return (
    <React.Fragment>
      <Box component="fieldset" m={1} borderColor="transparent">
        <Typography
          className={classes.thirdTextFirst}
          varient="h5"
          component="legend"
        >
          How important is it?
        </Typography>
        <Rating
          className={classes.thirdRatingBox}
          name="simple-controlled"
          value={form.importance}
          onChange={onRatingChange}
        />
      </Box>
      <Box m={1}>
        <Typography
          className={classes.thirdTextSecond}
          varient="subtitle1"
          component="legend"
        >
          Give yourself a small reward when you have completed. It will help you
          to stay motivated :)
        </Typography>
        <TextField
          variant="outlined"
          id="todoTitle"
          type="text"
          value={form.reward}
          label="Title"
          onChange={onChange("reward")}
          fullWidth
          className={classes.formControl}
        />
      </Box>
    </React.Fragment>
  );
};

export default TodoFormThird;
