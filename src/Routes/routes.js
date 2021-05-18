import Accounts from '../spa/Pages/Accounts/Accounts';
import Payments from '../spa/Pages/Payments/Payments';
import MyBank from '../spa/Pages/MyBank/MyBank';
import History from '../spa/Pages/History/History';
import MyProfile from '../spa/Pages/MyProfile/MyProfile';
import Auth from '../spa/Pages/Auth/Auth';
import Register from '../spa/Pages/Register/Register';
import CardPage from '../spa/Pages/CardPage/CardPage';

export default [
  {
    path: '/auth',
    component: Auth,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: '/',
    component: MyBank,
    exact: true,
  },
  {
    path: '/accounts',
    component: Accounts,
    exact: true,
  },
  {
    path: '/payments',
    component: Payments,
    exact: true,
  },
  {
    path: '/history',
    component: History,
    exact: true,
  },
  {
    path: '/profile',
    component: MyProfile,
    exact: true,
  },
  {
    path: '/bank',
    component: MyBank,
    exact: true,
  },
  {
    path: '/card',
    component: CardPage,
    exact: true,
  },
];
