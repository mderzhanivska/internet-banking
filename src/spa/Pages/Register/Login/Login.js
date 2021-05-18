import React, { Component } from 'react';

import StylesIndex from 'styles/index.module.scss';
import StepOne from 'images/group.png';
import Styles from './Login.module.scss';

// TODO: control inputs
// TODO: label must be parent for input
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { phone: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ phone: event.target.phone });
  }

  render() {
    return (
      <section className={Styles.login}>
        <div className={StylesIndex.container}>
          <div className={StylesIndex.row}>
            <div className={StylesIndex.wrap}>
              <div className={Styles.image}>
                <img src={StepOne} alt="step one" />
              </div>
              <form action="" className={Styles.form}>
                <div className={Styles.number}>
                  <h2 className={Styles.title}>Введите номер телефона</h2>
                  <div className={Styles.field}>
                    <label className={Styles.label}>Номер телефона</label>
                    <input
                      className={StylesIndex.input}
                      type="tel"
                      id="phone"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      placeholder="+380 00 000 00 00"
                      pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
