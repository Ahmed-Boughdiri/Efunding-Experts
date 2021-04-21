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
import Request from "./pages/Request/Request";
import Membership from "./pages/Membership/Membership";
import Preview from "./pages/Membership/Preview";
import Home from "./pages/Home/Home";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/training" component={Training} />
        <Route exact path="/contracts" component={Contracts} />
        <Route exact path="/refferal" component={Refferal} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/request" component={Request} />
        <Route exact path="/membership/training" component={Membership} />
        <Route exact path="/membership/training/preview" component={Preview} />
        <Route exact path="/password/forget" component={ForgetPassword} />
        <Route exact path="/password/reset/:id" component={ResetPassword} />
      </Switch>
    </Router>
  );
}

export default App;
