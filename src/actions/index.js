export const LOGIN = 'LOGIN';

export const loginAction = (email, password) => ({
  type: LOGIN,
  email,
  password,
});
