import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import Form from './Components/Form';
import Details from './Components/Details';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {LandingPage}/>
        <Route exact path = '/home' component={Home}/>
        <Route exact path = '/home/form' component={Form}/>
        <Route exact path = '/dogs/:id' component={Details}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
