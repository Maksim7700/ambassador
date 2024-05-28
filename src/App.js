import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Ambassador from './pages/Ambassador';
import NavBar from './components/NavBar';
import Subscribe from './pages/Subscribe';

function App() {
  return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/ambassador' component={Ambassador} />
            <Route exact path='/subscribe' component={Subscribe} />
            <Redirect from="*" to="/ambassador" />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
