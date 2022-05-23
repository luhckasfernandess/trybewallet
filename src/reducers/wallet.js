import { GET_CURRENCIES } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  // Consultar a minha API, no meu caso, o estado global. Quem eu quero?
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      // Consegui essa parte com a ajuda do cantor Muca na mentoria técnica
      // Só usamos o spread quando queremos espalhar, mas nesse caso eu quero salvar as informações na minha currencies
      currencies: action.currencies,
    };
  default:
    return state;
  }
}

export default wallet;
