import React from 'react';
import './TextContainer.css';

const users = [
  {
    id: 1,
    user: 'Geraldo Domingos'
  },
  {
    id: 1,
    user: 'Neto Domingos'
  },
  {
    id: 3,
    user: 'Geraldo3'
  },
  {
    id: 4,
    user: 'Geraldo4'
  },
  {
    id: 5,
    user: 'Geraldo5'
  },
  {
    id: 6,
    user: 'Geraldo6'
  },
  {
    id: 7,
    user: 'Geraldo7'
  },
]

const TextContainer = () => (
  <div className="textContainer">
    {
      users.map(user => (
       <a href={`/chat?name=${user.user}&room=${user.id}`} className='room'>
        <h5>{user.user}</h5>
       </a>
      ))
    }
  </div>
);

export default TextContainer;