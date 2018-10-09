import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getOrderDetail, orderAccept
} from '../../store/reducers/orders/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            order: state.orders.order,
            orderNumberWrong: state.orders.orderNumberWrong,
            orderLoaded: state.orders.orderLoaded,
            orderAccepted: state.orders.orderAccepted
        };
    };

    @connect(
        mapStateToProps,
        {
            getOrderDetail, orderAccept
        }
    )
    class OrderPageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            order: PropTypes.object.isRequired,
            orderNumberWrong: PropTypes.bool.isRequired,
            orderLoaded: PropTypes.bool.isRequired,
            orderAccepted: PropTypes.bool.isRequired,

            getOrderDetail: PropTypes.func.isRequired,
            orderAccept: PropTypes.func.isRequired,
        };
    }


    return OrderPageContainer;
}