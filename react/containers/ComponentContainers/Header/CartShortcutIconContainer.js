import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onResetProductToCartAdded,
} from '../../../store/reducers/cart/actions';

import {
    onSaveErrorMessage
} from '../../../store/reducers/errorMessage/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            cart: state.cart.cart,
            productTitleToCartAdded: state.cart.productTitleToCartAdded,
            productToCartAdded: state.cart.productToCartAdded,

            sumTotal: state.cart.sumTotal,
        };
    };

    @connect(
        mapStateToProps,
        {
            onResetProductToCartAdded,
            onSaveErrorMessage
        }
    )
    class CartShortcutIconContainer extends Component {


        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            cart: PropTypes.array.isRequired,
            productTitleToCartAdded: PropTypes.string.isRequired,
            productToCartAdded: PropTypes.bool.isRequired,

            sumTotal: PropTypes.string.isRequired,

            onResetProductToCartAdded: PropTypes.func.isRequired,
            onSaveErrorMessage: PropTypes.func.isRequired,
        };
    }


    return CartShortcutIconContainer;
}