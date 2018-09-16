import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            carModelsCatalogIsLoading: state.car.carModelsCatalogIsLoading,
            carCategoriesCatalogIsLoading: state.car.carCategoriesCatalogIsLoading,
            productListIsLoading: state.product.productListIsLoading,
            productItemIsLoading: state.product.productItemIsLoading,
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
            carModelsCatalogIsLoading: PropTypes.bool.isRequired,
            carCategoriesCatalogIsLoading: PropTypes.bool.isRequired,
            productListIsLoading: PropTypes.bool.isRequired,
            productItemIsLoading: PropTypes.bool.isRequired,
        };
    }


    return LoaderContainer;
}