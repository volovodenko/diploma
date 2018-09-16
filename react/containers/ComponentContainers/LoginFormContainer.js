import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    clearErrorLogin, loginUser
} from '../../store/reducers/user/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            errorLogin: state.user.errorLogin,
        };
    };

    @connect(
        mapStateToProps,
        {
            clearErrorLogin, loginUser
        }
    )
    class LoginFormContainer extends Component {


        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            errorLogin: PropTypes.bool.isRequired,

            clearErrorLogin: PropTypes.func.isRequired,
            loginUser: PropTypes.func.isRequired,
        };
    }


    return LoginFormContainer;
}