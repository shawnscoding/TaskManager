import React from "react";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { hoursArray, minutesArray } from "../../../utils/helper";

const TodosFormSecond = ({
  classes,
  onHourChange,
  date,
  form,
  onDateAndTimeChange
}) => {
  return (
    <React.Fragment>
      <KeyboardDatePicker
        className={classes.formControl}
        fullWidth
        margin="normal"
        id="date-picker-dialog"
        label="please select the date"
        format="MM/dd/yyyy"
        value={date}
        onChange={onDateAndTimeChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
      <KeyboardTimePicker
        className={classes.formControl}
        fullWidth
        margin="normal"
        id="time-picker"
        label="you can select the exact time, if you wish ( optional )"
        value={date}
        onChange={onDateAndTimeChange}
        KeyboardButtonProps={{
          "aria-label": "change time"
        }}
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="hours-native-simple">Hour</InputLabel>
        <Select
          native
          value={form.hours}
          onChange={onHourChange("hours")}
          inputProps={{
            name: "hours",
            id: "hours-native-simple"
          }}
        >
          <option value="" />
          {hoursArray.map((hour, index) => (
            <option key={index} value={hour}>
              {hour}
            </option>
          ))}
        </Select>
        <FormHelperText>How long does this takes?</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Minutes</InputLabel>
        <Select
          native
          value={form.minutes}
          onChange={onHourChange("minutes")}
          inputProps={{
            name: "minutes",
            id: "age-native-simple"
          }}
        >
          <option value="" />
          {minutesArray.map((minute, index) => (
            <option key={index} value={minute}>
              {minute}
            </option>
          ))}
        </Select>
        <FormHelperText> ( optional ) </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};

export default TodosFormSecond;
