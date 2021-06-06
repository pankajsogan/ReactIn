import logo from './logo.svg';
import './App.css';
import Feed from './pages/Feed';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
  <Landing/>
    
    </Route>

    <Route exact path="/feed">
  <Feed/>
    
    </Route>    
    <Route  path="/login">
    <h1>Login Page</h1>
    </Route>
    
  </Switch>
</div>
</Router>
  );
}


export default App;
