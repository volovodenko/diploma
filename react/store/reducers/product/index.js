import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.PRODUCT_LIST_FETCH_REQUEST:
            return {
                ...stateStore,
                productListIsLoading: true,
                productListLoaded: false,
            };
        case t.PRODUCT_LIST_FETCH_SUCCESS:

            return {
                ...stateStore,
                productList: [...stateStore.productList, action.payload],
                productListIsLoading: false,
                productListLoaded: true
            };
        case t.PRODUCT_LIST_FETCH_FAIL:
            return {
                ...stateStore,
                productListIsLoading: false
            };

        /****************************************************************************/
        case t.PRODUCT_ITEM_FETCH_REQUEST:
            return {
                ...stateStore,
                productItemIsLoading: true,
                productItemLoaded: false,
                productItemFetchFail: false
            };
        case t.PRODUCT_ITEM_FETCH_SUCCESS:

            return {
                ...stateStore,
                productItem: action.payload,
                productItemIsLoading: false,
                productItemLoaded: true
            };
        case t.PRODUCT_ITEM_FETCH_FAIL:
            return {
                ...stateStore,
                productItemIsLoading: false,
                productItemFetchFail: true
            };

        /****************************************************************************/
        case t.CLEAR_PRODUCT_ITEM:
            return {
                ...stateStore,
                productItem: {},
                productItemLoaded: false
            };

        /****************************************************************************/

        default:
            return stateStore;
    }

}
