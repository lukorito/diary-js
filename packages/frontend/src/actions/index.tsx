import { REGISTER_USER, LOGIN_USER } from './constants';
import { iUser } from "../types/User";

export const registerUser = (user: iUser) => ({
  type: REGISTER_USER,
  user,
});

export const loginUser = (user: iUser) => ({
  type: LOGIN_USER,
  user,
});
