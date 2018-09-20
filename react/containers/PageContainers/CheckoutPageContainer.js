import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getTransporterCities, getTransporterWarehouses,
} from '../../store/reducers/transporter/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            cart: state.cart.cart,

            transporterCities: state.transporter.transporterCities,
            transporterCitiesIsLoading: state.transporter.transporterCitiesIsLoading,
            transporterCitiesLoaded: state.transporter.transporterCitiesLoaded,

            transporterWarehousesIsLoading:  state.transporter.transporterWarehousesIsLoading,
        };
    };

    @connect(
        mapStateToProps,
        {
            getTransporterCities, getTransporterWarehouses,
        }
    )
    class CheckoutPageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            cart: PropTypes.array.isRequired,
            transporterCitiesIsLoading: PropTypes.bool.isRequired,
            transporterCitiesLoaded: PropTypes.bool.isRequired,

            getTransporterCities: PropTypes.func.isRequired,
            getTransporterWarehouses: PropTypes.func.isRequired,
        };
    }


    return CheckoutPageContainer;
}