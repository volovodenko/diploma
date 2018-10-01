import {httpRequest, checkResponse} from '../../../helpers/network';
import * as t from './actionTypes';
import {LOGIN_FORM_HIDE} from '../loginForm/actionTypes';


/*************************************************************************
 * VALIDATE USER NAME
 *************************************************************************/
const validateNameRequest = () => ({
    type: t.VALIDATE_NAME_REQUEST
});

const validateNameSuccess = () => ({
    type: t.VALIDATE_NAME_SUCCESS
});

const validateNameFail = () => ({
    type: t.VALIDATE_NAME_FAIL
});


export const validateNameExist = (data) => dispatch => {
    dispatch(validateNameRequest());

    httpRequest('validateName', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                res.data.message === 'Success'
                    ? dispatch(validateNameSuccess())
                    : dispatch(validateNameFail(res.data.message));
            }
        })
        .catch(err => {
            dispatch(validateNameFail(err.response.data.error));
        });
};

/*************************************************************************
 * VALIDATE EMAIL
 *************************************************************************/
const validateEmailRequest = () => ({
    type: t.VALIDATE_EMAIL_REQUEST
});

const validateEmailSuccess = () => ({
    type: t.VALIDATE_EMAIL_SUCCESS
});

const validateEmailFail = () => ({
    type: t.VALIDATE_EMAIL_FAIL
});


export const validateEmailExist = (data) => dispatch => {
    dispatch(validateEmailRequest());

    httpRequest('validateEmail', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                res.data.message === 'Success'
                    ? dispatch(validateEmailSuccess())
                    : dispatch(validateEmailFail(res.data.message));
            }
        })
        .catch(err => {
            dispatch(validateEmailFail(err.response.data.error));
        });
};


/*************************************************************************
 * REGISTER USER
 *************************************************************************/
const registerUserRequest = () => ({
    type: t.REGISTER_USER_REQUEST
});


const registerUserSuccess = (data) => ({
    type: t.REGISTER_USER_SUCCESS,
    payload: data
});

const registerUserFail = (data) => ({
    type: t.REGISTER_USER_FAIL,
    payload: data
});

export const registerUser = (data) => dispatch => {
    dispatch(registerUserRequest());

    httpRequest('register', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(registerUserSuccess(res.data.success));
            }
        })
        .catch(err => {
            dispatch(registerUserFail(err.response.data.error));
        });

};

/*************************************************************************
 * LOGIN USER
 *************************************************************************/
const loginUserRequest = () => ({
    type: t.LOGIN_USER_REQUEST
});


const loginUserSuccess = (data) => ({
    type: t.LOGIN_USER_SUCCESS,
    payload: data
});

const loginUserFail = (data) => ({
    type: t.LOGIN_USER_FAIL,
    payload: data
});

const setLoginFormHide = () => ({
    type: LOGIN_FORM_HIDE
});

export const loginUser = (data) => dispatch => {
    dispatch(loginUserRequest());

    httpRequest('login', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(setLoginFormHide());
                dispatch(loginUserSuccess(res.data.success));
            }
        })
        .catch(err => {
            dispatch(loginUserFail(err.response.data.error));
        });

};

/*************************************************************************
 * LOGOUT USER
 *************************************************************************/
const setLogoutUser = () => ({
    type: t.LOGOUT_USER
});


export const logoutUser = () => dispatch => {
    dispatch(setLogoutUser());
};


/*************************************************************************
 * CLEAR ERROR LOGIN
 *************************************************************************/
const setClearErrorLogin = () => ({
    type: t.CLEAR_ERROR_LOGIN
});

export const clearErrorLogin = () => dispatch => {
    dispatch(setClearErrorLogin());
};

/*************************************************************************
 * SAVE OrderTab DATA
 *************************************************************************/
const saveOrderTab = data => ({
    type: t.SAVE_ORDER_TAB_DATA,
    payload: data
});

export const onSaveOrderTab = data => dispatch => {
    dispatch(saveOrderTab(data));
};


/*************************************************************************
 * SAVE PaymentTab DATA
 *************************************************************************/
const savePaymentTab = data => ({
    type: t.SAVE_PAYMENT_TAB_DATA,
    payload: data
});

export const onSavePaymentTab = data => dispatch => {
    dispatch(savePaymentTab(data));
};


/*************************************************************************
 * SAVE DeliveryTab DATA
 *************************************************************************/
const saveDeliveryTab = data => ({
    type: t.SAVE_DELIVERY_TAB_DATA,
    payload: data
});

export const onSaveDeliveryTab = data => dispatch => {
    dispatch(saveDeliveryTab(data));
};


/*************************************************************************
 * SAVE USER PHONE
 *************************************************************************/
const saveUserPhone = data => ({
    type: t.SAVE_USER_PHONE,
    payload: data
});

export const onSaveUserPhone = data => dispatch => {
    dispatch(saveUserPhone(data));
};


/*************************************************************************
 * USER DATA SAVE REQUEST
 *************************************************************************/
const userDataSaveRequest = () => ({
    type: t.SAVE_USER_DATA_REQUEST
});

const userDataSaveSuccess = (data) => ({
    type: t.SAVE_USER_DATA_SUCCESS,
    payload: data
});

const userDataSaveFail = () => ({
    type: t.SAVE_USER_DATA_FAIL
});


export const saveUserData = (data) => dispatch => {
    dispatch(userDataSaveRequest());

    httpRequest('saveUserData', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                res.data.message === 'Success'
                    ? dispatch(userDataSaveSuccess(data))
                    : dispatch(userDataSaveFail(res.data.message));
            }
        })
        .catch(err => {
            dispatch(userDataSaveFail(err.response.data.error));
        });
};

/*************************************************************************
 * REFRESH USER DETAIL
 *************************************************************************/
const refreshUserDetail = () => ({
    type: t.REFRESH_USER_DETAIL,
});

export const onRefreshUserDetail = () => dispatch => {
    dispatch(refreshUserDetail());
};


/*************************************************************************
 * GET ORDERS LIST
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

    httpRequest('getOrdersList')
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
 * ADD TO FAVORITES
 *************************************************************************/
const addToFavoritesRequest = () => ({
    type: t.ADD_TO_FAVORITES_REQUEST,
});

const addToFavoritesSuccess = (data) => ({
    type: t.ADD_TO_FAVORITES_SUCCESS,
    payload: data
});

const addToFavoritesFail = () => ({
    type: t.ADD_TO_FAVORITES_FAIL,
});

export const addToFavorites = (data) => dispatch => {
    dispatch(addToFavoritesRequest());

    httpRequest('addToFavorites', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(addToFavoritesSuccess(res.data))
            }
        })
        .catch(err => {
            dispatch(addToFavoritesFail(err.response.data.error));
        });
};