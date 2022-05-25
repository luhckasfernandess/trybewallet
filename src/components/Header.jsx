import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalExpense, currentCurrency } = this.props;
    return (
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
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpense: PropTypes.number.isRequired,
  currentCurrency: PropTypes.string.isRequired,
};

export default Header;
