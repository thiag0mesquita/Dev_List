import { Router } from "express";

import authMiddleware from "./app/middlewares/auth";

import UserControllers from "./app/controllers/UserControllers";
import SessionControllers from "./app/controllers/SessionControllers";

const routes = new Router();

routes.post("/users", UserControllers.store);
routes.post("/sessions", SessionControllers.store);

// Todas as rotas abaixo são protegidas por authMiddleware
routes.use(authMiddleware);
routes.put("/users", UserControllers.update);

export default routes;
