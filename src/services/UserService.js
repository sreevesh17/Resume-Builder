import API from '../api';

export const registerUser = (userData) => {
  return API.post('/register', userData);
};

export const loginUser = (credentials) => {
  return API.post('/login', credentials);
};
