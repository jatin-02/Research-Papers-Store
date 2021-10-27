import React from "react";

// importing styles
import "./style.css";

// importing components
import Sidebar from "../Sidebar";

// importing pages
import Home from "../../Pages/Home";

// importing react router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
