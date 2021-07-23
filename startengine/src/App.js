import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Mains from "./Components/Main";
import Piestro from "./Components/Pages/Piestro";
import Fisher from "./Components/Pages/Fisher";
import XCraft from "./Components/Pages/XCraft";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Mains />
          </Route>
          <Route path="/piestro">
            <Piestro />
          </Route>
          <Route path="/fisher">
            <Fisher />
          </Route>
          <Route path="/XCraft">
            <XCraft />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
