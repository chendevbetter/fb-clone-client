import React from "react";
import Signup from "./components/authentication/signup/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
