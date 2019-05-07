import axios from 'axios';
import { iUser } from "../types/User";

export const setUser = (user: iUser) => {
  try {
    localStorage.setItem('user', JSON.stringify(user))
  } catch (error) {

  }
};

export const getUserObject = () => localStorage.getItem('user');

export const api = axios.create({
    baseURL: `${process.env.BASE_URL}`,
    headers: {'Content-Type': 'application/json'},
  });
