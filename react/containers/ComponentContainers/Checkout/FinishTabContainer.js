import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    sendFinishTabData
} from '../../../store/reducers/checkout/actions';
import {
    onRefreshUserDetail
} from '../../../store/reducers/user/actions';



export default () => Controller => {

    const mapStateToProps = state => {
        return {
            cart: state.cart.cart,
            sumTotal: state.cart.sumTotal,

            phone: state.user.phone,
            fio: state.user.fio,
            comment: state.checkout.comment,

            paymentId: state.user.paymentId,
            payment: state.user.payment,
            email: state.user.email,
            deliveryMethodId: state.user.deliveryMethodId,
            deliveryMethod: state.user.deliveryMethod,
            transporterId: state.user.transporterId,
            transporter: state.user.transporter,
            deliveryAddress: state.user.deliveryAddress,
            deliveryAddressRef: state.user.deliveryAddressRef,
            deliveryWarehouse: state.user.deliveryWarehouse,
            deliveryWarehouseRef: state.user.deliveryWarehouseRef,

            paymentsData: state.checkout.paymentsData,

            orderDataSent: state.checkout.orderDataSent,
        };
    };

    @connect(
        mapStateToProps,
        {
            sendFinishTabData,
            onRefreshUserDetail
        }
    )
    class FinishTabContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            cart: PropTypes.array.isRequired,
            sumTotal: PropTypes.string.isRequired,

            phone: PropTypes.string.isRequired,
            fio: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,

            paymentId: PropTypes.number.isRequired,
            payment: PropTypes.string.isRequired,
            paymentsData: PropTypes.array.isRequired,

            email: PropTypes.string.isRequired,
            deliveryMethodId: PropTypes.number.isRequired,
            deliveryMethod: PropTypes.string.isRequired,
            transporterId: PropTypes.number.isRequired,
            transporter: PropTypes.string.isRequired,
            deliveryAddress: PropTypes.string.isRequired,
            deliveryAddressRef: PropTypes.string.isRequired,
            deliveryWarehouse: PropTypes.string.isRequired,
            deliveryWarehouseRef: PropTypes.string.isRequired,

            orderDataSent: PropTypes.bool.isRequired,

            sendFinishTabData: PropTypes.func.isRequired,
            onRefreshUserDetail: PropTypes.func.isRequired,
        };
    }


    return FinishTabContainer;
}