import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      totalExpense: 0,
      currentCurrency: 'BRL',
    };
  }

  render() {
    const { totalExpense, currentCurrency } = this.state;
    const { email } = this.props;
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

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
