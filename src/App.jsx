import React from 'react'
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Blog from './compo/Nav/Blog';
import About from './compo/Nav/About';
import Logout from './compo/Nav/Logout';
import Login from './compo/Nav/Login';
import Home from './compo/Nav/Home';
import Profile from './compo/Nav/Profile';
import ProtectedRoute from './compo/protectedRoute/protectedRoute';
import './App.css';
const App = () => {
  const {isAuthenticated}=useSelector((state)=>state.root);
  return (
    <Router>
      <nav>
      <Link to ='/home'> Home </Link>
      <Link to ='/about'> About </Link>
      <Link to ='/login'> Login </Link>
      <Link to ='/logout'> Logout </Link>
      <Link to ='/blog'> Blog </Link>
      <Link to ='/profile'> Profile </Link>
      </nav>
      <Routes>
        
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login isAuthenticated={isAuthenticated}/>} />
        <Route path='/logout' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Logout /></ProtectedRoute>} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Blog /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>} />
        
      </Routes>
    </Router>
  )
}

export default App