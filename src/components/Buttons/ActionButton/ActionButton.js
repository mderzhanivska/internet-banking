import React from 'react';

import Styles from './ActionButton.module.scss';

// TODO: add props

const ActionButton = () => (
  <div className={Styles.actionButton}>
    <button type="button">
      <div className={Styles.icon}>{icon}</div>
      <span className={Styles.text}>{text}</span>
    </button>
  </div>
);

export default ActionButton;
