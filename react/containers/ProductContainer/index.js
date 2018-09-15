import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getProductList, getProductItem, onClearProductItem
} from './store/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            productList: state.product.productList,
            productListIsLoading: state.product.productListIsLoading,
            productListLoaded: state.product.productListLoaded,

            productItem: state.product.productItem,
            productItemIsLoading: state.product.productItemIsLoading,
            productItemLoaded: state.product.productItemLoaded,
            productItemFetchFail: state.product.productItemFetchFail,
        };
    };

    @connect(
        mapStateToProps,
        {
            getProductList, getProductItem, onClearProductItem,
        },
        null,
        {pure: false}
    )
    class ProductContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }

        static propTypes = {
            productList: PropTypes.array,
            productListIsLoading: PropTypes.bool.isRequired,
            productListLoaded: PropTypes.bool.isRequired,

            productItem: PropTypes.object.isRequired,
            productItemIsLoading: PropTypes.bool.isRequired,
            productItemLoaded: PropTypes.bool.isRequired,
            productItemFetchFail: PropTypes.bool.isRequired,

            getProductList: PropTypes.func.isRequired,
            getProductItem: PropTypes.func.isRequired,
            onClearProductItem: PropTypes.func.isRequired,
        };
    }


    return ProductContainer;


}