import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getOrdersList
} from '../../store/reducers/orders/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            ordersList: state.orders.ordersList,

        };
    };

    @connect(
        mapStateToProps,
        {
            getOrdersList
        }
    )
    class OrdersPageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            ordersList: PropTypes.array.isRequired,


            getOrdersList: PropTypes.func.isRequired,
        };
    }


    return OrdersPageContainer;
}