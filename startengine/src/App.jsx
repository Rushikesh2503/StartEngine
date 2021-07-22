import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import GetFunding from './Components/pages/GetFunding';

function App() {



  return (
    <div className="app">
      <Router>
        <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/GetFunding"><GetFunding/></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
