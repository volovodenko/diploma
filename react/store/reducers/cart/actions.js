import * as t from './actionTypes';
import {TIMEOUT_RESET_POPUP_PRODUCT_TO_CART_ADDED} from '../../../config';


/*************************************************************************
 * PUT PRODUCT INTO CART
 *************************************************************************/
const putProductIntoCart = (data) => ({
    type: t.PUT_PRODUCT_INTO_CART,
    payload: data
});

let timerId;

export const onPutProductIntoCart = (data) => dispatch => {
    clearTimeout(timerId);

    dispatch(putProductIntoCart(data));

    timerId = setTimeout(() => {
        dispatch(resetProductToCartAdded());
    }, TIMEOUT_RESET_POPUP_PRODUCT_TO_CART_ADDED);
};


/*************************************************************************
 * RESET POPUP PRODUCT TO CART ADDED
 *************************************************************************/
const resetProductToCartAdded = () => ({
    type: t.RESET_POPUP_PRODUCT_TO_CART_ADDED,
});

export const onResetProductToCartAdded = () => dispatch => {
    dispatch(resetProductToCartAdded());
};

/*************************************************************************
 * CHANGE PRODUCT BUY QUANTITY
 *************************************************************************/
const changeProductBuyQuantity = (data) => ({
    type: t.CHANGE_PRODUCT_BUY_QUANTITY,
    payload: data
});

export const onChangeProductBuyQuantity = (data) => dispatch => {
    dispatch(changeProductBuyQuantity(data));
};

/*************************************************************************
 * DELETE PRODUCT ITEM FROM CART
 *************************************************************************/
const deleteProductItemFromCart = (data) => ({
    type: t.DELETE_PRODUCT_ITEM_FROM_CART,
    payload: data
});

export const onDeleteProductItemFromCart = (data) => dispatch => {
    dispatch(deleteProductItemFromCart(data));
};

/*************************************************************************
 * CLEAR CART
 *************************************************************************/
const clearCart = () => ({
    type: t.CLEAR_CART,
});

export const onClearCart = () => dispatch => {
    dispatch(clearCart());
};