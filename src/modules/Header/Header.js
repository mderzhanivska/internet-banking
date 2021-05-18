import React from 'react';

import { Dropdown } from 'semantic-ui-react';

import { Currencies, Notifications, Profile } from 'components';

import Styles from './Header.module.scss';

const options = [
  { key: 1, text: 'RU', value: 1 },
  { key: 2, text: 'UKR', value: 2 },
  { key: 3, text: 'EN', value: 3 },
];

const Header = () => (
  <header className={Styles.header}>
    <div className={Styles.desktop}>
      <div className={Styles.desk_part}>
        <Currencies />
      </div>

      <div className={Styles.desk_part}>
        <div className={Styles.languages}>
          <Dropdown
            defaultValue={options[0].value}
            fluid
            compact
            selection
            options={options}
            className={Styles.dropdown}
          />
        </div>

        <Notifications />

        <Profile />
      </div>
    </div>
  </header>
);

export default Header;
