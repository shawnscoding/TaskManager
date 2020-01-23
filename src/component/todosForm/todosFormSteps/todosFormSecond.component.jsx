import React from "react";
import Grid from "@material-ui/core/Grid";
import { KeyboardDatePicker } from "@material-ui/pickers";

const TodosFormSecond = () => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-01-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <React.Fragment>
      <KeyboardDatePicker
        fullWidth
        margin="normal"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </React.Fragment>
  );
};

export default TodosFormSecond;
