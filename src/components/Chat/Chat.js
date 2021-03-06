import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Axios from 'axios'
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import NoChatComponent from '../NoChatComponent/NoChat'

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [ noChat, setNoChat ] = useState(true)
  const ENDPOINT = 'https://chat.miauuapi.com/';

  // const ENDPOINT = `https://chat.miauuapi.com/`

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    
    socket = io(ENDPOINT, {
      query: {
        auth: 'giwXuRY4ucOqQvz2g08OhMy89KxxZrv0',
        backoffice: true
      }
    })
    
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        setNoChat(true)
      } else {
        setNoChat(false)
      }
    });

    async function getChatHistory(room){
      await Axios.get(`https://chat.miauuapi.com/admin/room/${room}`, {
        headers: {'authorization' : 'giwXuRY4ucOqQvz2g08OhMy89KxxZrv0'}
      })
      .then(resp => {

        console.log(resp.data);

        setMessages(resp.data);
        verifyUser(resp.data)
      }).catch(error => {
        console.log('erro12: ', error.request)
      }
      )
    }
    getChatHistory(room)
  }, [ENDPOINT, location.search]);

  
  function verifyUser(messagesRecived){
    const nameFiltred = messagesRecived.filter((element) => ( element.name !== 'miauuteam' ))

    console.log(nameFiltred);

    setName(nameFiltred[0].name)
  }

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div>
        <TextContainer users={users}/>
      </div>
      <div className="container">
        {
          noChat ? (
            <NoChatComponent/>
          ) : (
            <>
              <InfoBar name={name} />
              <Messages messages={messages} name={name} />
              <div className='InputBox'>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Chat;
