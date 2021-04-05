import React, { useState, useEffect } from 'react'
import { MdSend } from 'react-icons/md'

import './styles.css'
import Message from '../../components/Message'

const socket = new WebSocket(process.env.REACT_APP_SERVER_ADDRESS)

export default function MainChat() {
    const [userId, setUserId] = useState(null)
    const [user, setUser] = useState(null)
    const [userColor, setUserColor] = useState({})
    const [messageToSend, setMessageToSend] = useState(null)
    const [messages, setMessages] = useState([])

    const getRandomRGBColor = () => {
        const red = Math.floor(Math.random() * 255)
        const green = Math.floor(Math.random() * 255)
        const blue = Math.floor(Math.random() * 255)

        return { r: red, g: green, b: blue }
    }

    const getUsername = () => {
        const userPrompt = prompt('Choose a username to enter the chat room (at least 2 alphanumeric characters)')

        if (!validateUsername(userPrompt)) return getUsername()

        setUser(userPrompt)
        setUserColor(getRandomRGBColor())
    }

    const validateUsername = (username) => {
        const userValidationRegEx = /[a-z 0-9]{2}/i

        if (username === null || username === undefined || !userValidationRegEx.test(username))
            return false

        return true
    }

    const generateUserId = () => {
        let id = ''

        for (let index = 0; index < 50; index++) {
            id += Math.round(Math.random() * 10)
        }

        return id
    }

    const sendMessage = async () => {
        if (!validateUsername(user)) return getUsername()
        if (messageToSend === null) return

        const date = new Date()
        const time = `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}h${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`

        socket.send(JSON.stringify([userId, user, userColor, messageToSend, time]))
        setMessageToSend(null)
        document.querySelector('textarea').value = ''
    }

    const scrollToBottom = () => {
        document.querySelector('.messages').scrollTop += 1000 * 1000 ^ 10
    }

    socket.onmessage = (message) => {
        const msg = JSON.parse(message.data)
        console.log(msg)
        setMessages([...messages, { userId: msg[0], user: msg[1], userColor: msg[2], text: msg[3], time: msg[4] }])
        scrollToBottom()
    }

    useEffect(() => {
        setUserId(generateUserId())
        getUsername()
    }, [])

    window.addEventListener("beforeunload", () => {
        if (socket.readyState == WebSocket.OPEN) socket.close()
        localStorage.clear()
    })

    return (
        <div className="mainChatContainer">
            <div className="messages">
                {messages.map(message => (
                    <Message
                        key={Math.random()}
                        my={message.userId === userId ? true : false}
                        user={message.user}
                        userColor={message.userColor}
                        text={message.text}
                        time={message.time}
                    />
                ))}
            </div>

            <div className="textareaContainer">
                <textarea
                    rows="3"
                    placeholder="Type your message..."
                    onChange={e => setMessageToSend(e.target.value)}
                />

                <MdSend color="white" size={29} className="sendButton" onClick={() => sendMessage()} />
            </div>
        </div>
    )
}