import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";

// importing components
import Header from "../Header";

// importing pages
import Home from "../../Pages/Home";
import NotFound from "../../Pages/NotFound";
import SinglePage from "../../Pages/SinglePage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/single" component={SinglePage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
