import React from 'react'

import './App.css'
import MainChat from './pages/MainChat'

export default function App() {
  return (
    <div className="container">
      <header>
        <label className="logo">Simple Chat</label>
      </header>

      <MainChat />
    </div>
  )
}