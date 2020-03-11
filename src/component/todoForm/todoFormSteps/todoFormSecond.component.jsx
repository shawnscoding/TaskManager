import React from "react";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { hoursArray, minutesArray } from "../../../utils/helper";
import { Grid } from "@material-ui/core";

const TodoFormSecond = ({
  classes,
  onHourChange,
  date,
  form,
  onDateAndTimeChange
}) => {
  return (
    <React.Fragment>
      <KeyboardDatePicker
        className={classes.formControlSecond}
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
        className={classes.formControlSecond}
        fullWidth
        margin="normal"
        id="time-picker"
        label="select the time you will work on"
        value={date}
        onChange={onDateAndTimeChange}
        KeyboardButtonProps={{
          "aria-label": "change time"
        }}
      />
      <Grid
        direction="row"
        justify="space-between"
        alignItems="center"
        container
      >
        <Grid style={{ width: "49%" }} item>
          <FormControl className={classes.formControlSecond}>
            <InputLabel htmlFor="hours-native-simple">
              How long does this takes?
            </InputLabel>
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
          </FormControl>
        </Grid>
        <Grid style={{ width: "49%" }} item>
          <FormControl className={classes.formControlSecond}>
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
            {/* <FormHelperText> ( optional ) </FormHelperText> */}
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TodoFormSecond;
