// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  // Consultar a minha API, no meu caso, o estado global. Quem eu quero?
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default wallet;
