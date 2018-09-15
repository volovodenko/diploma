import {httpRequest, checkResponse} from '../../../helpers/network';
import * as t from './actionTypes';
import {LOGIN_FORM_HIDE} from '../../LoginFormContainer2/store/actionTypes';


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