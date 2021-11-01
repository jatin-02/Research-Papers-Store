import React from "react";

// importing styles
import "./style.css";

// importing components
import Sidebar from "../Sidebar";

// importing pages
import Home from "../../Pages/Home";
import NotFound from "../../Pages/NotFound";
import Login from "../../Pages/Login";
import DetailPage from "../../Pages/Detail";
import Category from "../../Pages/Category";
import History from "../../Pages/History";
import SingleCategory from "../../Pages/SingleCategory";
import Library from "../../Pages/Library";
import Profile from "../../Pages/Profile";

// importing react router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <div className="main-container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/category" exact component={Category} />
            <Route path="/category/:domain" exact component={SingleCategory} />
            <Route path="/history" exact component={History} />
            <Route path="/library" exact component={Library} />
            <Route path="/login" exact component={Login} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/detail" exact component={DetailPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
