import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import Empty from './components/Empty/index';
import OrderList from './components/OrderList/index';


export default props => (
    <div className={
        classNames(
            styles.cartPopup,
            props.headInfoFixed ? styles.fixed : null
        )
    }>
        <div className={styles.popupTitle}>
            <p>В корзине {props.productCount} товаров</p>
            <p>на сумму {props.sumTotal} грн.</p>
        </div>
        {
            props.productCount === 0
                ? <Empty/>
                : <OrderList {...props}/>
        }

    </div>
)