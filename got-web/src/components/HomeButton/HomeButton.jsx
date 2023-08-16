import "./HomeButton.css"
import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeButton() {
  return (
    <div>
      <NavLink to="/" ><img className="home-button" src='./img/home-icon.png' alt='home'></img></NavLink>
    </div>
  )
}

export default HomeButton
