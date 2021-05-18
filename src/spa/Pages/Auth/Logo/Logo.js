import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'images/idea/idea_logo.png';
import Styles from './Logo.module.scss';

const Logo = () => (
  <section className={Styles.logo}>
    <div className={Styles.pic}>
      <Link to="/">
        <img src={logo} alt="idea-bank logo" />
      </Link>
    </div>

    <div className={Styles.title}>Твой интернет-банк</div>
  </section>
);

export default Logo;
