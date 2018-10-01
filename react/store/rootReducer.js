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
import comment from './reducers/comment';
import pageContent from './reducers/pageContent';
import search from './reducers/search';


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
        errorMessage,
        comment,
        pageContent,
        search
    }
)

