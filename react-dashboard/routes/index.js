import Default from '../pages/Default';
import Orders from '../pages/Orders';
import Order from '../pages/Order';
import Comments from '../pages/Comments';


const routes = [
    {
        name: 'default',
        path: '/dashboard',
        isExact: true,
        component: Default
    },
    {
        name: 'orders',
        path: '/dashboard/orders',
        isExact: true,
        component: Orders
    },
    {
        name: 'order',
        path: '/dashboard/order/:id',
        isExact: true,
        component: Order
    },
    {
        name: 'comments',
        path: '/dashboard/comments',
        isExact: true,
        component: Comments
    },
];

export default routes;