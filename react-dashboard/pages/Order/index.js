import React, {Component, Fragment} from 'react';


import styles from './styles.scss';
import PageLoader from '../../components/Loaders/PageLoader';
import OrderPageController from '../../controllers/PageControllers/OrderPageController';
import Common from '../../components/Pages/Order/Common';
import Info from '../../components/Pages/Order/Info';
import ProductList from '../../components/Pages/Order/ProductList';


@OrderPageController()
export default class OrderPage extends Component {

    render() {

        return (
            <div className={styles.orders}>
                <h1>Заказ #{this.props.orderId}</h1>

                {
                    (!this.props.orderId || this.props.orderNumberWrong)
                        ?
                        <div className={styles.error}>Некорректный номер заказа</div>
                        :
                        this.props.orderLoaded &&
                        <Fragment>
                            <Common
                                orderId={this.props.order.id}
                                dateCreate={this.props.order.created_at}
                                dateUpdate={this.props.order.updated_at}
                                numberProducts={this.props.order.numberProducts}
                                sumTotal={this.props.order.sum_total}
                                checked={this.props.order.checked}
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
                            {
                                this.props.order.checked ||
                                <div className={styles.button}>
                                    <button
                                        onClick={this.props.orderAccept}
                                    >
                                        Принять заказ
                                    </button>
                                </div>
                            }
                        </Fragment>
                }



                <PageLoader styles={styles}/>
            </div>
        );

    }

}