import React from 'react'

import './styles.css'
import Message from '../../components/Message'

export default function MainChat() {
    const mockMessages = [
        { user: 'Dudu', text: 'Olá, boa noite', time: '04h00' },
        { user: 'Guina', text: 'Boa noite', time: '04h00' },
        { user: 'Dudu', text: 'Como vai?', time: '04h01' },
        { user: 'Guina', text: 'Bem, e você?', time: '04h01' },
        { user: 'Dudu', text: 'Bem', time: '04h01' }
    ]

    return (
        <div className="mainChatContainer">
            <div className="messages">
                {mockMessages.map(message => (
                    <Message user={message.user} text={message.text} time={message.time} />
                ))}
            </div>

            <div className="textareaContainer">
                <textarea rows="3" placeholder="Type your message..." />
                <button type="button">Enviar</button>
            </div>
        </div>
    )
}