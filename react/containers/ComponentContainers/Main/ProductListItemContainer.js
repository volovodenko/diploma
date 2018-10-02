import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onPutProductIntoCart
} from '../../../store/reducers/cart/actions';
import {
    onClearNavHistory
} from '../../../store/reducers/nav/actions';


export default () => Controller => {

    @connect(
        null,
        {
            onPutProductIntoCart,
            onClearNavHistory
        }
    )
    class ProductListItemContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            onPutProductIntoCart: PropTypes.func.isRequired,
            onClearNavHistory: PropTypes.func.isRequired,
        };
    }


    return ProductListItemContainer;
}