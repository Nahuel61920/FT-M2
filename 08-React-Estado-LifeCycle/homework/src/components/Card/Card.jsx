import React from 'react';
import style from './card.module.css';

export default function Card({ max, min, name, img, onClose, id }) {
  // acá va tu código
  return (
    <div className={style.card}>
      <button onClick={onClose} className={style.buttonCard}>X</button>
      <h1 className={style.titleCity}>{name}</h1>
      <div className={style.maxMin}>
        <p><span>Min: </span>{min}°</p>
        <p><span>Min: </span> {max}°</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
    </div>
  )
};