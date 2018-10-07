import React, {Component} from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import Buttons from '../Buttons';
import PaymentTabController from '../../../../controllers/ComponentControllers/Checkout/PaymentTabController';


@PaymentTabController()
export default class PaymentTab extends Component {

    render() {

        return (
            <section className={styles.payment}>
                <h3>Выберите способ оплаты</h3>

                <div className={styles.select}>

                    <ul className={styles.selectPayment}>
                        {
                            this.props.paymentsData.map(payment => (
                                <li
                                    key={payment.id}
                                    className={this.props.payment === payment.type ? styles.active : null}
                                    onClick={this.props.setPayment(payment)}
                                >
                                    <i
                                        className={
                                            classNames(
                                                fontAwesome.fa,
                                                this.props.payment === payment.type
                                                    ? fontAwesome['fa-dot-circle-o']
                                                    : fontAwesome['fa-circle-o'],
                                            )
                                        }
                                        aria-hidden='true'
                                    />
                                    <span>{payment.type}</span>
                                </li>
                            ))
                        }
                    </ul>

                    <div className={styles.selectInfo}>
                        <h4>{this.props.paymentHeader}</h4>

                        <div className={styles.total}>
                            Итого к оплате: <span>{this.props.sumTotal}</span> грн.
                        </div>
                        <ul>
                            {
                                this.props.paymentInfo.map(item => (
                                    <li key={item.id}>
                                        {item.info}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>

                <Buttons prevPage={this.props.prevPage} nextPage={this.props.nextPage}/>

            </section>
        );
    }

}