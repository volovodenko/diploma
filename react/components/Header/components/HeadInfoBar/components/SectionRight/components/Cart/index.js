import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import CartShortcutIconController from '../../../../../../../../controllers/CartShortcutIconController';
import ProductOrderPopup from './components/ProductOrderPopup/index';
import ProductAddedPopup from './components/ProductAddedPopup/index';


@CartShortcutIconController()
export default class Cart extends Component {

    render() {

        return (
            <div className={styles.cart}>
                <div
                    className={
                        classNames(
                            styles.cartIcon,
                            this.props.headInfoFixed ? styles.fixed : null,
                            this.props.popupVisible ? styles.active : null
                        )
                    }
                    onMouseEnter={this.props.popupSetVisible}
                    onMouseLeave={this.props.popupSetInvisible}
                >
                    <Link to='/cart'>
                        <i
                            className={
                                classNames(
                                    fontAwesome.fa,
                                    fontAwesome['fa-cart-arrow-down'],
                                    styles.cartArrowDown
                                )
                            }
                            aria-hidden='true'
                        >
                            {
                                this.props.productCount > 0
                                    ?
                                    <span>
                                        {this.props.productCount}
                                    </span>
                                    : null
                            }

                        </i>
                        <i
                            className={
                                classNames(
                                    fontAwesome.fa,
                                    fontAwesome['fa-caret-down'],
                                    styles.caretDown
                                )
                            }
                            aria-hidden='true'
                        />
                    </Link>

                    {
                        this.props.popupVisible
                            ? <ProductOrderPopup {...this.props}/>
                            : null
                    }
                    {
                        this.props.productToCartAdded
                            ? <ProductAddedPopup {...this.props}/>
                            : null
                    }

                </div>

                <div
                    className={
                        classNames(
                            styles.cartLinks,
                            this.props.headInfoFixed ? styles.fixed : null
                        )
                    }
                >
                    <Link to='/cart'>Перейти в корзину</Link>
                    <Link to='/checkout'>Оформить заказ</Link>
                </div>

            </div>
        );
    }
}