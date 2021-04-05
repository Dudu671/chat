import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css'
import MainChat from './pages/MainChat'

export default function App() {
  return (
    <div className="container">
      <Router>
        <header>
          <label className="logo">Simple Chat</label>
        </header>

        <Switch>
          <Route path="/">
            <MainChat />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}