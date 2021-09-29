import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { HomeScreen } from "./screens/homeScreen/HomeScreen";
import { Card } from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <HomeScreen />
            <Card />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
