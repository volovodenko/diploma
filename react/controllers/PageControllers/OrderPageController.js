import React, {Component} from 'react';


import OrderPageContainer from '../../containers/PageContainers/OrderPageContainer';
import PageMessage from '../../components/PageMessage';


export default () => View => {

    @OrderPageContainer()
    class OrderPageController extends Component {

        constructor(props) {
            super(props);

            this.orderId = +props.location.match.params.orderId;

            this.orderId && this.props.userLoggedIn && this.props.getOrderDetail(this.orderId);

        }


        shouldComponentUpdate(nextProps){
            //если на странице пользователь залогинился - получить данные с сервера
            if (nextProps.userLoggedIn && !this.props.userLoggedIn){
                this.orderId && this.props.getOrderDetail(this.orderId);
            }

            return true;
        }


        render() {
            if (!this.props.userLoggedIn) {
                return <PageMessage
                    message='Для доступа к заказам пожалуйста авторизируйтесь.'
                />;
            }

            return <View
                order={this.props.order}
                orderLoaded={this.props.orderLoaded}


                orderId={this.orderId}
                orderNumberWrong={this.props.orderNumberWrong}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return OrderPageController;

}