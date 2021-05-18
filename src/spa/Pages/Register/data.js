import StepOne from 'images/register_card.png';
import StepTwo from 'images/register_doc.png';
import StepThree from 'images/register_key.png';
import StepFour from 'images/register_phone.png';
import StepOneBlue from 'images/register_card_blue.png';
import StepTwoBlue from 'images/register_doc_blue.png';
import StepThreeBlue from 'images/register_key_blue.png';
import StepFourBlue from 'images/register_phone_blue.png';

import sms from './SMS/index';
import password from './Password/index';
import passport from './Passport/index';
import login from './Login/index';

export default [
  {
    title: 'Логин',
    icon: StepOne,
    completedIcon: StepTwoBlue,
    component: login,
  },
  {
    title: 'Данные паспорта',
    icon: StepTwo,
    completedIcon: StepOneBlue,
    component: passport,
  },
  {
    title: 'Пароль',
    icon: StepThree,
    completedIcon: StepThreeBlue,
    component: password,
  },
  {
    title: 'СМС-подтверждение',
    icon: StepFour,
    completedIcon: StepFourBlue,
    component: sms,
  },
];
