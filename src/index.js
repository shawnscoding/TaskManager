import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { red, blue } from "@material-ui/core/colors";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  },
  typography: {
    fontSize: 14
  }
});

ReactDOM.render(
  <Router>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <App />
        </StylesProvider>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
