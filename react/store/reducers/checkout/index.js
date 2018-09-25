import initialState from './initialState';
import * as t from './actionTypes';
import * as tUser from '../user/actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case tUser.SAVE_ORDER_TAB_DATA:
            return {
                ...stateStore,
                comment: action.payload.comment,

                orderDataSent: false
            };

        /****************************************************************************/
        case t.PAYMENTS_DATA_FETCH_REQUEST:
            return {
                ...stateStore,
                paymentsDataIsLoading: true
            };
        case t.PAYMENTS_DATA_FETCH_SUCCESS:
            return {
                ...stateStore,
                paymentsData: action.payload,
                paymentsDataIsLoading: false,
                paymentsDataLoaded: true
            };
        case t.PAYMENTS_DATA_FETCH_FAIL:
            return {
                ...stateStore,
                paymentsDataIsLoading: false
            };

        /****************************************************************************/
        case t.FINISH_DATA_SEND_REQUEST:
            return {
                ...stateStore,
                orderDataIsSending: true
            };
        case t.FINISH_DATA_SEND_SUCCESS:
            return {
                ...stateStore,
                orderNumber: action.payload.order ? action.payload.order : 0,
                orderDataIsSending: false,
                orderDataSent: true,
            };
        case t.FINISH_DATA_SEND_FAIL:
            return {
                ...stateStore,
                orderDataIsSending: false
            };

        /****************************************************************************/

        default:
            return stateStore;
    }

}
