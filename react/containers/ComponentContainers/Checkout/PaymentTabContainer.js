import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onSavePaymentTab
} from '../../../store/reducers/user/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            paymentId: state.user.paymentId,
            payment: state.user.payment,

            paymentsData: state.checkout.paymentsData,
            paymentsDataLoaded: state.checkout.paymentsDataLoaded,

            sumTotal: state.cart.sumTotal
        };
    };

    @connect(
        mapStateToProps,
        {
            onSavePaymentTab
        }
    )
    class PaymentTabContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            paymentId: PropTypes.number.isRequired,
            payment: PropTypes.string.isRequired,
            paymentsData: PropTypes.array.isRequired,
            paymentsDataLoaded: PropTypes.bool.isRequired,

            sumTotal: PropTypes.string.isRequired,

            onSavePaymentTab: PropTypes.func.isRequired,
        };
    }


    return PaymentTabContainer;
}