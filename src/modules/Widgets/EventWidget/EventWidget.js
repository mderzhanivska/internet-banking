import React from 'react';
import cx from 'classnames';

import { IconButton, IconButtonTypes } from 'components/index';

import Skype from '../../../images/idea/skype.png';

import StylesWidget from '../Widget.module.scss';
import Styles from './EventWidget.module.scss';

const EventWidget = ({ title }) => (
  <div className={cx(StylesWidget.widget, Styles.event_widget)}>
    <div className={Styles.top_info}>
      <div className={Styles.box_title}>{title}</div>
      <IconButton type={IconButtonTypes.PLUS} />
    </div>

    <div className={Styles.box_body}>
      <div className={Styles.events}>
        <div className={Styles.date}>28 ноября</div>
        <div className={Styles.events_list}>
          <div className={Styles.event}>
            <div className={Styles.event_image}>
              <img src={Skype} alt="" />
            </div>

            <div className={Styles.event_info}>
              <div className={Styles.info_title}>Пополнение мобильного</div>
              <div className={Styles.info_desc}>
                Перевод между своими счетами
              </div>
            </div>

            <div className={Styles.amount}>+3 800 ₴</div>
          </div>

          <div className={Styles.event}>
            <div className={Styles.event_image}>
              <img src={Skype} alt="" />
            </div>

            <div className={Styles.event_info}>
              <div className={Styles.info_title}>Пополнение мобильного</div>
              <div className={Styles.info_desc}>
                Перевод между своими счетами
              </div>
            </div>

            <div className={Styles.amount}>+3 800 ₴</div>
          </div>

          <div className={Styles.event}>
            <div className={Styles.event_image}>
              <img src={Skype} alt="" />
            </div>

            <div className={Styles.event_info}>
              <div className={Styles.info_title}>Пополнение мобильного</div>
              <div className={Styles.info_desc}>
                Перевод между своими счетами
              </div>
            </div>

            <div className={Styles.amount}>+3 800 ₴</div>
          </div>

          <div className={Styles.event}>
            <div className={Styles.event_image}>
              <img src={Skype} alt="" />
            </div>

            <div className={Styles.event_info}>
              <div className={Styles.info_title}>Пополнение мобильного</div>
              <div className={Styles.info_desc}>
                Перевод между своими счетами
              </div>
            </div>

            <div className={Styles.amount}>+3 800 ₴</div>
          </div>

          <div className={Styles.event}>
            <div className={Styles.event_image}>
              <img src={Skype} alt="" />
            </div>

            <div className={Styles.event_info}>
              <div className={Styles.info_title}>Пополнение мобильного</div>
              <div className={Styles.info_desc}>
                Перевод между своими счетами
              </div>
            </div>

            <div className={Styles.amount}>+3 800 ₴</div>
          </div>

          <div className={Styles.event}>
            <div className={Styles.event_image}>
              <img src={Skype} alt="" />
            </div>

            <div className={Styles.event_info}>
              <div className={Styles.info_title}>Пополнение мобильного</div>
              <div className={Styles.info_desc}>
                Перевод между своими счетами
              </div>
            </div>

            <div className={Styles.amount}>+3 800 ₴</div>
          </div>

          <div className={Styles.event}>
            <div className={Styles.event_image}>
              <img src={Skype} alt="" />
            </div>

            <div className={Styles.event_info}>
              <div className={Styles.info_title}>Пополнение мобильного</div>
              <div className={Styles.info_desc}>
                Перевод между своими счетами
              </div>
            </div>

            <div className={Styles.amount}>+3 800 ₴</div>
          </div>

          <div className={Styles.event}>
            <div className={Styles.event_image}>
              <img src={Skype} alt="" />
            </div>

            <div className={Styles.event_info}>
              <div className={Styles.info_title}>Пополнение мобильного</div>
              <div className={Styles.info_desc}>
                Перевод между своими счетами
              </div>
            </div>

            <div className={Styles.amount}>+3 800 ₴</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EventWidget;
