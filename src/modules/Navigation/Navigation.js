import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from 'images/idea_logo.svg';

import Styles from './Navigation.module.scss';

import links from './data';

// TODO mode to a new file

const NavList = () => (
  <ul className={Styles.list}>
    {links.map(({ icon: Icon, name, link }) => (
      <li className={Styles.listItem} key={name}>
        <Link to={link} className={Styles.link}>
          <div className={Styles.svg}>
            <Icon className={Styles.icon} />
          </div>
          <div className={Styles.name}>{name}</div>
        </Link>
      </li>
    ))}
  </ul>
);

class Navigation extends Component {
  render() {
    return (
      <section className={Styles.navigation}>
        <div className={Styles.logo}>
          <Link to="/">
            <Logo className={Styles.logo_svg} />
          </Link>
        </div>

        <nav className={Styles.nav}>
          <NavList />
        </nav>
      </section>
    );
  }
}

export default Navigation;
