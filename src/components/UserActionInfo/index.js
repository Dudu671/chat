import React from 'react'

export default function UserActionInfo({ user, action }) {
    return (
        <span>{user} has {action} the chat room</span>
    )
}