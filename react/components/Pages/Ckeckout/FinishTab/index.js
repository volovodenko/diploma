import React, {Component, Fragment} from 'react';


import styles from './styles.scss';
import Buttons from '../Buttons/index';
import PageLoader from '../../../Loaders/PageLoader';
import FinishTabController from '../../../../controllers/ComponentCotrollers/Checkout/FinishTabController';


@FinishTabController()
export default class FinishTab extends Component {

    render() {

        return (
            <section className={styles.finish}>
                <div className={styles.info}>
                    <ul className={styles.infoLeft}>
                        <li>Телефон:</li>
                        {
                            this.props.email.length &&
                            <li>E-mail:</li>
                        }

                        <li>Способ доставки:</li>
                        {
                            !this.props.selfDelivery &&
                            <Fragment>
                                <li>Перевозчик:</li>
                                <li>Адрес доставки:</li>
                                <li>Склад:</li>
                            </Fragment>
                        }

                        <li>Получатель:</li>
                        <li>Способ оплаты:</li>
                        {
                            this.props.comment.length &&
                            <li>Комментарий:</li>
                        }

                    </ul>
                    <ul className={styles.infoRight}>
                        <li>{this.props.phone}&nbsp;</li>

                        {
                            this.props.email.length &&
                            <li>{this.props.email}&nbsp;</li>
                        }

                        <li>{this.props.deliveryMethod}</li>
                        {
                            !this.props.selfDelivery &&
                            <Fragment>
                                <li>{this.props.transporter}</li>
                                <li>{this.props.deliveryAddress}</li>
                                <li>{this.props.deliveryWarehouse}</li>
                            </Fragment>
                        }

                        <li>{this.props.fio}</li>
                        <li>{this.props.payment}</li>
                        {
                            this.props.comment.length &&
                            <li>{this.props.comment}</li>
                        }
                    </ul>
                </div>


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