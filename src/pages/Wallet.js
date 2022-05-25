import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyQuotesAPI } from '../actions';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

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
        <Header
          email={ email }
          totalExpense={ totalExpense }
          currentCurrency={ currentCurrency }
        />
        <ExpenseForm currencies={ currencies } />
        <ExpenseTable />
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
