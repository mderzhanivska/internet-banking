import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import steps from '../data';

import Styles from './Stepper.module.scss';

const Stepper = ({ currentStep }) => (
  <section className={Styles.stepper}>
    <div className={Styles.step_list}>
      {steps.map(({ title, icon }, index) => {
        const className = cx(Styles.step, {
          [Styles.active]: currentStep === index,
        });

        return (
          <div key={title} className={className}>
            <img src={icon} className={Styles.icon} alt={title} />
            <div className={Styles.title}>{title}</div>
          </div>
        );
      })}
    </div>
  </section>
);

Stepper.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default Stepper;
