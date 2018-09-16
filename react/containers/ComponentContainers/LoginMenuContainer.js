import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    loginFormShow,
} from '../../store/reducers/loginForm/actions';
import {
    logoutUser,
} from '../../store/reducers/user/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            userName: state.user.userName,
            userLoggedIn: state.user.userLoggedIn,
        };
    };

    @connect(
        mapStateToProps,
        {
            loginFormShow, logoutUser
        }
    )
    class LoginMenuContainer extends Component {


        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            userName: PropTypes.string.isRequired,
            userLoggedIn: PropTypes.bool.isRequired,

            loginFormShow: PropTypes.func.isRequired,
            logoutUser: PropTypes.func.isRequired,
        };
    }


    return LoginMenuContainer;
}