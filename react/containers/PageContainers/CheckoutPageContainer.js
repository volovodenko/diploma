import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getDeliveryMethods, getTransporters, getTransporterCities, getTransporterWarehouses,
} from '../../store/reducers/transporter/actions';
import {
    getPayments
} from '../../store/reducers/checkout/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            transporters: state.transporter.transporters,

            transporterCities: state.transporter.transporterCities,
            transporterCitiesIsLoading: state.transporter.transporterCitiesIsLoading,
            transporterCitiesLoaded: state.transporter.transporterCitiesLoaded,

            transporterWarehousesIsLoading:  state.transporter.transporterWarehousesIsLoading,

            paymentsDataLoaded: state.checkout.paymentsDataLoaded,
            deliveryMethodsLoaded: state.transporter.deliveryMethodsLoaded,
            transportersLoaded: state.transporter.transportersLoaded,
        };
    };

    @connect(
        mapStateToProps,
        {
            getDeliveryMethods, getTransporters, getTransporterCities, getTransporterWarehouses,
            getPayments
        }
    )
    class CheckoutPageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            transporterCities: PropTypes.array.isRequired,
            transporterCitiesIsLoading: PropTypes.bool.isRequired,
            transporterCitiesLoaded: PropTypes.bool.isRequired,

            transporterWarehousesIsLoading: PropTypes.bool.isRequired,

            paymentsDataLoaded: PropTypes.bool.isRequired,
            deliveryMethodsLoaded: PropTypes.bool.isRequired,

            getDeliveryMethods: PropTypes.func.isRequired,
            getTransporters: PropTypes.func.isRequired,
            getTransporterCities: PropTypes.func.isRequired,
            getTransporterWarehouses: PropTypes.func.isRequired,
            getPayments: PropTypes.func.isRequired,
        };
    }


    return CheckoutPageContainer;
}