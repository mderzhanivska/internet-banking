import React from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from 'semantic-ui-react';

import Avatar from 'images/profile_big.png';
import Styles from './General.module.scss';

const General = () => (
  <section className={Styles.general}>
    <div className={Styles.about}>
      <div className={Styles.avatar}>
        <img src={Avatar} alt="" />
      </div>
      <div className={Styles.block}>
        <div className={Styles.block_field}>
          <div className={Styles.desc}>ФИО</div>
          <div className={Styles.value}>Котов Андрей Андреевич</div>
        </div>
        <div className={Styles.block_field}>
          <div className={Styles.desc}>Дата рождения</div>
          <div className={Styles.value}>20.08.1993</div>
        </div>
      </div>
      <div className={Styles.block}>
        <div className={Styles.block_field}>
          <div className={Styles.desc}>Финансовый номер</div>
          <div className={Styles.value}>+38 093 74 38 289</div>
        </div>
        <Link to="/" className={Styles.link}>
          Добавить еще один контакт
        </Link>
      </div>
    </div>
    <div className={Styles.additional}>
      <div className={Styles.title}>Дополнительно</div>
      <div className={Styles.checkboxes}>
        <Checkbox toggle className={Styles.checkbox} />
        <div className={Styles.label}>Отображать закрытые карты и счета</div>
      </div>
      <div className={Styles.checkboxes}>
        <Checkbox toggle className={Styles.checkbox} />
        <div className={Styles.label}>
          Подсказки на страницах интернет банка
        </div>
      </div>
    </div>
    <div className={Styles.btn}>
      <button>Сохранить изменения</button>
    </div>
  </section>
);

export default General;
