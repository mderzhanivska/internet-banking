import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StylesIndex from 'styles/index.module.scss';
import Burger from '../modules/Navigation/Burger';
import routes from './routes';
import Navigation from '../modules/Navigation/Navigation';
import MessageButton from '../components/Buttons/MessageButton';
import Header from '../modules/Header/Header';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Layout = () => (
  <div id="outer-container">
    <Burger />
    <main id="page-wrap">
      <div className={StylesIndex.layout}>
        <Header />
        <Navigation />
        <MessageButton />
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    </main>

    <ScrollToTop />
  </div>
);

export default Layout;
