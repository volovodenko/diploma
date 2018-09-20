import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onClearCart
} from '../../store/reducers/cart/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            cart: state.cart.cart,
        };
    };

    @connect(
        mapStateToProps,
        {
            onClearCart
        }
    )
    class CartPageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            cart: PropTypes.array.isRequired,

            onClearCart: PropTypes.func.isRequired,
        };
    }


    return CartPageContainer;
}