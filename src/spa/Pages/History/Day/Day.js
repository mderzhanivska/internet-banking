import React from 'react';
import Settings from 'images/settings.png';
import Mode from 'images/mode.png';
import Copy from 'images/copy.png';
import Print from 'images/print.png';

import Styles from './Day.module.scss';
import payments from './data';

function ListPayments() {
  const listPayments = payments.map(({ time, icon, title, desc, money }) => (
    <div className={Styles.payment}>
      <div className={Styles.time}>
        <span>{time}</span>
      </div>
      <div className={Styles.dot}>
        <span />
      </div>
      <div className={Styles.description}>
        <div className={Styles.image}>
          <img src={icon} alt="" />
        </div>
        <div className={Styles.text}>
          <div className={Styles.text_title}>{title}</div>
          <div className={Styles.text_desc}>{desc}</div>
        </div>
      </div>
      <div className={Styles.about}>
        <div className={Styles.money}> {money} ₴</div>
        <div className={Styles.settings}>
          <button className={Styles.set_btn}>
            <img src={Settings} alt="" />
          </button>
          <div className={Styles.hidden_settings}>
            <button className={Styles.mode}>
              <img src={Mode} alt="" />
            </button>
            <button className={Styles.copy}>
              <img src={Copy} alt="" />
            </button>
            <button className={Styles.print}>
              <img src={Print} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
  return <ul className={Styles.payments}>{listPayments}</ul>;
}

const Day = () => (
  <section className={Styles.day}>
    <div className={Styles.title}>
      <h2>08 мая</h2>
    </div>
    <div className={Styles.payments}>
      <ListPayments />
    </div>
  </section>
);

export default Day;
