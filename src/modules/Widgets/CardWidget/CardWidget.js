import React from 'react';

import { Info, Cards } from 'components';

import Wrapper from '../Wrapper';
import Footer from '../Footer';

import Styles from './CardWidget.module.scss';

const CardWidget = props => {
  const { cards, title, buttons, description } = props;

  return (
    <Wrapper title={title}>
      <div className={Styles.box_body}>
        <Cards cards={cards} />
        <Info items={description} />
      </div>

      <Footer buttons={buttons} />
    </Wrapper>
  );
};

export default CardWidget;
