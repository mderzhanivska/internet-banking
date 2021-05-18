import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Eye from 'images/eye-open.png';
import StylesIndex from 'styles/index.module.scss';
import Styles from './AuthForm.module.scss';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHide: true,
    };
    // const { password, username } = this.state;
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  showHide = () => {
    const { isHide } = this.state;

    this.setState({
      isHide: !isHide,
    });
  };

  handleChange(event) {
    this.setState({ username: event.target.username });
    this.setState({ password: event.target.password });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { isHide } = this.state;

    return (
      <section className={Styles.auth}>
        <form className={Styles.form}>
          <div className={StylesIndex.field}>
            <input
              type="text"
              className={StylesIndex.input}
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <span className={StylesIndex.floatLabel}>Логин</span>
            <div className={StylesIndex.border} />
          </div>

          <div className={StylesIndex.field}>
            <input
              name="password"
              className={StylesIndex.input}
              id="password"
              value={this.state.password}
              type={isHide ? 'password' : 'text'}
            />
            <div className={Styles.visible}>
              <span onClick={this.showHide} className={Styles.show_hide}>
                {isHide ? 'Show' : 'Hide'}
              </span>
            </div>
            <span className={StylesIndex.floatLabel}>Пароль</span>
            <div className={StylesIndex.border} />
          </div>

          <div className={Styles.help}>
            <Link to="/" className={Styles.link}>
              Забыли пароль?
            </Link>
          </div>

          <div className={Styles.buttons}>
            <div className={Styles.login}>
              <Link to="/" className={Styles.link}>
                Войти
              </Link>
            </div>
            <div className={Styles.register}>
              <Link to="/register" className={Styles.link}>
                Регистрация
              </Link>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default AuthForm;
