import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getProductItem, onClearProductItem
} from '../../store/reducers/product/actions';

import {
    onPutProductIntoCart
} from '../../store/reducers/cart/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            productListLoaded: state.product.productListLoaded,
            productList: state.product.productList,

            productItemLoaded: state.product.productItemLoaded,
            productItem: state.product.productItem,
            productItemIsLoading: state.product.productItemIsLoading,
            productItemFetchFail: state.product.productItemFetchFail,

            navHistoryTitle: state.nav.navHistoryTitle,
            navHistorySlug: state.nav.navHistorySlug
        };
    };

    @connect(
        mapStateToProps,
        {
            getProductItem, onClearProductItem, onPutProductIntoCart
        }
    )
    class ProductPageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            productListLoaded: PropTypes.bool.isRequired,
            productList: PropTypes.array,

            productItemLoaded: PropTypes.bool.isRequired,
            productItem: PropTypes.object.isRequired,
            productItemIsLoading: PropTypes.bool.isRequired,
            productItemFetchFail: PropTypes.bool.isRequired,

            navHistoryTitle: PropTypes.object.isRequired,
            navHistorySlug: PropTypes.object.isRequired,

            getProductItem: PropTypes.func.isRequired,
            onClearProductItem: PropTypes.func.isRequired,
            onPutProductIntoCart: PropTypes.func.isRequired,
        };
    }


    return ProductPageContainer;
}