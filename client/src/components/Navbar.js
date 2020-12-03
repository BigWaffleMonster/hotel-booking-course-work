import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext) 

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div class="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        <a href="/" class="brand-logo">Hotel booking</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><NavLink to="/rooms">Book</NavLink></li>
          <li><NavLink to="/userrooms">Your booked rooms</NavLink></li> {/* replace name */}
          <li><a href="/" onClick={logoutHandler}>Log out</a></li>
        </ul>
      </div>
    </nav>
  )
}