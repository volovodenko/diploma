import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getTransporterCities, getTransporterWarehouses,
} from '../../../store/reducers/transporter/actions';
import {
    onSaveDeliveryTab
} from '../../../store/reducers/user/actions';
import {
    onSaveErrorMessage
} from '../../../store/reducers/errorMessage/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            deliveryMethods: state.transporter.deliveryMethods,
            deliveryMethodsLoaded: state.transporter.deliveryMethodsLoaded,

            transporters: state.transporter.transporters,
            transportersLoaded: state.transporter.transportersLoaded,

            transporterCities: state.transporter.transporterCities,
            transporterCitiesIsLoading: state.transporter.transporterCitiesIsLoading,
            transporterCitiesLoaded: state.transporter.transporterCitiesLoaded,

            transporterWarehousesIsLoading:  state.transporter.transporterWarehousesIsLoading,


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
            fio: state.user.fio,
        };
    };

    @connect(
        mapStateToProps,
        {
            getTransporterCities, getTransporterWarehouses,
            onSaveDeliveryTab,
            onSaveErrorMessage
        }
    )
    class DeliveryTabContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            deliveryMethods: PropTypes.array.isRequired,
            deliveryMethodsLoaded: PropTypes.bool.isRequired,

            transporters: PropTypes.array.isRequired,
            transportersLoaded: PropTypes.bool.isRequired,

            transporterCities: PropTypes.array.isRequired,
            transporterCitiesIsLoading: PropTypes.bool.isRequired,
            transporterCitiesLoaded: PropTypes.bool.isRequired,

            transporterWarehousesIsLoading: PropTypes.bool.isRequired,


            payment: PropTypes.string.isRequired,


            email: PropTypes.string.isRequired,
            deliveryMethodId: PropTypes.number.isRequired,
            deliveryMethod: PropTypes.string.isRequired,
            transporterId: PropTypes.number.isRequired,
            transporter: PropTypes.string.isRequired,
            deliveryAddress: PropTypes.string.isRequired,
            deliveryAddressRef: PropTypes.string.isRequired,
            deliveryWarehouse: PropTypes.string.isRequired,
            deliveryWarehouseRef: PropTypes.string.isRequired,
            fio: PropTypes.string.isRequired,

            getTransporterCities: PropTypes.func.isRequired,
            getTransporterWarehouses: PropTypes.func.isRequired,
            onSaveDeliveryTab: PropTypes.func.isRequired,
            onSaveErrorMessage: PropTypes.func.isRequired,

        };
    }


    return DeliveryTabContainer;
}