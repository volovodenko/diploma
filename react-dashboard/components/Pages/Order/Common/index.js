import React from 'react';


import styles from './styles.scss';
import {getDate} from '../../../../helpers/getDate';
import productString from '../../../../helpers/productString';


const Common = props => (
    <div className={styles.common}>
        <div className={styles.top}>
            <div>Заказ #{props.orderId} от {getDate(props.dateCreate)}.</div>
            {
                props.checked && <div>Принят {getDate(props.dateUpdate)}</div>
            }
        </div>
        <div className={styles.bottom}>
            {props.numberProducts}
            {' '}
            {productString(props.numberProducts)}
            {' '}
            на <span>{props.sumTotal} грн.</span>
        </div>
    </div>
);

export default Common;