import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.REGISTER_USER_REQUEST:
        case t.LOGIN_USER_REQUEST:
            return {
                ...stateStore,
                loginRequest: true,
                errorLogin: false,
            };

        case t.REGISTER_USER_SUCCESS:
        case t.LOGIN_USER_SUCCESS:
            //запись в localStorage
            localStorage.setItem('JWT', action.payload.token);
            localStorage.setItem('userName', action.payload.name);
            localStorage.setItem('userId', action.payload.id);
            localStorage.setItem('userLoggedIn', '1');

            return {
                ...stateStore,
                loginRequest: false,
                userLoggedIn: true,
                userName: action.payload.name,
                userId: action.payload.id,
                token: action.payload.token
            };

        case t.REGISTER_USER_FAIL:
        case t.LOGIN_USER_FAIL:

            return {
                ...stateStore,
                loginRequest: false,
                errorLogin: true,
            };

        /****************************************************************************/
        case t.VALIDATE_EMAIL_REQUEST:
            return {
                ...stateStore,
                emailExists: true
            };
        case t.VALIDATE_EMAIL_SUCCESS:
            return {
                ...stateStore,
                emailExists: false
            };
        case t.VALIDATE_EMAIL_FAIL:
            return {
                ...stateStore,
                emailExists: true
            };

        /****************************************************************************/
        case t.CLEAR_ERROR_LOGIN:
            return {
                ...stateStore,
                errorLogin: false
            };

        /****************************************************************************/
        case t.LOGOUT_USER:
            //Очистка localStorage
            localStorage.clear();

            return {
                ...stateStore,
                userLoggedIn: false,
                userId: 0,
                userName: '',
                token: ''
            };

        /****************************************************************************/

        default:
            return stateStore;
    }

}
