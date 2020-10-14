import React from 'react';

import imgDefault from '../TextContainer/Assets/user.svg'
import bgProvider from '../TextContainer/Assets/bg-provider.svg'
// import bgCustomer from '../TextContainer/Assets/bg-customer.svg'

import './InfoBar.css';

const InfoBar = ({ name }) => (
  <div className="header-chat">
    <div className="pic-header">
      <img src={imgDefault} className='pic-user img-user' alt='img' />
      <img src={bgProvider} className='back-cover' alt='provider'/>
    </div>
    <div className="nome-header">{name}</div>
  </div>
);

export default InfoBar;