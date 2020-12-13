import React from 'react'

import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'

import Home from '../pages/home'
import ErrorPage from '../pages/404'
import About from '../pages/about'
import Login from '../pages/login'
import Favoris from '../pages/favoris'

import PrivateRoute from '../utils/privateRoute'
import Header from '../components/header'

const Routes = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/favoris' component={Favoris} />
        <Route path='/about' component={About} />
        <Route path='/ErrorPage' component={ErrorPage} />
        <Redirect to='/ErrorPage'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
