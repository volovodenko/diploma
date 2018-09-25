import React from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';


export default props => (
    <div className={styles.cartFooter}>
        <div className={styles.summary}>
            <div className={styles.clearCart} onClick={props.clearCart}>
                Очистить корзину
            </div>
            <div className={styles.total}>
                Итого: <span>{props.sumTotal}</span>
            </div>
        </div>
        <div className={styles.checkout}>
            <Link to='/checkout'>
                Оформить заказ
            </Link>
        </div>
    </div>
)