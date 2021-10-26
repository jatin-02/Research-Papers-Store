import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
