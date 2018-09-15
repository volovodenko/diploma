import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    loginFormHide,
} from '../store/reducers/loginForm/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            loginFormVisible: state.loginForm.loginFormVisible,
        };
    };

    @connect(
        mapStateToProps,
        {
            loginFormHide,
        }
    )
    class LoginRegisterModalContainer extends Component {


        render() {
            console.log('LoginRegisterModalContainer');

            return <Controller {...this.props}/>
        }


        static propTypes = {
            loginFormVisible: PropTypes.bool.isRequired,

            loginFormHide: PropTypes.func.isRequired,
        };
    }


    return LoginRegisterModalContainer;
}