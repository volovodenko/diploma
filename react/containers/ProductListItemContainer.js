import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onPutProductIntoCart
} from '../store/reducers/cart/actions';


export default () => Controller => {

    @connect(
        null,
        {
            onPutProductIntoCart
        }
    )
    class ProductListItemContainer extends Component {


        render() {
            console.log('ProductListItemContainer');

            return <Controller {...this.props}/>
        }


        static propTypes = {
            onPutProductIntoCart: PropTypes.func.isRequired,

        };
    }


    return ProductListItemContainer;
}