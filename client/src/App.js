import React from 'react';
import NavBar from './components/Navbar'
import Home from './components/screens/Home'
import Signin from './components/screens/Signin'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import "./App.css"
import {BrowserRouter,Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <Route exact path = "/">
        <Home/>
     </Route>
     <Route path = "/signin">
        <Signin/>
     </Route>
     <Route path = "/profile">
        <Profile/>
     </Route>
     <Route path = "/signup">
        <Signup/>
     </Route>
     <Route path = "/create">
        <CreatePost/>
     </Route>
    </BrowserRouter>
  );
}

export default App;
