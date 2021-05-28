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
import Dashboard from './components/MainView/Dashboard/Dashboard'

// Route permissions
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';


const Routes = () => {
  return (
    <Switch>
      <PublicRoute restricted={false} exact path='/' component={Home} />
      <PrivateRoute exact path='/about' component={About} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute exact path='/boards' component={Boards} />
      <PrivateRoute exact path='/groups' component={Groups} />
      <PrivateRoute exact path='/profile' component={Profile} />
      <PublicRoute restricted={true} exact path='/login' component={Login} />
      <PublicRoute restricted={true} exact path='/register' component={Register} />
    </Switch>
  )
}

export default Routes