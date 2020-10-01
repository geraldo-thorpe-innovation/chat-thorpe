import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import BackCover from './Assets/BackCover.svg'

import imgDefault from '../TextContainer/Assets/user.svg'
import bgProvider from '../TextContainer/Assets/bg-provider.svg'
import bgCustomer from '../TextContainer/Assets/bg-customer.svg'

import './InfoBar.css';

const InfoBar = ({ name }) => (
  <div className="header-chat">
    <div className="pic-header">
      <img src={imgDefault} className='pic-user img-user' />
      <img src={bgProvider} className='back-cover' />
    </div>
    <div className="nome-header">{name}</div>
  </div>
);

export default InfoBar;