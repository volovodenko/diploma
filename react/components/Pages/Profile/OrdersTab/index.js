import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';
import OrdersTabController from '../../../../controllers/ComponentCotrollers/Profile/OrdersTabController';
import {getDate} from '../../../../helpers/getDate';


@OrdersTabController()
export default class OrdersTab extends Component {
    render() {
        return (
            <ul className={styles.orders}>
                {
                    !this.props.ordersList.length
                        ?
                        <li className={styles.null}>У Вас еще нет истории</li>
                        :
                        this.props.ordersList.map(item => (
                            <li key={item.order}>
                                <div className={styles.top}>
                                    <Link to={`/order/${item.order}`}>
                                        Заказ #{item.order} от {getDate(item.date, false)}
                                    </Link>
                                </div>
                                <div className={styles.bottom}>
                                    {item.numberProducts}
                                    {' '}
                                    {item.numberProducts === 1 ? 'товар ' : null}
                                    {
                                        item.numberProducts === 2 ||
                                        item.numberProducts === 3 ||
                                        item.numberProducts === 4
                                            ? 'товара '
                                            : null
                                    }
                                    {item.numberProducts >= 5 ? 'товаров ' : null}
                                    на <span>{item.sumTotal} грн.</span>
                                </div>
                            </li>
                        ))
                }
            </ul>
        );
    }
}