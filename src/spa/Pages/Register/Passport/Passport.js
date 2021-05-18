import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import cx from 'classnames';
import 'react-dates/initialize';

import StepTwo from 'images/04-step2.png';
import StylesIndex from 'styles/index.module.scss';
import Styles from './Passport.module.scss';

const options = [
  { key: 1, text: 'Паспорт старого образца', value: 1 },
  { key: 2, text: 'ID карта', value: 2 },
];

// TODO: control inputs
// TODO: label must be parent for input
class Passport extends Component {
  constructor(props) {
    super(props);
    this.state = { passport: '', birthDate: '', passDate: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ passport: event.target.passport });
    this.setState({ passDate: event.target.passDate });
    this.setState({ birthDate: event.target.birthDate });
  }

  render() {
    return (
      <section className={Styles.passport}>
        <div className={StylesIndex.container}>
          <div className={StylesIndex.row}>
            <div className={StylesIndex.wrap}>
              <div className={Styles.image}>
                <img src={StepTwo} alt="step one" />
              </div>
              <form action="" className={Styles.form}>
                <div className={Styles.data}>
                  <h2 className={Styles.title}>Введите данные паспорта</h2>
                  <div className={Styles.type}>
                    <div className={Styles.label}>Тип документа</div>
                    <Dropdown
                      defaultValue={options[0].value}
                      fluid
                      selection
                      options={options}
                    />
                  </div>
                  <div className={Styles.field}>
                    <label className={Styles.label}>
                      Номер и серия паспорта
                      <input
                        className={StylesIndex.input}
                        type="tel"
                        id="passport"
                        name="passport"
                        value={this.state.passport}
                        placeholder="АВ 000000"
                        pattern="^[А-Я]{2}\d[0-9]{5}"
                        required
                      />
                    </label>
                  </div>
                  <div className={Styles.date}>
                    <div className={cx(Styles.field, Styles.field_sm)}>
                      <label className={Styles.label}>
                        Дата выдачи паспорта
                      </label>
                      <input
                        type="text"
                        className={StylesIndex.input}
                        value={this.state.passDate}
                        placeholder="00/00"
                        pattern="[0-9]{2}/[0-9]{2}"
                        required
                      />
                    </div>
                    <div className={cx(Styles.field, Styles.field_sm)}>
                      <label className={Styles.label}>Дата рождения</label>
                      <input
                        type="text"
                        className={StylesIndex.input}
                        value={this.state.birthDate}
                        placeholder="00/00"
                        pattern="[0-9]{2}/[0-9]{2}"
                        required
                      />
                    </div>
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

export default Passport;
