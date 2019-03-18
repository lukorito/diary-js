import { UserController } from './controllers/UserController';
import { AuthController } from './controllers/AuthController';
import { EntryController } from './controllers/EntryController';

export const Routes = [
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
    path: '/api/user/:userId',
    method: 'get',
    action: 'getOne',
    controller: UserController,
    isAuthenticated: true,
  },
  {
    path: '/api/user/:userId',
    method: 'put',
    action: 'update',
    controller: UserController,
    isAuthenticated: true,
  },
  {
    path: '/api/user/:userId/entries',
    method: 'get',
    action: 'getAll',
    controller: EntryController,
    isAuthenticated: true,
  },
  {
    path: '/api/user/:userId/entries',
    method: 'post',
    action: 'save',
    controller: EntryController,
    isAuthenticated: true,
  },
  {
    path: '/api/user/:userId/entry/:id',
    method: 'get',
    action: 'getOne',
    controller: EntryController,
    isAuthenticated: true,
  },
  {
    path: '/api/user/:userId/entry/:id',
    method: 'put',
    action: 'update',
    controller: EntryController,
    isAuthenticated: true,
  },
  {
    path: '/api/user/:userId/entry/:id',
    method: 'delete',
    action: 'delete',
    controller: EntryController,
    isAuthenticated: true,
  },
];
