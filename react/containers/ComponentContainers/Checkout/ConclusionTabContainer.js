import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onClearCart
} from '../../../store/reducers/cart/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            sumTotal: state.cart.sumTotal,
            payment: state.user.payment,
            deliveryMethod: state.user.deliveryMethod,
            orderNumber: state.checkout.orderNumber
        };
    };

    @connect(
        mapStateToProps,
        {
            onClearCart,
        }
    )
    class ConclusionTabContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            sumTotal: PropTypes.string.isRequired,
            payment: PropTypes.string.isRequired,
            deliveryMethod: PropTypes.string.isRequired,
            orderNumber: PropTypes.number.isRequired,

            onClearCart: PropTypes.func.isRequired,
        };
    }


    return ConclusionTabContainer;
}