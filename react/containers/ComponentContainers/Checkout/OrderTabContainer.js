import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onSaveOrderTab
} from '../../../store/reducers/user/actions';
import {
    onSaveErrorMessage
} from '../../../store/reducers/errorMessage/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            phone: state.user.phone,
            fio: state.user.fio,
            userLoggedIn: state.user.userLoggedIn,
            comment: state.checkout.comment,

            cart: state.cart.cart,
            sumTotal: state.cart.sumTotal,
        };
    };

    @connect(
        mapStateToProps,
        {
            onSaveOrderTab,
            onSaveErrorMessage
        }
    )
    class OrderTabContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            phone: PropTypes.string.isRequired,
            fio: PropTypes.string.isRequired,
            userLoggedIn: PropTypes.bool.isRequired,
            comment: PropTypes.string.isRequired,

            cart: PropTypes.array.isRequired,
            sumTotal: PropTypes.string.isRequired,

            onSaveOrderTab: PropTypes.func.isRequired,
            onSaveErrorMessage: PropTypes.func.isRequired,
        };
    }


    return OrderTabContainer;
}