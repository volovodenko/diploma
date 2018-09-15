import {httpRequest, checkResponse} from '../../../helpers/network';
import * as t from './actionTypes';


/*************************************************************************
 * GET PRODUCT LIST BY CAR MODEL SLUG
 *************************************************************************/
const productListFetchRequest = () => ({
    type: t.PRODUCT_LIST_FETCH_REQUEST
});

const productListFetchSuccess = (data) => ({
    type: t.PRODUCT_LIST_FETCH_SUCCESS,
    payload: data
});

const productListFetchFail = (error) => ({
    type: t.PRODUCT_LIST_FETCH_FAIL,
    payload: error
});

export const getProductList = (carModelSlug) => dispatch => {
    dispatch(productListFetchRequest());

    httpRequest(`getProductList/${carModelSlug}`)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(productListFetchSuccess({
                    carModel: carModelSlug,
                    products: res.data
                }));
            }
        })
        .catch(err => {
            dispatch(productListFetchFail(err.response.data.error));
        });
};


/*************************************************************************
 * GET PRODUCT ITEM BY PRODUCT SLUG
 *************************************************************************/
const productItemFetchRequest = () => ({
    type: t.PRODUCT_ITEM_FETCH_REQUEST
});

const productItemFetchSuccess = (data) => ({
    type: t.PRODUCT_ITEM_FETCH_SUCCESS,
    payload: data
});

const productItemFetchFail = (error) => ({
    type: t.PRODUCT_ITEM_FETCH_FAIL,
    payload: error
});

export const getProductItem = (slug) => dispatch => {
    dispatch(productItemFetchRequest());

    httpRequest(`getProductItem/${slug}`)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(productItemFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(productItemFetchFail(err.response.data.error));
        });
};


/*************************************************************************
 * CLEAR PRODUCT ITEM
 *************************************************************************/
const clearProductItem = () => ({
    type: t.CLEAR_PRODUCT_ITEM
});

export const onClearProductItem = () => dispatch => {
    dispatch(clearProductItem());
};