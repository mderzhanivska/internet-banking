import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './Notifications.module.scss';

const Notifications = () => (
  <div className={Styles.notifications}>
    <button type="button" className={Styles.notify_btn} />
    <div className={Styles.badge}>2</div>

    <div className={Styles.notify_window}>
      <Link to="/" className={Styles.notification}>
        Уведомление
      </Link>
      <Link to="/" className={Styles.notification}>
        Уведомление
      </Link>
    </div>
  </div>
);

export default Notifications;
