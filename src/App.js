import Main from './Maincomponent/Main';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Main/>
        <Switch>
          <Route path="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
