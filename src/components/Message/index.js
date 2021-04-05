import React from 'react'

import './styles.css'

export default function Message({ my, user, userColor, text, time }) {
    return (
        <div className="messageContainer" style={{ alignSelf: my === true ? 'flex-end' : 'flex-start' }}>
            <span
                className="userSpan"
                style={{ color: `rgb(${userColor.r}, ${userColor.g}, ${userColor.b})` }}
            >
                {my === true ? 'Você' : user}
            </span>
            <pre>{text}</pre>
            <span className="timeSpan">{time}</span>
        </div>
    )
}