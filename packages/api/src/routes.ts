import { UserController } from './controllers/UserController';
import { AuthController } from './controllers/AuthController';

export const Routes = [
  {
    path: '/user',
    method: 'get',
    action: 'getAll',
    controller: UserController,
    isAuthenticated: true,
  },
  {
    path: '/api/auth/signup',
    method: 'post',
    action: 'signup',
    controller: AuthController,
    isAuthenticated: false,
  },
  {
    path: '/api/auth/login',
    method: 'post',
    action: 'login',
    controller: AuthController,
    isAuthenticated: false,
  },
  {
    path: '/api/user/:id',
    method: 'get',
    action: 'getOne',
    controller: UserController,
  },
  {
    path: '/api/user/:id',
    method: 'put',
    action: 'update',
    controller: UserController,
  },
];
