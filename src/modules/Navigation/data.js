import Cards from 'images/svg/nav/cards.svg';
import History from 'images/svg/nav/history.svg';
import Payments from 'images/svg/nav/payments.svg';
import Profile from 'images/svg/nav/profile.svg';

export default [
  {
    name: 'Мой Bank',
    icon: Profile,
    link: '/bank',
  },
  {
    name: 'Мои деньги',
    icon: Cards,
    link: '/accounts',
  },
  {
    name: 'Платежи',
    icon: Payments,
    link: '/payments',
  },
  {
    name: 'События',
    icon: History,
    link: '/history',
  },
  {
    name: 'Мой профиль',
    icon: Profile,
    link: '/profile',
  },
];
