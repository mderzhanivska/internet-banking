import React from 'react';

import Styles from './Card.module.scss';

// TODO: rename to Cards, array cards

// {
//   back: img,
//   front: img,
//   ...
// }

const Card = ({ picture, cardNumber, expiryDate, cardType }) => (
  <div className={Styles.card}>
    <img src={picture} className={Styles.picture} alt="card picture" />

    <div className={Styles.card_data}>
      <div className={Styles.card_number}>{cardNumber}</div>
      <div className={Styles.expiry_date}>{expiryDate}</div>
      <div className={Styles.card_type}>{cardType}</div>
    </div>
  </div>
);

export default Card;
