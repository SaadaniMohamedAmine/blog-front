import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from './pages/Home'
import Posts from './pages/Posts'
import  Profile from './pages/Profile'
import Contact from './pages/Contact'
import Login from './pages/Login' 
import Register from './pages/Register'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Router >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}  /> 
          <Route path="/posts" component={Posts} />
          <Route path="/Contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/profile" component={Profile}  />
        </Switch>
      </Router>
    </div>
  )
}

export default App
