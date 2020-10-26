import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const history = useHistory()

  function verifyUser(e){
    if(name === '' || room === '' || name !== 'chatmiauu' || room !== 'Ch@tMi@uu2021'){
      alert('erro no login')
    } else {
      history.push('/chat')
    }
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Miauu Chat</h1>
        <div>
          <input 
            placeholder="Email" 
            className="joinInput" 
            type="text" 
            onChange={(event) => setName(event.target.value)} 
          />
        </div>
        <div>
          <input 
            placeholder="Senha" 
            className="joinInput mt-20" 
            type="text" 
            onChange={(event) => setRoom(event.target.value)} 
          />
        </div>
        <Link onClick={() => verifyUser()}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
