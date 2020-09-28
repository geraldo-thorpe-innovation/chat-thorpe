import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import BackCover from './Assets/BackCover.svg'

import './InfoBar.css';

const InfoBar = ({ name }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img src={BackCover} />
      <h3>{name}</h3>
    </div>
  </div>
);

export default InfoBar;