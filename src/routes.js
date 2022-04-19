import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserControllers from './app/controllers/UserControllers';
import SessionControllers from './app/controllers/SessionControllers';
import TaskControllers from './app/controllers/TaskController';

const routes = new Router();

routes.post('/users', UserControllers.store);
routes.post('/sessions', SessionControllers.store);

// Todas as rotas abaixo desse middleware precisam de autenticação
routes.use(authMiddleware);
routes.put('/users', UserControllers.update);

routes.post('/tasks', TaskControllers.store);
routes.get('/tasks', TaskControllers.index);

export default routes;
