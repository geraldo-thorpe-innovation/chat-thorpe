import React, { useEffect, useState } from 'react';
import './TextContainer.css';
import Axios from 'axios'
import { format, parseISO } from 'date-fns'

import imgDefault from './Assets/user.svg'
import bgProvider from './Assets/bg-provider.svg'

const TextContainer = () => {
  const [ user, setUser ] = useState([])
  const ENDPOINT = 'https://chat-hom.miauuapi.com/';

  useEffect(() => {
    getRooms()
  }, [])

  const getRooms = async () => {
    await Axios.get(`https://cors-anywhere.herokuapp.com/${ENDPOINT}rooms`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
      }).then(resp => {
        setUser(resp.data);
      }).catch(error => {
        console.log('erro1: ', error)
      }
    )
  }

  return(
    <div className="list-chats">
      <div className='list-rooms'>
          
      {
        user.map(user => (
          <a href={`/chat?name=MiauuTeam&room=${user.roomId}`} className='room'>

            <div className='item-chat' id='item-chat'>
              <div className='pic-list'>
                <img src={imgDefault} className='pic-user img-user' alt='user' />
                <img src={bgProvider} className='back-cover' alt='user' />
              </div>
              <div className='text-list'>
                <div className='nome' >
                  {user.name} 
                  <span className='data'>{format(parseISO(user.dateLastMessage), 'HH:mm')}</span>
                </div>
                <div className='texto'>
                  {user.lastText}
                  {
                    user.unreadMessages === 0 ? (
                      <>
                      </>
                    ) : (
                      <span className='badge color-badge'>{user.unreadMessages}</span>
                    )
                  }
                </div>
              </div>
            </div>
          </a>
        ))
      }
    </div>
  </div>
  )
}

export default TextContainer;