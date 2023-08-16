import Nav from "../../components/Nav/Nav"
import "./HomePage.css"
import React from 'react'
import LangNav from "../../components/LangNav/LangNav";

function HomePage() {
  return (
    <div className="HomePage">
    <div className="home-page-header">
      <LangNav/>
    </div>
    <div className="home-title-div">
      <h1 className="home-title-text">GAME OF THRONES</h1>
    </div>
    <Nav />
    </div>
  )
}
export default HomePage
