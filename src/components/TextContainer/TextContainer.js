import React from 'react';
import './TextContainer.css';

import imgDefault from './Assets/user.svg'
import bgProvider from './Assets/bg-provider.svg'
import bgCustomer from './Assets/bg-customer.svg'

const users = [
  {
    id: 1,
    user: 'Geraldo Domingos',
    image: 'default',
    type: 'customer',
    lastTextTime: '17:28',
    lastText: 'Lorem ipsum dolor sit amet',
    newsMessages: '2'
  },
  {
    id: 2,
    user: 'Willy Thorpe',
    image: 'default',
    type: 'provider',
    lastTextTime: '17:12',
    lastText: 'Lorem ipsum dolor sit amet',
    newsMessages: '3'
  },
  {
    id: 3,
    user: 'André Teixeira',
    image: 'default',
    type: 'provider',
    lastTextTime: '17:09',
    lastText: 'Lorem ipsum dolor sit amet',
    newsMessages: '2'
  },
  {
    id: 4,
    user: 'Geraldo Domingos',
    image: 'default',
    type: 'provider',
    lastTextTime: '17:08',
    lastText: 'Lorem ipsum dolor sit amet',
    newsMessages: '1'
  },
  {
    id: 5,
    user: 'André Teixeira',
    image: 'default',
    type: 'customer',
    lastTextTime: '17:02',
    lastText: 'Lorem ipsum dolor sit amet',
    newsMessages: '0'
  },
  {
    id: 6,
    user: 'Willy Thorpe',
    image: 'default',
    type: 'customer',
    lastTextTime: '17:01',
    lastText: 'Lorem ipsum dolor sit amet',
    newsMessages: '0'
  },
  {
    id: 7,
    user: 'Maicom',
    image: 'default',
    type: 'customer',
    lastTextTime: '16:59',
    lastText: 'Lorem ipsum dolor sit amet',
    newsMessages: '0'
  },
  {
    id: 8,
    user: 'Harry Thorpe',
    image: 'default',
    type: 'customer',
    lastTextTime: '16:58',
    lastText: 'Lorem ipsum dolor sit amet',
    newsMessages: '0'
  },
  {
    id: 9,
    user: 'Maicom',
    image: 'default',
    type: 'provider',
    lastTextTime: '16:51',
    lastText: 'Lorem ipsum dolor sit amet',
    newsMessages: '0'
  },
]

const TextContainer = () => (
  <div className="textContainer">
    <div className='list-rooms'>
    {
      users.map(user => (
        <a href={`/chat?name=${user.user}&room=${user.id}`} className='room'>

          <div className='item-chat' id='item-chat'>
            <div className='pic-list'>
              <img src={imgDefault} className='pic-user img-user' />
              <img src={bgProvider} className='back-cover' />
            </div>
            <div className='text-list'>
              <div className='nome'>
                {user.user} 
                <span className='data'>{user.lastTextTime}</span>
              </div>
              <div className='texto'>
                {user.lastText}
                <span className='badge color-badge'>{user.newsMessages}</span>
              </div>
            </div>
          </div>

        </a>
      ))
    }
    </div>
  </div>
);

export default TextContainer;