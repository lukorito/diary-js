import { UserController } from "./controllers/UserController";

export const Routes = [
  {
    path: "/user",
    method: "get",
    action: "getAll",
    controller: UserController,
  },
  {
    path: "/api/auth/signup",
    method: "post",
    action: "save",
    controller: UserController,
  },
  {
    path: "/api/user/:id",
    method: "get",
    action: "getOne",
    controller: UserController,
  },
  {
    path: "/api/user/:id",
    method: "put",
    action: "update",
    controller: UserController,
  },
];
