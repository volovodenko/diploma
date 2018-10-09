import React, {Component} from 'react';


import styles from './styles.scss';
import OrdersPageController from '../../controllers/PageControllers/OrdersPageController';
import PageLoader from '../../components/Loaders/PageLoader';
import Sections from '../../components/Pages/Orders/Sections';


@OrdersPageController()
export default class OrdersPage extends Component {

    render() {

        return (
            <div className={styles.orders}>
                <h1>Заказы</h1>

                <Sections
                    newOrdersList={this.props.newOrdersList}
                    ordersList={this.props.ordersList}
                />


                <PageLoader styles={styles}/>
            </div>
        );

    }

}