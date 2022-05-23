export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const loginAction = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export function fetchCurrencyQuotesAPI() {
  return async (dispatch) => { // thunk declarado
    const currencyQuotes = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    // Remova das informações trazidas pela API a opção 'USDT' (Moeda Tether).
    const currencies = Object.keys(currencyQuotes)
      .filter((currency) => currency !== 'USDT');
    // console.log(currencies);
    dispatch(getCurrencies(currencies));
  };
}
