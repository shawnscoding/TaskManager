import React, { useEffect } from "react";
import Header from "./component/header/header.component";
import { Route } from "react-router-dom";
import HomePage from "./pages/hompage/homepage.component";
import { checkUserSession } from "./redux/auth/auth.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/auth/auth.selectors";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <React.Fragment>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <React.Fragment>
            <Header />
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
