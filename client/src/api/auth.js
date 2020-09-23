import httpClient from './httpClient';

const login = (email, password) => httpClient.post('/login', { email, password });
const logout = () => httpClient.post('/logout');
const signUp = (data) => httpClient.post('/signup', ...data);

export {
  login,
  logout,
  signUp,
};
