import {combineReducers} from 'redux';


import product from './reducers/product';
import cart from './reducers/cart';
import car from './reducers/car';
import menu from './reducers/menu';
import user from './reducers/user';
import loginForm from './reducers/loginForm';
import nav from './reducers/nav';
import transporter from './reducers/transporter';
import checkout from './reducers/checkout';
import errorMessage from './reducers/errorMessage';


export default combineReducers(
    {
        product,
        cart,
        car,
        menu,
        user,
        loginForm,
        nav,
        transporter,
        checkout,
        errorMessage
    }
)

