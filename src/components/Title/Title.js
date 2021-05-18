import React from 'react';
import Styles from './Title.module.scss';

const Title = ({ title }) => (
  <div className={Styles.title}>
    <h2>{title}</h2>
  </div>
);

export default Title;
