import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';


import OrderPageContainer from '../../containers/PageContainers/OrderPageContainer';


export default () => View => {

    @OrderPageContainer()
    class OrderPageController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.orderId = +this.props.match.params.id;

            this.orderId && this.props.getOrderDetail(this.orderId);

            this.state = {
                redirect: false
            }

        }

        shouldComponentUpdate(nextProps) {
            if (nextProps.orderAccepted && !this.props.orderAccepted) {
                this.setState((state) => ({
                    redirect: !state.redirect
                }));
                return false;
            }
            return true;
        }


        render() {

            if (this.state.redirect) {
                return <Redirect to='/dashboard/orders'/>
            }

            return <View
                orderId={this.orderId}
                order={this.props.order}
                orderNumberWrong={this.props.orderNumberWrong}
                orderLoaded={this.props.orderLoaded}
                orderAccept={::this.orderAccept}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        orderAccept() {
            this.props.orderAccept(this.orderId);
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return OrderPageController;

}