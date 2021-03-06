import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserPage from "./components/UserPage";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/logowanie" component={Login} />
        <Route path="/rejestracja" component={Register} />
        <Route path="/oddaj-rzeczy" component={UserPage} />
        <Route path="/wylogowano" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
