import React, {Component} from 'react';


import styles from './styles.scss';
import ConclusionTabController from '../../../../controllers/ComponentControllers/Checkout/ConclusionTabController';


@ConclusionTabController()
export default class ConclusionTab extends Component {

    render() {

        return (
            <section className={styles.conclusion}>
                <h3>Спасибо за Ваш заказ</h3>
                <div className={styles.paymentTotal}>Итого к оплате:<span>{this.props.sumTotal}</span>грн.</div>
                <div className={styles.orderNumber}>Номер заказа:<span>#{this.props.orderNumber}</span></div>
                {
                    !this.props.selfDelivery &&
                    <div>Доставка оплачивается отдельно, при получении товара.</div>
                }

                {
                    !this.props.payment.toLowerCase().includes('в кассе магазина')
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