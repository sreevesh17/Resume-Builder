import API from '../api';

export const registerUser = (userData) => {
  return API.post('/user/register', userData);
};

export const loginUser = (credentials) => {
  return API.post('/user/login', credentials);
};
