import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue, lime } from "@material-ui/core/colors";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Provider } from "react-redux";
import store from "./redux/store";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3949ab"
    },
    text: {
      secondary: "#3949ab"
    }
  },
  typography: {
    fontSize: 14
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <App />
          </StylesProvider>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
