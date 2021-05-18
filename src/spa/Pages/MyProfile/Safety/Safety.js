import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Form, Checkbox } from 'semantic-ui-react';

import Styles from './Safety.module.scss';

class Safety extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <section className={Styles.safety}>
        <div className={Styles.block}>
          <div className={Styles.title}>Пароль</div>
          <div className={Styles.field}>
            <div className={Styles.label}>Текущий пароль</div>
            <div className={Styles.input}>*********</div>
          </div>
        </div>

        <div className={Styles.block}>
          <div className={Styles.title}>Карточные лимиты</div>
          <div className={Styles.field}>
            <div className={Styles.label}>
              Выберите дату установления лимита
            </div>
            <Form className={Styles.form}>
              <div className={Styles.block}>
                <Form.Field className={Styles.formField}>
                  <Checkbox
                    radio
                    className={Styles.checkbox}
                    label="****9058 Карта MasterCard"
                    name="checkboxRadioGroup"
                    value="one"
                    checked={this.state.value === 'one'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field className={Styles.formField}>
                  <Checkbox
                    radio
                    className={Styles.checkbox}
                    label="****3589 MasterCard Standart"
                    name="checkboxRadioGroup"
                    value="two"
                    checked={this.state.value === 'two'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field className={Styles.formField}>
                  <Checkbox
                    radio
                    className={Styles.checkbox}
                    label="****6804 Кредитный счет"
                    name="checkboxRadioGroup"
                    value="three"
                    checked={this.state.value === 'three'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </div>
              <div className={Styles.block}>
                <div className={Styles.amount}>17 703, 00 $</div>
                <div className={Styles.amount}>17 703, 00 $</div>
                <div className={Styles.amount}>17 703, 00 $</div>
              </div>
            </Form>
          </div>
          <div className={Styles.field}>
            <div className={Styles.label}>Сумма лимита</div>
            <div className={Styles.text}>
              <input type="text" />
            </div>
            <span>UAH</span>
          </div>
        </div>
        <div className={Styles.btn}>
          <button>Сохранить изменения</button>
        </div>
      </section>
    );
  }
}

export default Safety;
