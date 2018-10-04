import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    loginFormShow
} from '../../../store/reducers/loginForm/actions';
import {
    logoutUser
} from '../../../store/reducers/user/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            userLoggedIn: state.user.userLoggedIn,
            userName: state.user.userName
        };
    };

    @connect(
        mapStateToProps,
        {
            loginFormShow,
            logoutUser
        }
    )
    class MobileContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            userLoggedIn: PropTypes.bool.isRequired,
            userName: PropTypes.string.isRequired,

            loginFormShow: PropTypes.func.isRequired,
            logoutUser: PropTypes.func.isRequired,
        };
    }


    return MobileContainer;
}