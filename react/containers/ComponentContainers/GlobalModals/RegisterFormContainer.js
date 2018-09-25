import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    validateNameExist, validateEmailExist, registerUser
} from '../../../store/reducers/user/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            emailExists: state.user.emailExists,
            nameExists: state.user.nameExists,
        };
    };

    @connect(
        mapStateToProps,
        {
            validateNameExist, validateEmailExist, registerUser
        }
    )
    class RegisterFormContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            emailExists: PropTypes.bool.isRequired,
            nameExists: PropTypes.bool.isRequired,

            validateNameExist: PropTypes.func.isRequired,
            validateEmailExist: PropTypes.func.isRequired,
            registerUser: PropTypes.func.isRequired,
        };
    }


    return RegisterFormContainer;
}