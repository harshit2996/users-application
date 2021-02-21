import './App.css';
import MainComponent from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserDetails from './pages/details';
import AllUsers from './pages/allUsers';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/user/:id" }>
            <UserDetails></UserDetails>     
          </Route>
          <Route path="/users/">
            <AllUsers></AllUsers>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
