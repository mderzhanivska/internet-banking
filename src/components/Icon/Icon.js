import React from 'react';
import PropTypes from 'prop-types';

export const Types = {
  ADD: '',
};

function Icon({ type: Svg }) {
  return <Svg />;
}

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(Types)).isRequired,
};

export default Icon;
