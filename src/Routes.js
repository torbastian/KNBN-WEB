import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './components/MainView/Home/Home';
import About from './components/MainView/About/About';
import Boards from './components/MainView/Boards/Boards';
import Groups from './components/MainView/Groups/Groups';
import Profile from './components/MainView/Profile/Profile';
import Login from './components/MainView/Login/Login';
import Register from './components/MainView/Register/Register';


const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/boards' component={Boards} />
      <Route exact path='/groups' component={Groups} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  )
}

export default Routes