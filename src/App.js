import React from "react";
import Header from "./component/header/header.component";
import { Route } from "react-router-dom";
import HomePage from "./pages/hompage/homepage.component";

function App() {
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
}

export default App;
