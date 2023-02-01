import Startpage from "./game/startpage";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
             <Route exact path="/" component={Startpage}></Route>
             <Route exact path='/Startpage' component={Startpage}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
