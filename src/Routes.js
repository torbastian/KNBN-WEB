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

// import Destinations from './components/MainView/Destinations/Destinations';
// import Country from './components/MainView/Destinations/Country/Country'
// import Blog from './components/MainView/Blog/Blog';
// import Services from './components/MainView/Services/Services';
// import Contacts from './components/MainView/Contacts/Contacts';

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

      {/* <Route exact path='/destinations' component={Destinations} />
      <Route exact path='/destinations/:country' component={Country} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/contacts' component={Contacts} /> */}
    </Switch>
  )
}

export default Routes