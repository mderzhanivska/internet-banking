import React from 'react';
import { Link } from 'react-router-dom';

import IconRecharge from 'images/idea/mybank/recharge.svg';
import IconTransfer from 'images/idea/mybank/transfer.svg';
import IconArrow from 'images/idea/mybank/arrow.svg';

import Styles from './BtnBar.module.scss';

// TODO: need to move to SPA

const BtnBar = () => (
  <div className={Styles.btn_bar}>
    <div className={Styles.button}>
      <Link to="/">
        <div className={Styles.btn_icon}>
          <IconRecharge />
        </div>
        <span className={Styles.btn_text}>Пополнить</span>
      </Link>
    </div>

    <div className={Styles.button}>
      <Link to="/">
        <div className={Styles.btn_icon}>
          <IconTransfer />
        </div>
        <span className={Styles.btn_text}>Перевести</span>
      </Link>
    </div>

    <div className={Styles.button}>
      <Link to="/card">
        <div className={Styles.btn_icon}>
          <IconArrow />
        </div>
        <span className={Styles.btn_text}>Подробнее</span>
      </Link>
    </div>
  </div>
);

export default BtnBar;
