import React from 'react';

import { Title, BackButton, Card } from 'components';

import StylesIndex from 'styles/index.module.scss';
import Styles from './CardPage.module.scss';

const CardPage = () => (
  <section className={StylesIndex.main}>
    <Title title="Карта универсальная" />
    <div className={Styles.content}>
      <BackButton />
      <div className={Styles.info_wrapper}>
        <div className={Styles.card_wrapper}>
          <div className="card_name">
            <input type="text" placeholder="Название карты" />
          </div>
          <Card />
          <div className={Styles.mainInfo}>
            <span className={Styles.description}>Доступно:</span>
            <div className={Styles.amount}>
              23450 <span className={Styles.sign}>₴</span>
            </div>
          </div>
        </div>

        <div className={Styles.details_wrapper} />
        <div className={Styles.actions_wrapper} />
      </div>
    </div>
  </section>
);

export default CardPage;
