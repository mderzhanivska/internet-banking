import React from 'react';

import Styles from './Currencies.module.scss';

const Currencies = () => (
  <div className={Styles.currencies}>
    <span className={Styles.title}>Курс валют на сегодня: </span>
    <div className={Styles.data}>
      <div className={Styles.data_item}>
        <span>USD:</span>
        <span>28.000</span>
      </div>

      <div className={Styles.data_item}>
        <span>EUR:</span>
        <span>32.700</span>
      </div>
    </div>
  </div>
);

export default Currencies;
