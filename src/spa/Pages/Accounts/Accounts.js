import React from 'react';

import StylesIndex from 'styles/index.module.scss';
import Styles from './Accounts.module.scss';

import { Title } from 'components';

import {
  CardWidget,
  CreditWidget,
  DepositWidget,
  AccountWidget,
} from 'modules';

import Card from 'images/idea/card1.png';
import Card2 from 'images/idea/card2.png';
import Card3 from 'images/idea/all_card_idea/1-0.png';
import Card4 from 'images/idea/all_card_idea/4-0.png';

const Accounts = () => (
  <section className={StylesIndex.main}>
    <Title title="Мои деньги" />
    <div className={Styles.content}>
      <div className={Styles.row}>
        <div className={Styles.row_title}>Мои карты</div>
        <div className={Styles.row_body}>
          <CardWidget
            title="Универсальная"
            frontCard={Card}
            backCard={Card3}
            amountTitle="Баланс"
            balance="7703 ₴"
            limit="17703 ₴"
            used="10703 ₴"
          />
          <CardWidget
            title="Универсальная"
            frontCard={Card2}
            backCard={Card4}
            amountTitle="Баланс"
            balance="7703 ₴"
            limit="17703 ₴"
            used="10703 ₴"
          />
          <CardWidget
            title="Универсальная"
            frontCard={Card}
            backCard={Card3}
            amountTitle="Баланс"
            balance="7703 ₴"
            limit="17703 ₴"
            used="10703 ₴"
          />
        </div>
      </div>

      <div className={Styles.row}>
        <div className={Styles.row_title}>Депозиты</div>
        <div className={Styles.row_body}>
          <DepositWidget
            title="Депозит"
            percents="500 ₴"
            depositSum="15 000₴"
            percentRate="17.5 %"
          />
        </div>
      </div>

      <div className={Styles.row}>
        <div className={Styles.row_title}>Кредиты</div>
        <div className={Styles.row_body}>
          <CreditWidget
            title="Автокредит"
            closingSum="800 ₴"
            minPayment="200 ₴"
            nextPayment="18.12.2018"
          />
        </div>
      </div>

      <div className={Styles.row}>
        <div className={Styles.row_title}>Текущие счета</div>
        <div className={Styles.row_body}>
          <AccountWidget title="Счет" balance="500 ₴" />
        </div>
      </div>
    </div>
  </section>
);

export default Accounts;
