import { LOGIN } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  // Consultar a minha API, no meu caso, o estado global. Quem eu quero?
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      ...action.email,
      ...action.password,
    };
  default:
    return state;
  }
}

export default user;
