import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Provider } from "react-redux";
import store from "./redux/store";
import { withStyles } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#2f323e"
    },
    primary: {
      main: "#3949ab"
    },
    text: {
      secondary: "#000"
    },
    background: {
      papar: "#fff",
      default: "#fafafa"
    }
  },
  typography: {
    // fontSize: 14,
    // htmlFontSize: 10,
    fontFamily: "'Open Sans Condensed', sans-serif"
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
