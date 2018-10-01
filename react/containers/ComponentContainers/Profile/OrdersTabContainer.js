import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getOrdersList
} from '../../../store/reducers/user/actions';


export default () => Controller => {

    const mapStateToProps = (state) => {
        return {
            ordersList: state.user.ordersList,

            ordersListLoaded: state.user.ordersListLoaded,

        };
    };

    @connect(
        mapStateToProps,
        {
            getOrdersList
        }
    )
    class OrdersTabContainer extends Component {


        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            ordersList: PropTypes.array.isRequired,
            ordersListLoaded: PropTypes.bool.isRequired,

            getOrdersList: PropTypes.func.isRequired,
        };
    }


    return OrdersTabContainer;
}