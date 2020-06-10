import React from 'react';
import './App.css';
import Home from './component/HomeComponent/Home';
import Login from './component/LoginComponent/Login';
import AddNewFriend from './component/HomeComponent/AddNewFriend/AddNewFriend';
import RegisterAccount from './component/LoginComponent/RegisterForm/RegisterAccount'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Switch , Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register" component={RegisterAccount} />
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/registerAccount">
            <RegisterAccount />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
