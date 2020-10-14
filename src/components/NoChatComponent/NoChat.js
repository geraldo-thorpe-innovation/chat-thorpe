import React from 'react'
import NoChatImage from './Assets/NoChat/NoChat.png'

import './NoChat.css'

export default function NoChat() {
    return (
        <div className="externDiv">
          <img
            className="image"
            src={NoChatImage}
            alt='noChat'
          />
          <h1 className='titleNoChat'>Você não tem conversas abertas!</h1>
        </div>
    )
}
