import usersRoutes from './src/users/routes.js';
import ordersRoutes from './src/orders/routes.js';

// mounts each individual router into the main application:
export const mountRoutes = (app) => {
    app.use('/api/users', usersRoutes); 
    app.use('/api/orders', ordersRoutes); 
}
