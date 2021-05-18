import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import IconLoan from 'images/idea/mybank/loan.svg';

import {
  ChartDeposit,
  Info,
  IconButton,
  IconButtonTypes,
} from 'components/index';

import StylesWidget from '../Widget.module.scss';
import Styles from './DepositWidget.module.scss';

const DepositWidget = ({ title, percents, depositSum, percentRate }) => {
  const description = [
    {
      title: 'Начислено %',
      value: percents,
    },
    {
      title: 'Сумма депозита ',
      value: depositSum,
    },
    {
      title: 'Процентная ставка ',
      value: percentRate,
    },
  ];

  return (
    <div className={cx(StylesWidget.widget, Styles.deposit_widget)}>
      <div className={Styles.top_info}>
        <div className={Styles.box_title}>{title}</div>
        <IconButton type={IconButtonTypes.PLUS} />
      </div>

      <div className={Styles.box_body}>
        <Info items={description} />

        <ChartDeposit />
      </div>

      <div className={Styles.box_buttons}>
        <div className={Styles.button}>
          <Link to="/">
            <div className={Styles.btn_icon}>
              <IconLoan />
            </div>
            <span className={Styles.btn_text}>Пополнение депозита</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DepositWidget;
