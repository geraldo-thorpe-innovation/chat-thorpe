import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';
import './Message/Message.css'

const Messages = ({ messages }) => {
  return(
    <ScrollToBottom className="messages">
      {
        messages.map(message => (
          <div key={message._id} className="teste">
          {
            message.name === 'miauuteam' || message.user === 'miauuteam' ? (
            <div className="messageContainer justifyEnd">
              <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{message.message ? message.message : message.text}</p>
              </div>
            </div>
            ) : (
              <>
                {
                  message.user === 'admin' ? (
                    <>
                    </>
                  ) : (
                    <div className="messageContainer justifyStart">
                      <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{message.message ? message.message : message.text}</p>
                      </div>
                    </div>
                  )
                }
              </>
            )
          }
          </div>
        ))
      }
    </ScrollToBottom>
  )
};

export default Messages;