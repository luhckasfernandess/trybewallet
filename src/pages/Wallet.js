import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyQuotesAPI } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpense: 0,
      currentCurrency: 'BRL',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencyQuotesAPI());
  }

  render() {
    const { email, currencies } = this.props;
    const { totalExpense, currentCurrency } = this.state;
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <p data-testid="email-field">
            Email:
            { email }
          </p>
          <p data-testid="total-field">
            Despesa Total:
            { totalExpense }
          </p>
          <p data-testid="header-currency-field">
            { currentCurrency }
          </p>
        </header>
        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              type="number"
              data-testid="value-input"
              placeholder="Digite o valor da despesa"
            />
          </label>
          <label htmlFor="value-input">
            Descrição:
            <input
              type="text"
              data-testid="description-input"
              placeholder="Descreva a despesa"
            />
          </label>
          <label htmlFor="currencies">
            Moeda:
            <select id="currencies">
              {currencies.map((currency) => (
                <option key={ currency }>{ currency }</option>
              ))}
            </select>
          </label>
          <label htmlFor="method-input">
            Método de pagamento
            <select data-testid="method-input">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria:
            <select data-testid="tag-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Wallet);
