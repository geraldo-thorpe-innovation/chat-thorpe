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
  const ENDPOINT = ``

  useEffect(() => {
      getRooms()
  }, [])

  const getRooms = async () => {
    await Axios.post(`https://chat-middleware.herokuapp.com`, {
      end: "rooms"
    } ,{
      headers: {                  
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization", 
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
        "Content-Type": "application/json;charset=UTF-8"                   
    },
  })
  .then(resp => {
      var rooms = resp.data.sort((a, b) => new Date(b.dateLastMessage) - new Date(a.dateLastMessage))
      // rooms.sort(orderRooms)

      console.log(rooms);


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