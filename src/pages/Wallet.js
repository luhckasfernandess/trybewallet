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
    const { email } = this.props;
    const { totalExpense, currentCurrency } = this.state;
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

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
