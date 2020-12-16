import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';
import './Message/Message.css'
import { format, parseISO, getHours } from 'date-fns'

const Messages = ({ messages }) => {

  function getHours() {
    var date = new Date()
    var test = date.toLocaleTimeString('pt-BR')

    let format11 = format(date, 'HH:mm')
  

    return format11;
  }


  return(
    <ScrollToBottom className="messages">
      {
        messages.map(message => (
          <div key={message._id} className="teste">
          {
            message.name === 'miauuteam' || message.user === 'miauuteam' ? (
            <div className="messageContainer justifyEnd">
              {
                message.createdAt ? (
                  <p className='hourmessageUser data-text'>{format(parseISO(message.createdAt), 'dd/MM/yyyy')}</p>
                ) : (
                  <>
                  </>
                )
              }
              <div className="messageBox-user backgroundBlue">
                <p className="messageText colorWhite">{message.message ? message.message : message.text}</p>
                {
                  message.createdAt ? (
                    <p className="messageTextHour hourmessageUser colorWhite">{format(parseISO(message.createdAt), 'HH:mm')}</p>
                  ) : (
                    <p className="messageTextHour hourmessageUser colorWhite">Agora</p>
                  )
                }
              </div>
            
            </div>
            ) : (
              <>
                {
                  message.user === 'admin' ? (
                    <>
                    </>
                  ) : (
                    <div className="messageContainer justifyStart ballon-data-text">
                      {
                        message.createdAt ? (
                          <p className='hourmessageRecived data-text'>{format(parseISO(message.createdAt), 'dd/MM/yyyy')}</p>
                        ) : (
                          <>
                          </>
                          )
                        }
                      <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{message.message ? message.message : message.text}</p>
                        {
                          message.createdAt ? (
                            <p className='hourmessageRecived messageTextHour hour-text'>{format(parseISO(message.createdAt), 'HH:mm')}</p>
                          ) : (
                            <p className='hourmessageRecived messageTextHour hour-text'>Agora</p>
                          )
                        }
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