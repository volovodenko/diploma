import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    validateEmailExist, registerUser
} from '../../store/reducers/user/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            emailExists: state.user.emailExists,
        };
    };

    @connect(
        mapStateToProps,
        {
            validateEmailExist, registerUser
        }
    )
    class RegisterFormContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            emailExists: PropTypes.bool.isRequired,

            validateEmailExist: PropTypes.func.isRequired,
            registerUser: PropTypes.func.isRequired,
        };
    }


    return RegisterFormContainer;
}