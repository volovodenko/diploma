import * as t from './actionTypes';

/*************************************************************************
 * LOGIN FORM VISIBLE
 *************************************************************************/
const setLoginFormVisible = () => ({
    type: t.LOGIN_FORM_SHOW
});

export const loginFormShow = () => dispatch => {
    dispatch(setLoginFormVisible());
};

/*************************************************************************
 * LOGIN FORM HIDE
 *************************************************************************/
const setLoginFormHide = () => ({
    type: t.LOGIN_FORM_HIDE
});

export const loginFormHide = () => dispatch => {
    dispatch(setLoginFormHide());
};