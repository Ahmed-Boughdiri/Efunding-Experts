import React from 'react';
import './App.css';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Quotes from "./pages/Quotes/Quotes";
import Dashboard from "./pages/Dashboard/Dashboard";
import Clients from "./pages/Clients/Clients";
import Training from "./pages/Training/Training";
import Contracts from "./pages/Contracts/Contracts";
import Refferal from "./pages/Refferal/Refferal";
import Edit from "./pages/Edit/Edit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/training" component={Training} />
        <Route exact path="/contracts" component={Contracts} />
        <Route exact path="/refferal" component={Refferal} />
        <Route exact path="/edit" component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
