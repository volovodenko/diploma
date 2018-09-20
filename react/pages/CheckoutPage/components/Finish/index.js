import React, {Component, Fragment} from 'react';


import styles from './styles.scss';
import Buttons from '../Buttons';
import {TYPE_PAYMENTS, DELIVERY_METHOD_LIST} from '../../../../config';


export default class Finish extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0); //обнулить прокрутку
    }

    render() {
        return (
            <section className={styles.finish}>
                <div className={styles.info}>
                    <ul className={styles.infoLeft}>
                        <li>Телефон:</li>
                        {
                            this.props.email.trim().length
                                ? <li>E-mail:</li>
                                : null
                        }

                        <li>Способ доставки:</li>
                        {
                            this.props.deliveryMethod.trim() === DELIVERY_METHOD_LIST[0].title
                                ?
                                <Fragment>
                                    <li>Перевозчик:</li>
                                    <li>Адрес доставки:</li>
                                    <li>Склад:</li>
                                </Fragment>
                                : null
                        }

                        <li>Получатель:</li>
                        <li>Способ оплаты:</li>
                        {
                            this.props.comment.trim().length
                                ? <li>Комментарий:</li>
                                : null
                        }

                    </ul>
                    <ul className={styles.infoRight}>
                        <li>{this.props.phone}&nbsp;</li>

                        {
                            this.props.email.trim().length
                                ? <li>{this.props.email}&nbsp;</li>
                                : null
                        }

                        <li>{this.props.deliveryMethod}</li>
                        {
                            this.props.deliveryMethod.trim() === DELIVERY_METHOD_LIST[0].title
                                ?
                                <Fragment>
                                    <li>{this.props.transporter}</li>
                                    <li>{this.props.deliveryAddress}</li>
                                    <li>{this.props.deliveryWarehouse}</li>
                                </Fragment>
                                : null
                        }

                        <li>{this.props.fio}</li>
                        <li>{TYPE_PAYMENTS.find(item => item.id === this.props.activePayment).type}</li>
                        {
                            this.props.comment.trim().length
                                ? <li>{this.props.comment}</li>
                                : null
                        }
                    </ul>
                </div>


                <Buttons
                    prevPage={this.props.prevPage}
                    nextPage={this.props.nextPage}
                    activePage={this.props.activePage}
                />

            </section>
        );
    }

}