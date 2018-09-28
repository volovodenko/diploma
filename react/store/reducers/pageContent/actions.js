import {httpRequest, checkResponse} from '../../../helpers/network';
import * as t from './actionTypes';


/*************************************************************************
 * GET ABOUT CONTENT PAGE
 *************************************************************************/
const aboutContentFetchRequest = () => ({
    type: t.ABOUT_CONTENT_FETCH_REQUEST
});

const aboutContentFetchSuccess = (data) => ({
    type: t.ABOUT_CONTENT_FETCH_SUCCESS,
    payload: data
});

const aboutContentFetchFail = (error) => ({
    type: t.ABOUT_CONTENT_FETCH_FAIL,
    payload: error
});

export const getAboutContent = () => dispatch => {
    dispatch(aboutContentFetchRequest());

    httpRequest('getPageContent/about')
        .then(res => {
            if (checkResponse(res)) {
                dispatch(aboutContentFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(aboutContentFetchFail(err.response.data.error));
        });
};

/*************************************************************************
 * GET PAYMENT CONTENT PAGE
 *************************************************************************/
const paymentContentFetchRequest = () => ({
    type: t.PAYMENT_CONTENT_FETCH_REQUEST
});

const paymentContentFetchSuccess = (data) => ({
    type: t.PAYMENT_CONTENT_FETCH_SUCCESS,
    payload: data
});

const paymentContentFetchFail = (error) => ({
    type: t.PAYMENT_CONTENT_FETCH_FAIL,
    payload: error
});

export const getPaymentContent = () => dispatch => {
    dispatch(paymentContentFetchRequest());

    httpRequest('getPageContent/payment')
        .then(res => {
            if (checkResponse(res)) {
                dispatch(paymentContentFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(paymentContentFetchFail(err.response.data.error));
        });
};


/*************************************************************************
 * GET WARRANTY CONTENT PAGE
 *************************************************************************/
const warrantyContentFetchRequest = () => ({
    type: t.WARRANTY_CONTENT_FETCH_REQUEST
});

const warrantyContentFetchSuccess = (data) => ({
    type: t.WARRANTY_CONTENT_FETCH_SUCCESS,
    payload: data
});

const warrantyContentFetchFail = (error) => ({
    type: t.WARRANTY_CONTENT_FETCH_FAIL,
    payload: error
});

export const getWarrantyContent = () => dispatch => {
    dispatch(warrantyContentFetchRequest());

    httpRequest('getPageContent/warranty')
        .then(res => {
            if (checkResponse(res)) {
                dispatch(warrantyContentFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(warrantyContentFetchFail(err.response.data.error));
        });
};