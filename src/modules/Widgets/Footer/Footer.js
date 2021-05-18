import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Styles from './Footer.module.scss';

const Footer = ({ buttons }) => (
  <div className={Styles.btn_bar}>
    {buttons.map(({ icon: Icon, title, link }) => (
      <div className={Styles.button}>
        <Link to={link}>
          <div className={Styles.buttonIcon}>
            <Icon />
          </div>
          <span className={Styles.buttonText}>{title}</span>
        </Link>
      </div>
    ))}
  </div>
);

Footer.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Footer;
