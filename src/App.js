import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa'

import './App.css'
import MainChat from './pages/MainChat'
import PrivateChat from './pages/PrivateChat'

export default function App() {
  const [showingPage, setShowingPage] = useState("MainChat")

  const selectPage = () => {
    if (showingPage === "MainChat") return <MainChat />
    if (showingPage === "PrivateChat") return <PrivateChat />
  }

  const menu = () => {
    const navCont = document.querySelector("#navCont");
    navCont.classList.toggle("menuRightAni")
  }

  return (
    <div className="container">
      <Router>
        <header>
          <label className="logo">Simple Chat</label>
          <label className="checkBtn" onClick={() => menu()}>
            <FaBars color="rgb(56, 192, 56)" />
          </label>

          <nav id="navCont">
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