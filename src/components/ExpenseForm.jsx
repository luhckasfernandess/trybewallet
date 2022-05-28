import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencyQuotesAPI } from '../actions';

class ExpenseForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencyQuotesAPI());
  }

  render() {
    const { currencies } = this.props;
    return (
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
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ExpenseForm);
