import './App.css';
import React from 'react';
import * as s from './App.style'; //s for style

//components
import Sidebar from './components/Sidebar/Sidebar'
import MainView from './components/MainView/MainView';

const App = () => {

  const backgroundImage = 'images/ocean.jpg';
  const sidebarHeader = {
    fullName: 'KanBanBoard',
    shortName: 'KNBN'
  };
  const menuItems = [
    {name: 'Home', to: '/', icon: 'icons/home.svg', subMenuItems: []},
    {name: 'About', to: '/about', icon: 'icons/about.svg', subMenuItems: []},
    {name: 'Boards', to: '/boards', icon: 'icons/about.svg', subMenuItems: []},
    {name: 'Groups', to: '/groups', icon: 'icons/about.svg', subMenuItems: []},
    {name: 'Profile', to: '/profile', icon: 'icons/about.svg', subMenuItems: []},
    {name: 'Login', to: '/login', icon: 'icons/about.svg', subMenuItems: []},
    {name: 'Register', to: '/register', icon: 'icons/about.svg', subMenuItems: []},



    // {name: 'Destinations', to: '/destinations', icon: 'icons/destinations.svg', 
    // subMenuItems: [
    //   { name: 'Canada', to: '/canada'},
    //   { name: 'Brazil', to: '/brazil'},
    //   { name: 'India', to: '/india'},
    //   { name: 'Australia', to: '/australia'},
    //   { name: 'Kenya', to: '/kenya'},
    //   { name: 'Moldova', to: '/moldova'},
    // ]},
    // {name: 'Blog', to: '/blog', icon: 'icons/blog.svg', subMenuItems: []},
    // {name: 'Services', to: '/services', icon: 'icons/services.svg', subMenuItems: []},
    // {name: 'Contacts', to: '/contacts', icon: 'icons/contacts.svg', subMenuItems: []}
  ];

  const fonts = {
    header: 'ZCOOL Kuaile',
    menu: 'Poppins'
  }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//          <h1>KNBN</h1>
//       </header>
//     </div>
//   );
// }

return (
  <s.App>
    <Sidebar 
      backgroundImage={backgroundImage}
      sidebarHeader={sidebarHeader}
      menuItems={menuItems}
      fonts={fonts}
    />
    <MainView />
  </s.App>
);
}
export default App;
