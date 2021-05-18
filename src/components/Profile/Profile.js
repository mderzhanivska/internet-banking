import React from 'react';
import { Link } from 'react-router-dom';

import ProfilePic from '../../images/idea/user.png';
import Styles from './Profile.module.scss';

const Profile = () => (
  <div className={Styles.profile}>
    <button type="button" className={Styles.profile_btn} />

    <div className={Styles.profile_window}>
      <div className={Styles.profile_info}>
        <div className={Styles.profile_pic}>
          <img src={ProfilePic} alt="" />
        </div>
        <div className={Styles.profile_name}>Коля Коля</div>
      </div>
      <div className={Styles.controls}>
        <Link to="/" className={Styles.control_item}>
          Настройки
        </Link>
        <Link to="/" className={Styles.control_item}>
          Выход
        </Link>
      </div>
    </div>
  </div>
);

export default Profile;
