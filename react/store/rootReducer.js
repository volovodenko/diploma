import {combineReducers} from 'redux';


import product from './reducers/product';
import cart from './reducers/cart';
import car from './reducers/car';
import menu from './reducers/menu';
import user from './reducers/user';
import loginForm from './reducers/loginForm';


export default combineReducers(
    {
        product,
        cart,
        car,
        menu,
        user,
        loginForm,
    }
)

