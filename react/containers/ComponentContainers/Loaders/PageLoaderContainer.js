import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            carsIsLoading: state.car.carsIsLoading,
            carModelsCatalogIsLoading: state.car.carModelsCatalogIsLoading,
            carCategoriesCatalogIsLoading: state.car.carCategoriesCatalogIsLoading,
            productListIsLoading: state.product.productListIsLoading,
            productItemIsLoading: state.product.productItemIsLoading,

            orderDataIsSending: state.checkout.orderDataIsSending,

            aboutContentIsLoading: state.pageContent.aboutContentIsLoading,
            paymentContentIsLoading: state.pageContent.paymentContentIsLoading,

            ordersListIsLoading: state.user.ordersListIsLoading,
        };
    };

    @connect(
        mapStateToProps,
        null
    )
    class LoaderContainer extends Component {


        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            carsIsLoading: PropTypes.bool.isRequired,
            carModelsCatalogIsLoading: PropTypes.bool.isRequired,
            carCategoriesCatalogIsLoading: PropTypes.bool.isRequired,
            productListIsLoading: PropTypes.bool.isRequired,
            productItemIsLoading: PropTypes.bool.isRequired,
            orderDataIsSending: PropTypes.bool.isRequired,

            aboutContentIsLoading: PropTypes.bool.isRequired,
            paymentContentIsLoading: PropTypes.bool.isRequired,

            ordersListIsLoading: PropTypes.bool.isRequired,

        };
    }


    return LoaderContainer;
}