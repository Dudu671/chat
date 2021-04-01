import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa'

import './App.css'
import MainChat from './pages/MainChat'
import PrivateChat from './pages/PrivateChat'

export default function App() {
  const toggleDropdownMenu = () => {
    const navContainer = document.querySelector("#navContainer");
    navContainer.classList.toggle("bringMenuToRight")
  }

  return (
    <div className="container">
      <Router>
        <header>
          <label className="logo">Simple Chat</label>
          <label className="checkBtn" onClick={() => toggleDropdownMenu()}>
            <FaBars color="rgb(56, 192, 56)" />
          </label>

          <nav id="navContainer">
            <ul>
              <li>
                <Link to="/private-chat">Private chat</Link>
              </li>
              <li>
                <Link to="/main-chat">Main chat</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/private-chat">
            <PrivateChat />
          </Route>
          <Route path="/main-chat">
            <MainChat />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}