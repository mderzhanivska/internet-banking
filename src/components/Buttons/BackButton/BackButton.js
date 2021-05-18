import React from 'react';
import { Link } from 'react-router-dom';

import Arrow from 'images/svg/arrow-link.svg';
import Styles from './BackButton.module.scss';

// TODO: add props for text, remove link

const BackButton = () => (
  <div className={Styles.back_btn}>
    <div className={Styles.back}>
      <Link to="/bank" className={Styles.link}>
        <span className={Styles.arrow}>
          <Arrow />
        </span>
        Назад
      </Link>
    </div>
  </div>
);

export default BackButton;
