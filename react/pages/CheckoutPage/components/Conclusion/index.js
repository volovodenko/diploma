import React, {Component} from 'react';


import styles from './styles.scss';
import {DELIVERY_METHOD_LIST} from '../../../../config';


export default class Conclusion extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0); //обнулить прокрутку
    }

    render() {
        return (
            <section className={styles.conclusion}>
                <h3>Спасибо за Ваш заказ</h3>
                <div className={styles.paymentTotal}>Итого к оплате:<span>{this.props.sumTotal}</span>грн.</div>

                {
                    this.props.deliveryMethod.trim() === DELIVERY_METHOD_LIST[0].title
                        ? <div>Доставка оплачивается отдельно, при получении товара.</div>
                        : null
                }

                {
                    this.props.activePayment !== 3
                        ?
                        <div className={styles.manager}>
                            После обработки заказа нашими менеджерами, на Ваш мобильный телефон придет смс
                            с реквизитами для оплаты или счет-фактура на указанный e-mail, после чего можно
                            оплачивать заказ.
                        </div>
                        :
                        <div className={styles.manager}>
                            После прибытия товара в офис, на Ваш мобильный телефон придет смс
                            о готовности к выдаче товара.
                        </div>
                }


            </section>
        );
    }

}