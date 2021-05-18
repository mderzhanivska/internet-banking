import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StylesIndex from 'styles/index.module.scss';
import StepFour from 'images/06-step4.png';
import Styles from './SMS.module.scss';

class SMS extends Component {
  constructor(props) {
    super(props);
    this.state = { code: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ code: event.target.code });
  }

  render() {
    return (
      <section className={Styles.sms}>
        <div className={StylesIndex.container}>
          <div className={StylesIndex.row}>
            <div className={StylesIndex.wrap}>
              <div className={Styles.image}>
                <img src={StepFour} alt="step four" />
              </div>
              <form action="" className={Styles.form}>
                <div className={Styles.confirmation}>
                  <h2 className={Styles.title}>СМС-подтверждение</h2>
                  <div>
                    <p className={Styles.desc}>
                      Вам на телефон было отправлено СМС с подтверждением
                      номера. Пожалуйста, введите его в поле для окончания
                      регистрации
                    </p>
                  </div>

                  <div className={Styles.field}>
                    <input
                      type="text"
                      className={StylesIndex.input}
                      id="code"
                      name="code"
                      value={this.state.code}
                      placeholder="00-00-00"
                      pattern="[0-9]{6}"
                      required
                    />
                  </div>

                  <div className={Styles.link}>
                    <Link to="/">Запросить код повторно</Link>
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

export default SMS;
