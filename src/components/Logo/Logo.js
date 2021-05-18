import React from 'react';
import { Link } from 'react-router-dom';

import minLogo from 'images/logo_vernum.png';
import Styles from './Logo.module.scss';

const Logo = () => (
  <div className={Styles.logo}>
    <Link to="/">
      <img src={minLogo} alt="vernum-bank logo" />
    </Link>
  </div>
);

export default Logo;
