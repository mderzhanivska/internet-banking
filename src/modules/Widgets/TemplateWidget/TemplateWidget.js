import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import IconPay from 'images/idea/mybank/payments.svg';
import IconPayNow from 'images/idea/mybank/paynow.svg';
import IconMore from 'images/idea/mybank/more.svg';

import { IconButton, IconButtonTypes } from 'components/index';

import StylesWidget from '../Widget.module.scss';
import Styles from './TemplateWidget.module.scss';

const TemplateWidget = ({ title, img, name, destination }) => (
  <div className={cx(StylesWidget.widget, Styles.template_widget)}>
    <div className={Styles.top_info}>
      <div className={Styles.box_title}>{title}</div>
      <IconButton type={IconButtonTypes.PLUS} />
    </div>

    <div className={Styles.box_body}>
      <div className={Styles.box_info}>
        <div className={Styles.info}>
          <div className={Styles.info_image}>
            <img src={img} alt="" />
          </div>
          <div className={Styles.info_item}>
            <span className={Styles.item_title}>{name}</span>
            <span className={Styles.item_data}>{destination}</span>
          </div>
        </div>
      </div>

      <div className={Styles.box_input}>
        <input type="text" placeholder="100" maxLength={10} />
      </div>
    </div>

    <div className={Styles.box_buttons}>
      <div className={Styles.button}>
        <Link to="/">
          <div className={Styles.btn_icon}>
            <IconPay />
          </div>
          <span className={Styles.btn_text}>Оплатить</span>
        </Link>

        <Link to="/">
          <div className={Styles.btn_icon}>
            <IconPayNow />
          </div>
          <span className={Styles.btn_text}>Оплатить мгновенно</span>
        </Link>

        <Link to="/">
          <div className={Styles.btn_icon}>
            <IconMore />
          </div>
          <span className={Styles.btn_text}>Еще</span>
        </Link>
      </div>
    </div>
  </div>
);

export default TemplateWidget;
