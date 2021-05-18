import React from 'react';
import PropTypes from 'prop-types';

import { Amount } from 'components';

import Styles from './Info.module.scss';

const Info = ({ items }) => (
  <div className={Styles.info}>
    {items.map(({ title, value }) => (
      <div className={Styles.info_item} key={title}>
        <div className={Styles.item_title}>{title}</div>
        <Amount value={value} />
      </div>
    ))}
  </div>
);

Info.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
};

export default Info;
