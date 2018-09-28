import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.ABOUT_CONTENT_FETCH_REQUEST:
            return {
                ...stateStore,
                aboutContentIsLoading: true
            };
        case t.ABOUT_CONTENT_FETCH_SUCCESS:
            return {
                ...stateStore,
                aboutContent: action.payload,
                aboutContentIsLoading: false,
                aboutContentLoaded: true
            };
        case t.ABOUT_CONTENT_FETCH_FAIL:
            return {
                ...stateStore,
                aboutContentIsLoading: false,
                aboutContentFetchFail: false
            };

        /****************************************************************************/
        case t.PAYMENT_CONTENT_FETCH_REQUEST:
            return {
                ...stateStore,
                paymentContentIsLoading: true
            };
        case t.PAYMENT_CONTENT_FETCH_SUCCESS:
            return {
                ...stateStore,
                paymentContent: action.payload,
                paymentContentIsLoading: false,
                paymentContentLoaded: true
            };
        case t.PAYMENT_CONTENT_FETCH_FAIL:
            return {
                ...stateStore,
                paymentContentIsLoading: false,
                paymentContentFetchFail: false
            };

        /****************************************************************************/
        case t.WARRANTY_CONTENT_FETCH_REQUEST:
            return {
                ...stateStore,
                warrantyContentIsLoading: true
            };
        case t.WARRANTY_CONTENT_FETCH_SUCCESS:
            return {
                ...stateStore,
                warrantyContent: action.payload,
                warrantyContentIsLoading: false,
                warrantyContentLoaded: true
            };
        case t.WARRANTY_CONTENT_FETCH_FAIL:
            return {
                ...stateStore,
                warrantyContentIsLoading: false,
                warrantyContentFetchFail: false
            };

        /****************************************************************************/

        default:
            return stateStore;
    }

}
