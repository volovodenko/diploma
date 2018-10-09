import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';


const ProductList = props => (
    <div
        className={
            classNames(
                styles.products,
                // props.styles ? props.styles.productList : null
            )
        }
    >
        <ul className={styles.list}>
            {
                props.products.map(item =>
                    <li key={item.id} className={styles.orderItem}>
                        <Link
                            target='_blank'
                            to={`/parts/${item.slug}`}
                        >
                            {item.title}
                        </Link>
                        <div className={styles.sum}>
                            <ul>
                                <li>Цена, грн</li>
                                <li>{(item.price / 100).toFixed(2)}</li>
                            </ul>
                            <ul>
                                <li>Кол-во</li>
                                <li>{item.buyQuantity}</li>
                            </ul>
                            <ul>
                                <li>Сумма</li>
                                <li>{((item.price * item.buyQuantity) / 100).toFixed(2)}</li>
                            </ul>
                        </div>
                    </li>
                )
            }
        </ul>
        <div className={styles.total}>
            Итого: <span>{props.sumTotal} грн.</span>
        </div>
    </div>
);

export default ProductList;