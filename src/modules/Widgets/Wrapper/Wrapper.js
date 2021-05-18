import React from 'react';
import PropTypes from 'prop-types';

import { IconButton, IconButtonTypes } from 'components';

import Styles from './Wrapper.module.scss';

const Wrapper = ({ title, children }) => (
  <div className={Styles.widget}>
    <div className={Styles.header}>
      <div className={Styles.title}>{title}</div>
      <IconButton type={IconButtonTypes.PLUS} />
    </div>

    {children}
  </div>
);

Wrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Wrapper;
