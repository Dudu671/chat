import React from 'react'
import io from 'socket.io-client'

import './App.css'
import MainChat from './pages/MainChat'

export default function App() {
  return (
    <div className="container">
      <MainChat />
    </div>
  )
}