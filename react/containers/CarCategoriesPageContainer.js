import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getCarCategoriesCatalog, onClearFetchErrors
} from '../store/reducers/car/actions';
import {
    getProductList
} from '../store/reducers/product/actions';



export default () => Controller => {

    const mapStateToProps = state => {
        return {
            carCategoriesCatalogList: state.car.carCategoriesCatalogList,
            carCategoriesCatalogLoaded: state.car.carCategoriesCatalogLoaded,
            carCategoriesCatalogFetchFail: state.car.carCategoriesCatalogFetchFail,

            productList: state.product.productList,
            productListLoaded: state.product.productListLoaded,
        };
    };

    @connect(
        mapStateToProps,
        {
            getCarCategoriesCatalog, onClearFetchErrors, getProductList
        }
    )
    class CarCategoriesPageContainer extends Component {


        render() {
            console.log('CarCategoriesPageContainer');

            return <Controller {...this.props}/>
        }


        static propTypes = {
            carCategoriesCatalogList: PropTypes.array.isRequired,
            carCategoriesCatalogLoaded: PropTypes.bool.isRequired,
            carCategoriesCatalogFetchFail: PropTypes.bool.isRequired,

            productList: PropTypes.array.isRequired,
            productListLoaded: PropTypes.bool.isRequired,

            getCarCategoriesCatalog: PropTypes.func.isRequired,
            onClearFetchErrors: PropTypes.func.isRequired,
            getProductList: PropTypes.func.isRequired,
        };
    }


    return CarCategoriesPageContainer;
}