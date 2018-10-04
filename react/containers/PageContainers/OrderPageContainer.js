import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getOrderDetail
} from '../../store/reducers/user/actions';



export default () => Controller => {

    const mapStateToProps = state => {
        return {
            order: state.user.order,
            orderLoaded: state.user.orderLoaded,
            orderNumberWrong: state.user.orderNumberWrong,
            userLoggedIn: state.user.userLoggedIn
        };
    };

    @connect(
        mapStateToProps,
        {
            getOrderDetail
        }
    )
    class OrderPageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            order: PropTypes.object.isRequired,
            userLoggedIn: PropTypes.bool.isRequired,
            orderLoaded: PropTypes.bool.isRequired,
            orderNumberWrong: PropTypes.bool.isRequired,

            getOrderDetail: PropTypes.func.isRequired,
        };
    }


    return OrderPageContainer;
}