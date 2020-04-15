import React from 'react';
import './App.css';
import Home from './component/HomeComponent/Home';
import Detail from './component/DetailComponent/Detail';
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
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/addNewFriend">
            <AddNewFriend />
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
