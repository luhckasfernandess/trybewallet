export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SEND_EXPENSES = 'SEND_EXPENSES';

export const loginAction = (email, password) => ({
  type: LOGIN,
  email,
  password,
});
export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const sendExpenses = (expenses) => ({
  type: SEND_EXPENSES,
  payload: expenses,
});

export function fetchCurrencyQuotesAPI() {
  return async (dispatch) => { // thunk declarado
    const URL_API = 'https://economia.awesomeapi.com.br/json/all';
    const currencyQuotes = await (await fetch(URL_API)).json();
    // Remova das informações trazidas pela API a opção 'USDT' (Moeda Tether).
    const currencies = Object.keys(currencyQuotes)
      .filter((currency) => currency !== 'USDT');
    // console.log(currencies);
    dispatch(getCurrencies(currencies));
  };
}
