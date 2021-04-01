import React from 'react'

import './styles.css'

export default function Message({ user, userColor, text, time }) {
    return (
        <div className="messageContainer">
            <span
                className="userSpan"
                style={{ color: `rgb(${userColor.r}, ${userColor.g}, ${userColor.b})` }}
            >
                {user}
            </span>
            <pre>{text}</pre>
            <span className="timeSpan">{time}</span>
        </div>
    )
}