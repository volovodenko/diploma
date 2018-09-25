import * as t from './actionTypes';
import {checkResponse, httpRequest} from '../../../helpers/network';

/*************************************************************************
 * SEND FinishTab DATA
 *************************************************************************/
const finishTabDataSendRequest = () => ({
    type: t.FINISH_DATA_SEND_REQUEST
});

const finishTabDataSendSuccess = (data) => ({
    type: t.FINISH_DATA_SEND_SUCCESS,
    payload: data
});

const finishTabDataSendFail = (error) => ({
    type: t.FINISH_DATA_SEND_FAIL,
    payload: error
});

export const sendFinishTabData = data => dispatch => {
    dispatch(finishTabDataSendRequest());

    httpRequest('saveOrder', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(finishTabDataSendSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(finishTabDataSendFail(err.response.data.error));
        });
};

/*************************************************************************
 * GET PAYMENTS DATA
 *************************************************************************/
const paymentsDataFetchRequest = () => ({
    type: t.PAYMENTS_DATA_FETCH_REQUEST
});

const paymentsDataFetchSuccess = (data) => ({
    type: t.PAYMENTS_DATA_FETCH_SUCCESS,
    payload: data
});

const paymentsDataFetchFail = (error) => ({
    type: t.PAYMENTS_DATA_FETCH_FAIL,
    payload: error
});

export const getPayments = () => dispatch => {
    dispatch(paymentsDataFetchRequest());

    httpRequest('getPayments')
        .then(res => {
            if (checkResponse(res)) {
                dispatch(paymentsDataFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(paymentsDataFetchFail(err.response.data.error));
        });
};