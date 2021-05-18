import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Amount.module.scss';

const Amount = ({ value }) => <div className={Styles.amount}>{value}</div>;

Amount.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Amount;
