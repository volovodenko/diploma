import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getDeliveryMethods, getTransporters, getTransporterCities,
} from '../../../store/reducers/transporter/actions';
import {
    getPayments
} from '../../../store/reducers/checkout/actions';
import {
    onSavePaymentTab, onSaveUserPhone, saveUserData
} from '../../../store/reducers/user/actions';
import {
    onSaveErrorMessage
} from '../../../store/reducers/errorMessage/actions';



export default () => Controller => {

    const mapStateToProps = state => {
        return {
            userName: state.user.userName,
            phone: state.user.phone,
            payment: state.user.payment,
            paymentId: state.user.paymentId,

            deliveryMethodsLoaded: state.transporter.deliveryMethodsLoaded,
            transportersLoaded: state.transporter.transportersLoaded,
            transporterCities: state.transporter.transporterCities,
            transporterCitiesIsLoading: state.transporter.transporterCitiesIsLoading,

            paymentsDataLoaded: state.checkout.paymentsDataLoaded,
            paymentsData: state.checkout.paymentsData,
        };
    };

    @connect(
        mapStateToProps,
        {
            getDeliveryMethods, getTransporters, getTransporterCities,
            getPayments,
            onSavePaymentTab, onSaveUserPhone, saveUserData,
            onSaveErrorMessage
        }
    )
    class DetailTabContainer extends Component {


        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            userName: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            payment: PropTypes.string.isRequired,
            paymentId: PropTypes.number.isRequired,

            deliveryMethodsLoaded: PropTypes.bool.isRequired,
            paymentsDataLoaded: PropTypes.bool.isRequired,
            transporterCitiesIsLoading: PropTypes.bool.isRequired,
            transporterCities: PropTypes.array.isRequired,
            paymentsData: PropTypes.array.isRequired,

            getDeliveryMethods: PropTypes.func.isRequired,
            getTransporters: PropTypes.func.isRequired,
            getPayments: PropTypes.func.isRequired,
            getTransporterCities: PropTypes.func.isRequired,

            onSavePaymentTab: PropTypes.func.isRequired,
            onSaveUserPhone: PropTypes.func.isRequired,
            onSaveErrorMessage: PropTypes.func.isRequired,
            saveUserData: PropTypes.func.isRequired,
        };
    }


    return DetailTabContainer;
}