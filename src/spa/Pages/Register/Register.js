import React, { Component } from 'react';

import StylesIndex from 'styles/index.module.scss';
import Styles from './Register.module.scss';

import steps from './data';
import Stepper from './Stepper/index';

class Register extends Component {
  state = {
    currentStep: 0,
  };

  onClickNext = () => {
    const { history } = this.props;
    const { currentStep } = this.state;

    if (currentStep === steps.length - 1) {
      history.push('/');
    } else {
      this.setState({
        currentStep: currentStep + 1,
      });
    }
  };

  render() {
    const { currentStep } = this.state;
    const Step = steps[currentStep].component;

    return (
      <section className={Styles.register}>
        <h2 className={Styles.title}>Регистрация</h2>

        <Stepper currentStep={currentStep} />
        <Step />

        <div className={StylesIndex.button}>
          <button type="submit" onClick={this.onClickNext}>
            Продолжить
          </button>
        </div>
      </section>
    );
  }
}

export default Register;
