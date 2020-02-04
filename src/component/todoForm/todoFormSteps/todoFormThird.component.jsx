import React from "react";
import { Box, Typography, TextField } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
const TodoFormThird = ({ onChange, form, onRatingChange, classes }) => {
  return (
    <React.Fragment>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography varient="h5" component="legend">
          how important is it?
        </Typography>
        <Rating
          name="simple-controlled"
          value={form.importance}
          onChange={onRatingChange}
        />
      </Box>
      <Box>
        <Typography varient="subtitle1" component="legend">
          why don't you give yourself a small reward when you have completed? it
          will help you to stay motivated :)
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
