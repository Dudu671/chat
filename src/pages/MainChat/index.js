import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

import './styles.css'
import Message from '../../components/Message'

const socket = io('http://192.168.0.189:3001')

export default function MainChat() {
    const [user, setUser] = useState(null)
    const [messageToSend, setMessageToSend] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const userPrompt = prompt('Choose a username to enter the chat room')
        setUser(userPrompt)
    }, [])


    socket.on('chat message', msg => {
        setMessages([...messages, { user: msg[0], text: msg[1], time: msg[2] }])
    })

    const sendMessage = () => {
        if (user === null) return alert('You must choose a username to send messages')
        const time = new Date()
        socket.emit('chat message', [user, messageToSend, time])
        setMessageToSend('')
    }

    return (
        <div className="mainChatContainer">
            <div className="messages">
                {messages.map(message => (
                    <Message user={message.user} text={message.text} time={message.time} />
                ))}
            </div>

            <div className="textareaContainer">
                <textarea
                    rows="3"
                    placeholder="Type your message..."
                    onChange={e => setMessageToSend(e.target.value)}
                />

                <button type="button" onClick={() => sendMessage()}>Enviar</button>
            </div>
        </div>
    )
}