import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import Buttons from '../Buttons/index';
import OrderTabController from '../../../../controllers/ComponentCotrollers/Checkout/OrderTabController';


@OrderTabController()
export default class OrderTab extends Component {

    render() {

        return (
            <section className={styles.order}>
                <div className={styles.sideLeft}>
                    {
                        !this.props.userLoggedIn &&
                        <div>
                            Вы можете
                            {' '}
                            <span
                                className={styles.login}
                                onClick={this.props.loginFormShow}
                            >
                                войти
                            </span>
                            {' '}
                            или заполнить данные
                        </div>
                    }
                    <label>
                        Телефон:
                        <input type='tel'
                               onChange={this.props.onChangePhone}
                               ref={this.props.phoneRef}
                               placeholder='+380-__-___-__-__'
                               value={this.props.phone}
                        />
                    </label>
                    <label>
                        ФИО:
                        <input type='text'
                               ref={this.props.fioRef}
                               value={this.props.fio}
                               onChange={this.props.onChangeFio}
                        />
                    </label>
                    <label>
                        Комментарий:
                        <textarea
                            ref={this.props.commentRef}
                            value={this.props.comment}
                            onChange={this.props.onChangeComment}
                        />
                    </label>
                    <div className={styles.button}>
                        <Buttons
                            nextPage={this.props.nextPage}
                            activePage={this.props.activePage}
                            inActive={!this.props.cart.length}
                        />
                    </div>
                </div>

                <div className={styles.sideRight}>
                    <h3>Корзина товаров</h3>
                    <ul>
                        {
                            this.props.cart.map(item =>
                                <li key={item.id} className={styles.orderItem}>
                                    <Link
                                        target='_blank'
                                        to={`/parts/${item.slug}`}
                                    >
                                        {item.title}
                                    </Link>
                                    <div className={styles.sum}>
                                        <ul>
                                            <li>Цена, грн</li>
                                            <li>{(item.price / 100).toFixed(2)}</li>
                                        </ul>
                                        <ul>
                                            <li>Кол-во</li>
                                            <li>{item.buyQuantity}</li>
                                        </ul>
                                        <ul>
                                            <li>Сумма</li>
                                            <li>{((item.price * item.buyQuantity) / 100).toFixed(2)}</li>
                                        </ul>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <div className={styles.total}>
                        Итого: <span>{this.props.sumTotal} грн.</span>
                    </div>
                    <div className={styles.edit}>
                        <Link to='/cart'>
                            <i className={
                                classNames(
                                    fontAwesome.fa,
                                    fontAwesome['fa-pencil-square-o'],
                                    fontAwesome['fa-lg']
                                )
                            }
                               aria-hidden='true'
                            />
                            Редактировать заказ
                        </Link>
                    </div>

                </div>
            </section>
        );
    }

}