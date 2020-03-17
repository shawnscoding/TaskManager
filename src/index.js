import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Provider } from "react-redux";
import store from "./redux/store";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#2f323e"
    },
    primary: {
      main: "#3949ab"
    },
    secondary: {
      main: "rgb(89, 205, 208)"
    },

    background: {
      papar: "#fff",
      default: "#fafafa"
    }
  },

  typography: {
    fontSize: 14,
    // htmlFontSize: 10,
    fontFamily: "'Open Sans Condensed', sans-serif"
  }
});

// theme = responsiveFontSizes(theme);
theme.typography.body1 = {
  fontSize: "0.9rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "0.9rem"
  },
  "@media (max-width:650px)": {
    fontSize: "0.8rem"
  },
  "@media (max-width:550px)": {
    fontSize: "0.7rem"
  }
};

theme.typography.h3 = {
  fontSize: "1.1rem",
  fontFamily: "'Open Sans Condensed', sans-serif",
  "@media (max-width:600px)": {
    fontSize: "1rem"
  }
};

theme.typography.h4 = {
  fontSize: "1rem",
  fontFamily: "'Open Sans Condensed', sans-serif",
  "@media (max-width:900px)": {
    fontSize: "0.9rem"
  }
};

theme.typography.h1 = {
  fontSize: "2.5rem",
  fontFamily: "'Open Sans Condensed', sans-serif"
};

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
