import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onChangeProductBuyQuantity, onDeleteProductItemFromCart
} from '../../../store/reducers/cart/actions';
import {
    addToFavorites
} from '../../../store/reducers/user/actions';



export default () => Controller => {

    @connect(
        null,
        {
            onChangeProductBuyQuantity, onDeleteProductItemFromCart,
            addToFavorites
        }
    )
    class CartItemContainer extends Component {


        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            onChangeProductBuyQuantity: PropTypes.func.isRequired,
            onDeleteProductItemFromCart: PropTypes.func.isRequired,
            addToFavorites: PropTypes.func.isRequired,
        };
    }


    return CartItemContainer;
}