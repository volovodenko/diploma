import React from 'react';
import {Link} from 'react-router-dom';


import styles from '../../styles.scss';
import {getDate} from '../../../../../../../react/helpers/getDate';
import productString from '../../../../../../../react/helpers/productString';


const OrdersList = ({ordersList}) => (
    <ul className={styles.ordersList}>
        {
            ordersList.map(item => (
                <li key={item.order}>
                    <div className={styles.top}>
                        <Link to={`/dashboard/order/${item.order}`}>
                            Заказ #{item.order} от {getDate(item.date, false)}
                        </Link>
                    </div>
                    <div className={styles.bottom}>
                        {item.numberProducts}
                        {' '}
                        {productString(item.numberProducts)}
                        {' '}
                        на <span>{item.sumTotal} грн.</span>
                    </div>
                </li>
            ))
        }
    </ul>
);


export default OrdersList;