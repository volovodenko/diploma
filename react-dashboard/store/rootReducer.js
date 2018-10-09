import {combineReducers} from 'redux';

import comments from './reducers/comments';
import orders from './reducers/orders';


export default combineReducers(
    {
        comments,
        orders

    }
)

