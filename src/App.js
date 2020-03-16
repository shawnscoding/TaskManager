import React, { useEffect } from "react";
import Navbar from "./component/navbar/navbar.component";
import { Route, withRouter } from "react-router-dom";
import HomePage from "./pages/hompage/Homepage";
import { checkUserSession } from "./redux/auth/auth.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectDirectAfterLogAct
} from "./redux/auth/auth.selectors";

const App = ({ checkUserSession, loggedIn, history }) => {
  useEffect(() => {
    if (loggedIn === false) {
      checkUserSession();
    }
    console.log(loggedIn);
    if (loggedIn === true) {
      history.push("/start");
    }
  }, [checkUserSession, loggedIn]);
  return (
    <React.Fragment>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <React.Fragment>
            <Navbar />
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  loggedIn: selectDirectAfterLogAct
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
