import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

import { Link } from 'react-router-dom';

import MyVernum from 'images/svg/nav/my_vernum.svg';
import Atm from 'images/svg/nav/atm.svg';
import Cards from 'images/svg/nav/cards.svg';
import Chats from 'images/svg/nav/chats.svg';
import Currency from 'images/svg/nav/currency.svg';
import History from 'images/svg/nav/history.svg';
import Payments from 'images/svg/nav/payments.svg';
import Profile from 'images/svg/nav/profile.svg';
import Sale from 'images/svg/nav/sale.svg';
import Logout from 'images/svg/logout.svg';
import User from 'images/user.png';
import WindowDispatcher from 'components/WindowDispatcher';

import Styles from './Burger.module.scss';

class Burger extends Component {
  state = {
    isOpen: false,
  };

  handleChangeMenu = ({ isOpen }) => {
    // console.log(isMobile())
    this.setState({
      isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <WindowDispatcher
        screenSupported={['mobile', 'tablet']}
        isInvertSupported
      >
        {isActive => {
          console.log(isActive);
          return null;
        }}
      </WindowDispatcher>
    );
    return (
      <Menu
        left
        noOverlay
        isOpen={isOpen}
        pageWrapId="page-wrap"
        onStateChange={this.handleChangeMenu}
        className={Styles.burger}
        outerContainerId="outer-container"
      >
        <div className={Styles.user}>
          <img src={User} alt="user img" className="" />
          <div className={Styles.title}>user</div>
          <Link to="/" className={Styles.link}>
            Настройки
          </Link>
        </div>

        <div className={Styles.links}>
          <ul>
            <li className={Styles.listItem}>
              <div className={Styles.svg}>
                <MyVernum className={Styles.icon} />
              </div>
              <Link to="/vernum">Мой Vernum</Link>
            </li>

            <li className={Styles.listItem}>
              <div className={Styles.svg}>
                <Cards className={Styles.icon} />
              </div>
              <Link to="/accounts">Мои деньги</Link>
            </li>

            <li className={Styles.listItem}>
              <div className={Styles.svg}>
                <Payments className={Styles.icon} />
              </div>
              <Link to="/payments">Платежи</Link>
            </li>

            <li className={Styles.listItem}>
              <div className={Styles.svg}>
                <History className={Styles.icon} />
              </div>
              <Link to="/history">События</Link>
            </li>

            <li className={Styles.listItem}>
              <div className={Styles.svg}>
                <Profile className={Styles.icon} />
              </div>
              <Link to="/profile">Мой профиль</Link>
            </li>

            <li className={Styles.listItem}>
              <div className={Styles.svg}>
                <Chats className={Styles.icon} />
              </div>
              <Link to="/chat">Чат с банком</Link>
            </li>

            <li className={Styles.listItem}>
              <div className={Styles.svg}>
                <Sale className={Styles.icon} />
              </div>
              <Link to="/sales">Акции</Link>
            </li>

            <li className={Styles.listItem}>
              <div className={Styles.svg}>
                <Atm className={Styles.icon} />
              </div>
              <Link to="/atm">Отделения и банкоматы</Link>
            </li>

            <li className={Styles.listItem}>
              <div className={Styles.svg}>
                <Currency className={Styles.icon} />
              </div>
              <Link to="/currency">Курс валют</Link>
            </li>

            <li className={Styles.listItem}>
              <div className={Styles.svg}>
                <Logout className={Styles.icon} />
              </div>
              <Link to="/auth">Выход</Link>
            </li>
          </ul>
        </div>
      </Menu>
    );
  }
}

export default Burger;
