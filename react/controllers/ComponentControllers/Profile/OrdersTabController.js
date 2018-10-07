import React, {Component} from 'react';


import OrdersTabContainer from '../../../containers/ComponentContainers/Profile/OrdersTabContainer';


export default () => View => {

    @OrdersTabContainer()
    class OrdersTabController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.props.getOrdersList();
        }



        render() {
            return <View
                ordersList={this.props.ordersList}
                ordersListIsLoading={this.props.ordersListIsLoading}
            />
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return OrdersTabController;

}