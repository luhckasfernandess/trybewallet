import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
    this.didClick = this.didClick.bind(this);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange({ target: { type, value } }) {
    this.setState({ [type]: value }, () => {
      // Consegui com ajuda Gabriel na mentoria. Valew Gabriel
      // Como garantir que a linha 25 vai ser executada somente após eu digitar? Calback
      this.isDisabled();
    });
  }

  isDisabled() {
    const { email, password } = this.state;
    const MIN_PASSWORD = 5;
    // Source: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const validateEmail = (props) => {
      const verify = /\S+@\S+\.\S+/;
      return verify.test(props);
    };
    if (
      email !== ''
      && validateEmail(email)
      && password.length > MIN_PASSWORD
    ) this.setState({ disabled: false });
    else this.setState({ disabled: true });
  }

  didClick(event) {
    const { login, history } = this.props;
    const { email } = this.state;
    event.preventDefault();
    login({ email });
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              type="email"
              placeholder="alguem@email.com"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              placeholder="1****6"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
          <button
            type="submit"
            disabled={ disabled }
            onClick={ this.didClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
