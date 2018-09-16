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
            productItemFetchFail: state.product.productItemFetchFail,
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
            productItemFetchFail: PropTypes.bool.isRequired,

            getProductItem: PropTypes.func.isRequired,
            onClearProductItem: PropTypes.func.isRequired,
            onPutProductIntoCart: PropTypes.func.isRequired,
        };
    }


    return ProductPageContainer;
}