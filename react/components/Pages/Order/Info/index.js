import React, {Fragment} from 'react';


import styles from './styles.scss';


const Info = props => (
    <ul className={styles.info}>
        <li>
            <span>ФИО:</span>
            <span>{props.order.fio}</span>
        </li>
        <li>
            <span>Телефон:</span>
            <span>{props.order.phone}</span>
        </li>
        <li>
            <span>Email:</span>
            <span>{props.order.email}</span>
        </li>
        <li>
            <span>Способ оплаты:</span>
            <span>{props.order.payment}</span>
        </li>
        <li>
            <span>Способ доставки:</span>
            <span>{props.order.delivery}</span>
        </li>

        {
            props.selfDelivery ||
            <Fragment>
                <li>
                    <span>Перевозчик:</span>
                    <span>{props.order.transporter}</span>
                </li>
                <li>
                    <span>Адрес доставки:</span>
                    <span>{props.order.delivery_city}</span>
                </li>
                <li>
                    <span>Склад:</span>
                    <span>{props.order.delivery_warehouse}</span>
                </li>
            </Fragment>
        }

        {
            props.order.comment &&
            <li>
                <span>Комментарий:</span>
                <span>{props.order.comment}</span>
            </li>
        }
    </ul>
);

export default Info;