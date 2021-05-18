import React from 'react';

import { Info, ChartCredit } from 'components';

import Styles from './CreditWidget.module.scss';
import Footer from '../Footer/Footer';
import Wrapper from '../Wrapper/Wrapper';

const CreditWidget = ({ title, buttons }) => {
  const description = [
    {
      title: 'Сумма для закрытия',
      value: '800 ₴',
    },
    {
      title: 'Минимальный платеж ',
      value: '200 ₴',
    },
    {
      title: 'Дата следующего платежа ',
      value: '18.12.2018',
    },
  ];

  return (
    <Wrapper title={title}>
      <div className={Styles.box_body}>
        <Info items={description} />
        <ChartCredit />
      </div>

      <Footer buttons={buttons} />
    </Wrapper>
  );
};

{
  /*<div className={Styles.button}>*/
}
{
  /*<Link to="/">*/
}
{
  /*<div className={Styles.btn_icon}>*/
}
{
  /*<IconRecharge />*/
}
{
  /*</div>*/
}
{
  /*<span className={Styles.btn_text}>Погашение кредита</span>*/
}
{
  /*</Link>*/
}
{
  /*</div>*/
}

export default CreditWidget;
