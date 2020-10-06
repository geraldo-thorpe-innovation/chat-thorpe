import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Axios from 'axios'
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://chat-hom.miauuapi.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    getChatHistory(room)

    socket = io(ENDPOINT, {
      'reconnection': true,
      'reconnectionDelay': 500,
	    'reconnectionAttempts': Infinity, 
	    'transports': ['websocket'],     
    })

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });


  }, [ENDPOINT, location.search]);

  async function getChatHistory(room){
    await Axios.get(`https://cors-anywhere.herokuapp.com/${ENDPOINT}?room=${room}`)
      .then(resp => {
        setMessages(resp.data);
      }).catch(error => {
        console.log('erro1: ', error)
      }
    )
  }
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    console.log(users);

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
          <InfoBar name={name} />
          <Messages messages={messages} name={name} />
          <div className='InputBox'>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
      </div>
    </div>
  );
}

export default Chat;
