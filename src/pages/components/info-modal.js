import React from 'react';

import './info-modal.css';

import decorationImg from '../../assets/img/decoration.png';
import buttonImg from '../../assets/img/ok-button.svg';

const InfoModal = props => (
  <div className='InfoModal'>
    <div className='container-cards'>
    <div className='item-card'>
      <div className ='item-card-image'>
        <figure className='post-image'>
            <img src={decorationImg} alt='Japanese climate'/>
        </figure>
      </div>
      <div className='item-card-capital'>
        <p className='item-card-capital-name'> {props.capital.name} </p>
        <div className='item-card-underline'/>
      </div>
      <div className='item-card-details'>
        <p className='item-card-details-type'> TEMPERATURE </p>
        <p className='item-card-details-info'> {props.forecast.temperature} </p>
        <p className='item-card-details-type'> PRESSURE </p>
        <p className='item-card-details-info'> {props.forecast.pressure} </p>
        <p className='item-card-details-type'> HUMIDITY </p>
        <p className='item-card-details-info'> {props.forecast.humidity} </p>
        <p className='item-card-details-type'> UV INDEX </p>
        <p className='item-card-details-info'> {props.forecast.uvIndex} </p>
        <p className='item-card-details-type'> VISIBILITY </p>
        <p className='item-card-details-info'> {props.forecast.visibility} </p>
        <p className='item-card-details-type'> OZONE </p>
        <p className='item-card-details-info'> {props.forecast.ozone} </p>
      </div>
      <img className='button-ok' onClick={() => props.handleCloseModal()} src={buttonImg} alt='Button Ok'/>
    </div>
    </div>
  </div>
);

export default InfoModal;
