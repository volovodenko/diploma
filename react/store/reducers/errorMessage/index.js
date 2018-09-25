import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.SAVE_ERROR_MESSAGE:
            return {
                ...stateStore,
                message: action.payload.message,
            };

        /****************************************************************************/
        case t.CLEAR_ERROR_MESSAGE:
            return {
                ...stateStore,
                message: ''
            };

        /****************************************************************************/

        default:
            return stateStore;
    }

}
