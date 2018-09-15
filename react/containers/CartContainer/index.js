import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onPutProductIntoCart, onResetProductToCartAdded, onChangeProductBuyQuantity,
    onDeleteProductItemFromCart, onClearCart
} from './store/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            cart: state.cart.cart,
            productTitleToCartAdded: state.cart.productTitleToCartAdded,
            productToCartAdded: state.cart.productToCartAdded,
        };
    };

    @connect(
        mapStateToProps,
        {
            onPutProductIntoCart, onResetProductToCartAdded, onChangeProductBuyQuantity,
            onDeleteProductItemFromCart, onClearCart
        },
        null,
        {pure: false}
    )
    class CartContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }

        static propTypes = {
            cart: PropTypes.array.isRequired,
            productTitleToCartAdded: PropTypes.string.isRequired,
            productToCartAdded: PropTypes.bool.isRequired,

            onPutProductIntoCart: PropTypes.func.isRequired,
            onResetProductToCartAdded: PropTypes.func.isRequired,
            onChangeProductBuyQuantity: PropTypes.func.isRequired,
            onDeleteProductItemFromCart: PropTypes.func.isRequired,
            onClearCart: PropTypes.func.isRequired,
        };
    }


    return CartContainer;


}