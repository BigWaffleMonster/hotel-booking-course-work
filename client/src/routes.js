import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage'
import {RoomsPage} from './pages/RoomsPage'
import {UserRoomsPage} from './pages/UserRoomsPage'  

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/userrooms" exact>
          <UserRoomsPage />
        </Route>
        <Route path="/rooms" exact>
          <RoomsPage />
        </Route>
        <Redirect to="/rooms" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}