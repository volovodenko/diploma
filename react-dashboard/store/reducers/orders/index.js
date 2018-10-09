import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.ORDERS_LIST_FETCH_REQUEST:
            return {
                ...stateStore,
                ordersListIsLoading: true
            };
        case t.ORDERS_LIST_FETCH_SUCCESS:
            return {
                ...stateStore,
                ordersList: action.payload,
                ordersListIsLoading: false,
                ordersListLoaded: true
            };
        case t.ORDERS_LIST_FETCH_FAIL:
            return {
                ...stateStore,
                ordersListIsLoading: false,
                ordersListFetchFail: true,
            };

        /****************************************************************************/
        case t.ORDER_DETAIL_FETCH_REQUEST:
            return {
                ...stateStore,
                orderIsLoading: true,
                orderLoaded: false,
                order: {}
            };
        case t.ORDER_DETAIL_FETCH_SUCCESS:
            return {
                ...stateStore,
                orderIsLoading: false,
                orderNumberWrong: action.payload.message !== 'Success',
                orderLoaded: action.payload.message === 'Success',
                order: action.payload.message === 'Success'
                    ? action.payload.order
                    : {}
            };
        case t.ORDER_DETAIL_FETCH_FAIL:
            return {
                ...stateStore,
                orderIsLoading: false,
                orderFetchFail: true,
            };

        /****************************************************************************/
        case t.ACCEPT_ORDER_REQUEST:
            return {
                ...stateStore,
                orderIsAccepting: true,
                orderAccepted: false
            };
        case t.ACCEPT_ORDER_SUCCESS:
            return {
                ...stateStore,
                orderIsAccepting: false,
                orderAccepted: action.payload.message === 'Success',
            };
        case t.ACCEPT_ORDER_FAIL:
            return {
                ...stateStore,
                orderIsAccepting: false,
                orderAcceptFail: true,
            };

        /****************************************************************************/
        default:
            return stateStore;
    }

}
