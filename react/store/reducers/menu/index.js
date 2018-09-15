import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.MENU_FETCH_REQUEST:
            return {
                ...stateStore,
                menuIsLoading: true
            };
        case t.MENU_FETCH_SUCCESS:
            return {
                ...stateStore,
                menuList: action.payload,
                menuIsLoading: false,
                menuLoaded: true
            };
        case t.MENU_FETCH_FAIL:
            return {
                ...stateStore,
                menuIsLoading: false
            };

        /****************************************************************************/

        default:
            return stateStore;
    }

}
