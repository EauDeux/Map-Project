import React from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'

import Home from '../pages/home'
import ErrorPage from '../pages/404'
import About from '../pages/about'
import Login from '../pages/login'
import Favoris from '../pages/favoris'

import PrivateRoute from '../utils/privateRoute'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/favoris' component={Favoris} />
      <Route path='/about' component={About} />
      <Route path='/ErrorPage' component={ErrorPage} />
      <Route path='/Favorite' component={Favoris} />
      <Redirect to='/ErrorPage'></Redirect>
    </Switch>
  )
}

export default Routes
