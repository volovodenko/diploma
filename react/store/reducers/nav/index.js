import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.SAVE_HISTORY_SLUG:
            return {
                ...stateStore,
                navHistorySlug: action.payload,
            };

        /****************************************************************************/
        case t.SAVE_HISTORY_TITLE:
            return {
                ...stateStore,
                navHistoryTitle: action.payload,
            };

        /****************************************************************************/

        default:
            return stateStore;
    }

}
