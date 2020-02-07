import React from "react";
import {
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import { categories } from "./../../../redux/todo/todo.utils";

const TodoFormFirst = ({ classes, form, onChange }) => {
  return (
    <React.Fragment>
      <TextField
        variant="outlined"
        id="todoTitle"
        type="text"
        value={form.title}
        label="Title"
        onChange={onChange("title")}
        fullWidth
        className={classes.formControl}
      />
      <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="category" id="category">
          What is it about?
        </InputLabel>
        <Select
          labelId="category"
          id="category"
          value={form.category}
          onChange={onChange("category")}
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        variant="outlined"
        id="todoDescription"
        type="text"
        value={form.discription}
        label="Description"
        onChange={onChange("discription")}
        fullWidth
        multiline
        rows="3"
        className={classes.formControl}
      />
    </React.Fragment>
  );
};

export default TodoFormFirst;
