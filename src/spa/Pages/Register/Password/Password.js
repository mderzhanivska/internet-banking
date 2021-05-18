import React, { Component } from 'react';

import StylesIndex from 'styles/index.module.scss';
import StepThree from 'images/05-step3.png';
import Styles from './Password.module.scss';

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.password });
  }

  render() {
    return (
      <section className={Styles.password}>
        <div className={StylesIndex.container}>
          <div className={StylesIndex.row}>
            <div className={StylesIndex.wrap}>
              <div className={Styles.image}>
                <img src={StepThree} alt="step three" />
              </div>
              <form action="" className={Styles.form}>
                <div className={Styles.pass}>
                  <h2 className={Styles.title}>Пароль</h2>

                  <div className={Styles.field}>
                    <label htmlFor="phone">
                      Придумайте пароль
                      <span className={Styles.help}> ? </span>
                      <input
                        type="password"
                        className={StylesIndex.input}
                        value={this.state.password}
                        id="password"
                        name="password"
                        required
                      />
                    </label>
                  </div>
                  <div className={Styles.field}>
                    <label htmlFor="phone">
                      Повторите пароль
                      <input
                        type="password"
                        className={StylesIndex.input}
                        id="repPassword"
                        name="repPassword"
                        required
                      />
                    </label>
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

export default Password;
