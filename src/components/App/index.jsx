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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hello" component={SinglePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
