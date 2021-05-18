import React from 'react';

import StylesIndex from 'styles/index.module.scss';
import Logo from './Logo/index';
import AuthForm from './AuthForm/index';

import Styles from './Auth.module.scss';

const Auth = () => (
  <section className={Styles.auth}>
    <div className={StylesIndex.container}>
      <div className={StylesIndex.row}>
        <Logo />
        <AuthForm />
      </div>
    </div>
  </section>
);

export default Auth;
