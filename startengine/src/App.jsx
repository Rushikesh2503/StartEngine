import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Piestro from "./Components/Pages/Piestro";
import Fisher from "./Components/Pages/Fisher";
import XCraft from "./Components/Pages/XCraft";
import Home from "./Components/Pages/Home";
import GetFunding from "./Components/Pages/GetFunding";
import StartInv from "./Components/Pages/StartInv";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/GetFunding">
            <GetFunding />
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
          <Route path="/startInvest">
            <StartInv/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
