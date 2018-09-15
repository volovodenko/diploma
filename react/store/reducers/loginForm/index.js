import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.LOGIN_FORM_SHOW:
            return {
                ...stateStore,
                loginFormVisible: true
            };

        /****************************************************************************/
        case t.LOGIN_FORM_HIDE:
            return {
                ...stateStore,
                loginFormVisible: false
            };

        /****************************************************************************/

        default:
            return stateStore;
    }

}
