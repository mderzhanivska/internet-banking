import React from 'react';

import StylesIndex from 'styles/index.module.scss';
import Mobile from 'images/idea/mobile.png';

import { Title } from 'components';

import {
  CardWidget,
  EventWidget,
  CreditWidget,
  DepositWidget,
  TemplateWidget,
} from 'modules';

import IconRecharge from 'images/idea/mybank/recharge.svg';
import IconTransfer from 'images/idea/mybank/transfer.svg';
import IconArrow from 'images/idea/mybank/arrow.svg';

import Card from 'images/idea/card1.png';
import Card2 from 'images/idea/card2.png';

const description = [
  {
    title: 'Баланс',
    value: '7000 ₴',
  },
  {
    title: 'Лимит',
    value: '17703 ₴',
  },
  {
    title: 'Использовано',
    value: '10703 ₴',
  },
];

const buttons = [
  {
    icon: IconRecharge,
    title: 'Пополнить',
    link: '/',
  },
  {
    icon: IconTransfer,
    title: 'Перевести',
    link: '/',
  },
  {
    icon: IconArrow,
    title: 'Подробнее',
    link: '/card',
  },
];

const cards = [
  {
    picture: Card,
    cardNumber: '5367876362562541',
    expiryDate: '4/21',
    cardType: 'credit card',
  },
  {
    picture: Card2,
    cardNumber: '5626262671656256',
    expiryDate: '5/22',
    cardType: 'credit card',
  },
];

const MyBank = () => (
  <section className={StylesIndex.main}>
    <Title title="Мой Bank" />
    <div className={StylesIndex.content}>
      <CardWidget
        title="Универсальная"
        cards={cards}
        amountTitle="Баланс"
        description={description}
        buttons={buttons}
      />

      <CardWidget
        title="Зарплатная"
        cards={cards}
        balance="8505 ₴"
        description={description}
        buttons={buttons}
      />
      <DepositWidget
        title="Депозит"
        percents="500 ₴"
        depositSum="15 000₴"
        percentRate="17.5 %"
      />
      <CreditWidget title="Автокредит" buttons={buttons} />
      <TemplateWidget
        title="Шаблон"
        img={Mobile}
        name="Интернет"
        destination="Интернет Дом"
      />
      <EventWidget title="Последние события" />
    </div>
  </section>
);

export default MyBank;
