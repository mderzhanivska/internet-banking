import React from 'react';
import PropTypes from 'prop-types';

import IconBtn from 'images/idea/mybank/more_small.svg';

import Styles from './IconButton.module.scss';

export const Types = {
  PLUS: Styles.details_btn,
};

export const Position = {
  TOP: Styles.top,
  RIGHT: Styles.right,
  BOTTOM: Styles.bottom,
  LEFT: Styles.left,
};

// TODO: add styles for position (flex)

const IconButton = ({ position, title }) => (
  <button type="button" className={position}>
    <IconBtn />
    {title}
  </button>
);

IconButton.defaultProps = {
  position: Position.TOP,
};

IconButton.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.oneOf(Object.keys(Position)),
};

export default IconButton;
