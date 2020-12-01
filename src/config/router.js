import React from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'

import Home from '../pages/home'
import ErrorPage from '../pages/404'
import About from '../pages/about'
import Favorite from '../pages/favorite'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/ErrorPage' component={ErrorPage} />
      <Route path='/Favorite' component={Favorite} />
      <Redirect to='/ErrorPage'></Redirect>
    </Switch>
  )
}

export default Routes
