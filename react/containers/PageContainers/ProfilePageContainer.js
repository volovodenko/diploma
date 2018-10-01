import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {loginFormShow} from '../../store/reducers/loginForm/actions';



export default () => Controller => {

    const mapStateToProps = state => {
        return {
            userLoggedIn: state.user.userLoggedIn,

            userName: state.user.userName,
            email: state.user.email,
            phone: state.user.phone,
            fio: state.user.fio,
            payment: state.user.payment,
            deliveryMethod: state.user.deliveryMethod,
            transporter: state.user.transporter,
            deliveryAddress: state.user.deliveryAddress,
            deliveryWarehouse: state.user.deliveryWarehouse,
        };
    };

    @connect(
        mapStateToProps,
        {
            loginFormShow
        }
    )
    class ProfilePageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            userName: PropTypes.string.isRequired,
            userLoggedIn: PropTypes.bool.isRequired,

            loginFormShow: PropTypes.func.isRequired,
        };
    }


    return ProfilePageContainer;
}