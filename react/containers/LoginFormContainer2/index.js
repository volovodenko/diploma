import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    loginFormShow, loginFormHide
} from './store/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            loginFormVisible: state.loginForm.loginFormVisible,
        };
    };

    @connect(
        mapStateToProps,
        {
            loginFormShow, loginFormHide
        },
        null,
        {pure: false}
    )
    class LoginFormContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }

        static propTypes = {
            loginFormVisible: PropTypes.bool.isRequired,

            loginFormShow: PropTypes.func.isRequired,
            loginFormHide: PropTypes.func.isRequired,
        };
    }


    return LoginFormContainer;

}