import React from 'react'

import './styles.css'

export default function Message({ user, text, time }) {
    return (
        <div className="messageContainer">
            <span className="userSpan">{user}</span>
            <pre>{text}</pre>
            <span className="timeSpan">{time}</span>
        </div>
    )
}