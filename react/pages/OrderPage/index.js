import React, {Component, Fragment} from 'react';


import styles from './styles.scss';
import OrderPageController from '../../controllers/PageControllers/OrderPageController';
import PageLoader from '../../components/Loaders/PageLoader';
import Info from '../../components/Pages/Order/Info';
import Common from '../../components/Pages/Order/Common';
import ProductList from '../../components/Pages/Ckeckout/OrderTab/components/ProductList';


@OrderPageController()
export default class OrderPage extends Component {

    render() {

        return (
            <div className={styles.order}>
                <h1>Детали заказа</h1>

                {
                    (!this.props.orderId || this.props.orderNumberWrong)
                        ?
                        <div className={styles.error}>Некорректный номер заказа</div>
                        :
                        this.props.orderLoaded &&
                        <Fragment>
                            <Common
                                orderId={this.props.order.id}
                                date={this.props.order.created_at}
                                numberProducts={this.props.order.numberProducts}
                                sumTotal={this.props.order.sum_total}
                            />

                            <Info
                                order={this.props.order}
                                selfDelivery={this.props.order.delivery.toLowerCase().includes('самовывоз')}
                            />

                            <ProductList
                                products={this.props.order.products}
                                sumTotal={this.props.order.sum_total}
                                styles={styles}
                            />

                        </Fragment>

                }


                <PageLoader styles={styles}/>
            </div>
        )

    }
}