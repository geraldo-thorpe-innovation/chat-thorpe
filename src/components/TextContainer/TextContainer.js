import React, { useEffect, useState } from 'react';
import './TextContainer.css';
import Axios from 'axios'
import { format, parseISO } from 'date-fns'
import imgDefault from './Assets/user.svg'
import bgProvider from './Assets/bg-provider.svg'
import bgCustomer from './Assets/bg-customer.svg'
import moment from 'moment'

const TextContainer = () => {
  const [ user, setUser ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const ENDPOINT = `https://chat.miauuapi.com/`

  useEffect(() => {
    const intervalId = setInterval(() => {
      getRooms()
    }, 5000);
    return () => clearInterval(intervalId)
  }, [])

  const getRooms = async () => {
    await Axios.get(`https://cors-anywhere.herokuapp.com/${ENDPOINT}rooms`, {
      headers: {'authorization' : 'giwXuRY4ucOqQvz2g08OhMy89KxxZrv0'}
      }).then(resp => {

        var rooms = resp.data
        rooms.sort(orderRooms)
        setUser(resp.data);
        setLoading(false)
      }).catch(error => {
        console.log('erro1: ', error.request)
      }
    )
  }

  function orderRooms(a, b){
    return new Date(b.dateLastMessage) - new Date(a.dateLastMessage);
  }

  return(
    <div className="list-chats">
      <div className='list-rooms'>
        {
          loading === true ?(
            <div className="loading">
              <h1>Carregando Lista de Salas...</h1>
            </div>
          ) : (
           <>
             {
              user.map(user => (
                <a href={`/chat?name=MiauuTeam&room=${user.roomId}`} className='room' key={user.roomId}>
                  <div className='item-chat' id='item-chat'>
                    <div className='pic-list'>
                      <img src={imgDefault} className='pic-user img-user' alt='user' />
                      {
                        user.providerId ? (
                          <img src={bgProvider} className='back-cover' alt='user' />
                        ) : ( 
                          <img src={bgCustomer} className='back-cover' alt='user' />
                        )
                      }
                    </div>
                    <div className='text-list'>
                      <div className='nome'>
                        {user.name} 
                        <span className='hora'>{format(parseISO(user.dateLastMessage), 'HH:mm')}</span>
                      </div>
                      <div className='texto'>
                        {user.lastText}
                        <span className='data'>{format(parseISO(user.dateLastMessage), 'dd/MM/yyyy')}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            }
           </>
          )
        }
    </div>
  </div>
  )
}

export default TextContainer;