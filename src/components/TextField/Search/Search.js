import React from 'react';

import Loupe from 'images/svg/loupe.svg';
import Styles from './Search.module.scss';

const Search = ({ label }) => (
  <div className={Styles.search}>
    <input type="search" placeholder={label} />
    <span className={Styles.loupe}>
      <Loupe />
    </span>
  </div>
);

export default Search;
