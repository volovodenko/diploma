import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    validateEmailExist, registerUser, loginUser, logoutUser, clearErrorLogin
} from './store/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            loginRequest: state.user.loginRequest,
            token: state.user.token,
            userName: state.user.userName,
            userId: state.user.userId,
            userLoggedIn: state.user.userLoggedIn,
            errorLogin: state.user.errorLogin,
            emailExists: state.user.emailExists,
        };
    };

    @connect(
        mapStateToProps,
        {
            validateEmailExist, registerUser, loginUser, logoutUser, clearErrorLogin
        },
        null,
        {pure: false}
    )
    class UserContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }

        static propTypes = {
            loginRequest: PropTypes.bool.isRequired,
            token: PropTypes.string.isRequired,
            userName: PropTypes.string.isRequired,
            userId: PropTypes.number.isRequired,
            userLoggedIn: PropTypes.bool.isRequired,
            errorLogin: PropTypes.bool.isRequired,
            emailExists: PropTypes.bool.isRequired,


            validateEmailExist: PropTypes.func.isRequired,
            registerUser: PropTypes.func.isRequired,
            loginUser: PropTypes.func.isRequired,
            logoutUser: PropTypes.func.isRequired,
            clearErrorLogin: PropTypes.func.isRequired,
        };
    }


    return UserContainer;


}