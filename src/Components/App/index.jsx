import React from "react";

// importing styles
import "./style.css";

// importing components
import Sidebar from "../Sidebar";

// importing pages
import Home from "../../Pages/Home";
import NotFound from "../../Pages/NotFound";

// importing react router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../../Pages/Login";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <div className="main-container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
