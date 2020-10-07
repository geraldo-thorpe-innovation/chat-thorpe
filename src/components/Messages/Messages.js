import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';
import './Message/Message.css'
import Message from './Message/Message';

const Messages = ({ messages }) => {
  console.log(messages);
  return(
    <ScrollToBottom className="messages">
      {
        messages.map(message => (
          <>
          {
            message.name == 'miauuteam' || message.user == 'miauuteam' ? (
            <div className="messageContainer justifyEnd">
              <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{message.message ? message.message : message.text}</p>
              </div>
            </div>
            ) : (
              <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                  <p className="messageText colorDark">{message.message ? message.message : message.text}</p>
                </div>
              </div>
            )
          }
          </>
        ))
      }
    </ScrollToBottom>
  )
};

export default Messages;