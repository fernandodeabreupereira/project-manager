import { Router } from 'express';
import userRoutes from './user';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) => response.json({ message: 'Hello World' }));

routes.use(`${prefixRoutes}/users`, userRoutes);

export default routes;
