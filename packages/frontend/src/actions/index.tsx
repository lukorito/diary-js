import { REGISTER_USER, LOGIN_USER, ENTRIES_REQUEST } from './constants';
import { iUser } from "../types/User";

export const registerUser = (user: iUser) => ({
  type: REGISTER_USER,
  user,
});

export const loginUser = (user: iUser) => ({
  type: LOGIN_USER,
  user,
});

export const fetchEntries = (user) => ({
  type: ENTRIES_REQUEST,
  user
});
