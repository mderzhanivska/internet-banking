import React from 'react';

import Mobile from 'images/idea/mobile.png';

import StylesIndex from 'styles/index.module.scss';
import Styles from './Payments.module.scss';

import { Title } from 'components';
import { TemplateWidget } from 'modules';

import transfer from './transfer';
import categories from './categories';

const Transfers = () => (
  <div className={Styles.items}>
    {transfer.map(({ icon: Icon, name }) => (
      <div className={Styles.item}>
        <div className={Styles.icon}>
          <Icon />
        </div>
        <div className={Styles.name}>{name}</div>
      </div>
    ))}
  </div>
);

const Categories = () => (
  <div className={Styles.items}>
    {categories.map(({ icon: Icon, name }) => (
      <div className={Styles.item}>
        <div className={Styles.icon}>
          <Icon />
        </div>
        <div className={Styles.name}>{name}</div>
      </div>
    ))}
  </div>
);

const Payments = () => (
  <section className={StylesIndex.main}>
    <Title title="Платежи и переводы" />
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <div className={Styles.content_part}>
          <div className={Styles.title}>Переводы</div>
          <Transfers />
        </div>
        <div className={Styles.content_part}>
          <div className={Styles.title}>Категории</div>
          <Categories />
        </div>
      </div>
      <div className={Styles.aside}>
        <div className={Styles.title}>Шаблоны</div>
        <div className={Styles.templates}>
          <TemplateWidget
            img={Mobile}
            name="Мой мобильный"
            destination="+380937438289"
          />
          <TemplateWidget
            img={Mobile}
            name="Интернет"
            destination="Интернет Дом"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Payments;
