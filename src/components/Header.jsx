import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  updateSumExpenses = () => {
    const { expenses } = this.props;
    // console.log(expenses);
    let total = 0;
    if (expenses.length > 0) {
      expenses.forEach((element) => {
        const { currency, value, exchangeRates } = element;
        total += Number(value) * Number(exchangeRates[currency].ask);
      });
    }
    return total.toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">
          Email:
          { email }
        </p>
        <p data-testid="total-field">
          {/* Despesa Total: */}
          { this.updateSumExpenses() }
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
