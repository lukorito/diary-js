import { api } from '../utils/authHelper';

export const registerUserService = (user) => {
  return api.post('/auth/signup', { user })
};

export const loginUserService = (user) => {
  return api.post('/auth/login', { user })
};
