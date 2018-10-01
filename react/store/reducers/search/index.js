import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.SEARCH_FETCH_REQUEST:
            return {
                ...stateStore,
                searchIsLoading: true,
            };
        case t.SEARCH_FETCH_SUCCESS:
            return {
                ...stateStore,
                searchList: action.payload,
                searchIsLoading: false,
                searchLoaded: true
            };
        case t.SEARCH_FETCH_FAIL:
            return {
                ...stateStore,
                searchIsLoading: false,
                searchFetchFails: false
            };

        /****************************************************************************/
        case t.CLEAR_SEARCH_LIST:
            return {
                ...stateStore,
                searchList: [],
                searchLoaded: false
            };

        /****************************************************************************/
        default:
            return stateStore;
    }

}
