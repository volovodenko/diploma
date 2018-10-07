import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import Buttons from '../Buttons/index';
import ProductList from './components/ProductList';
import OrderTabController from '../../../../controllers/ComponentControllers/Checkout/OrderTabController';


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

                    <ProductList
                        products={this.props.cart}
                        sumTotal={this.props.sumTotal}
                    />

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