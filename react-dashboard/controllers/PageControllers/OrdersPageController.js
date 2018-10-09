import React, {Component} from 'react';


import OrdersPageContainer from '../../containers/PageContainers/OrdersPageContainer';


export default () => View => {

    @OrdersPageContainer()
    class OrdersPageController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.props.getOrdersList();
        }




        render() {

            return <View
                newOrdersList={this.props.ordersList.filter(item => !item.checked)}
                ordersList={this.props.ordersList.filter(item => item.checked)}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/



        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return OrdersPageController;

}