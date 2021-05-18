import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import IconRecharge from 'images/idea/mybank/recharge.svg';

import { Info, IconButton, IconButtonTypes } from 'components/index';

import StylesWidget from '../Widget.module.scss';
import Styles from './AccountWidget.module.scss';

const AccountWidget = ({ title, balance }) => {
  const description = [
    {
      title: 'Баланс счета',
      value: balance,
    },
  ];

  return (
    <div className={cx(StylesWidget.widget, Styles.card_widget)}>
      <div className={Styles.top_info}>
        <div className={Styles.box_title}>{title}</div>
        <IconButton type={IconButtonTypes.PLUS} />
      </div>

      <div className={Styles.box_body}>
        <div className="account_number">29395938570</div>
        <Info items={description} />
      </div>

      <div className={Styles.box_buttons}>
        <div className={Styles.button}>
          <Link to="/">
            <div className={Styles.btn_icon}>
              <IconRecharge />
            </div>
            <span className={Styles.btn_text}>Подробнее</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountWidget;
