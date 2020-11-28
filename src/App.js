
import './App.css';
import Login from './components/Login';
import { Switch, Route,Redirect} from "react-router-dom";
import Home from './components/Home';
import Nlogin from './components/Nlogin';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
     <Switch>
     <Route exact path="/" component={Login} />
     <Route exact path="/h" component={Home} />
     <Route exact path="/n" component={Nlogin}/>
     <Route exact path="/s" component={Search}/>
     <Redirect to="/"/>
     </Switch>
    </div>
  );
}

export default App;
