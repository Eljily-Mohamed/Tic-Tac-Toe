import Nvbar from "./Composants/navbar";
import Startpage from "./game/startpage";
import Gameui from "./game/Gameui";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Nvbar/>
      <Router>
          <Switch>
             <Route exact path="/" component={Startpage}></Route>
             <Route exact path='/Startpage' component={Startpage}/>
             <Route exact path='/game' component={Gameui}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
