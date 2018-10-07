import React, {Component, Fragment} from 'react';


import styles from './styles.scss';
import Buttons from '../Buttons/index';
import PageLoader from '../../../Loaders/PageLoader';
import FinishTabController from '../../../../controllers/ComponentControllers/Checkout/FinishTabController';


@FinishTabController()
export default class FinishTab extends Component {

    render() {

        return (
            <section className={styles.finish}>
                    <ul className={styles.info}>
                        <li>
                            <span>Телефон:</span>
                            <span>{this.props.phone}</span>
                        </li>
                        {
                            !this.props.email.length ||
                            <li>
                                <span>E-mail:</span>
                                <span>{this.props.email}</span>
                            </li>
                        }

                        <li>
                            <span>Способ доставки:</span>
                            <span>{this.props.deliveryMethod}</span>
                        </li>

                        {
                            !this.props.selfDelivery &&
                            <Fragment>
                                <li>
                                    <span>Перевозчик:</span>
                                    <span>{this.props.transporter}</span>
                                </li>
                                <li>
                                    <span>Адрес доставки:</span>
                                    <span>{this.props.deliveryAddress}</span>
                                </li>
                                <li>
                                    <span>Склад:</span>
                                    <span>{this.props.deliveryWarehouse}</span>
                                </li>
                            </Fragment>
                        }

                        <li>
                            <span>Получатель:</span>
                            <span>{this.props.fio}</span>
                        </li>
                        <li>
                            <span>Способ оплаты:</span>
                            <span>{this.props.payment}</span>
                        </li>


                        {
                            !this.props.comment.length ||
                            <li>
                                <span>Комментарий:</span>
                                <span>{this.props.comment}</span>
                            </li>
                        }

                    </ul>


                <Buttons
                    prevPage={this.props.prevPage}
                    nextPage={this.props.nextPage}
                    activePage={this.props.activePage}
                />

                <PageLoader styles={styles}/>

            </section>
        );
    }

}