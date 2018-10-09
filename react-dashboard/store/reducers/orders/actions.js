import {httpRequest, checkResponse} from '../../../helpers/network';
import * as t from './actionTypes';


/*************************************************************************
 * GET ORDERS HISTORY LIST
 *************************************************************************/
const ordersListFetchRequest = () => ({
    type: t.ORDERS_LIST_FETCH_REQUEST
});


const ordersListFetchSuccess = (data) => ({
    type: t.ORDERS_LIST_FETCH_SUCCESS,
    payload: data
});

const ordersListFetchFail = () => ({
    type: t.ORDERS_LIST_FETCH_FAIL,
});

export const getOrdersList = () => dispatch => {
    dispatch(ordersListFetchRequest());

    httpRequest('getDashboardOrdersList')
        .then(res => {
            if (checkResponse(res)) {
                dispatch(ordersListFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(ordersListFetchFail(err.response.data.error));
        });

};


/*************************************************************************
 * GET ORDERS DETAIL
 *************************************************************************/
const orderDetailFetchRequest = () => ({
    type: t.ORDER_DETAIL_FETCH_REQUEST
});


const orderDetailFetchSuccess = (data) => ({
    type: t.ORDER_DETAIL_FETCH_SUCCESS,
    payload: data
});

const orderDetailFetchFail = () => ({
    type: t.ORDER_DETAIL_FETCH_FAIL,
});

export const getOrderDetail = (orderId) => dispatch => {
    dispatch(orderDetailFetchRequest());

    httpRequest(`getOrder/${orderId}`)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(orderDetailFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(orderDetailFetchFail(err.response.data.error));
        });

};

/*************************************************************************
 * ACCEPT ORDER
 *************************************************************************/
const acceptOrderRequest = () => ({
    type: t.ACCEPT_ORDER_REQUEST
});


const acceptOrderSuccess = (data) => ({
    type: t.ACCEPT_ORDER_SUCCESS,
    payload: data
});

const acceptOrderFail = () => ({
    type: t.ACCEPT_ORDER_FAIL,
});

export const orderAccept = (orderId) => dispatch => {
    dispatch(acceptOrderRequest());

    const data = {
        id: orderId
    };

    httpRequest('orderAccept', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(acceptOrderSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(acceptOrderFail(err.response.data.error));
        });

};