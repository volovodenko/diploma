import {combineReducers} from 'redux';


import product from './reducers/product';
import cart from './reducers/cart';
import car from './reducers/car';
import menu from './reducers/menu';
import user from './reducers/user';
import loginForm from './reducers/loginForm';
import nav from './reducers/nav';


export default combineReducers(
    {
        product,
        cart,
        car,
        menu,
        user,
        loginForm,
        nav
    }
)

