import React, {Component, Fragment} from 'react';


import styles from './styles.scss';
import CartPageController from '../../controllers/PageControllers/CartPageController';
import CartItem from '../../components/Pages/Cart/CartItem';
import CartFooter from '../../components/Pages/Cart/CartFooter';


@CartPageController()
export default class CartPage extends Component {


    render() {

        return (
            <div className={styles.cart}>
                <h1>Корзина товаров</h1>
                {
                    this.props.cart.length
                        ?
                        <Fragment>
                            <ul className={styles.cartList}>
                                {this.props.cart.map(item =>
                                    <CartItem
                                        item={item}
                                        key={item.id}
                                    />
                                )}
                            </ul>
                            <CartFooter {...this.props}/>
                        </Fragment>
                        :
                        <div className={styles.cartEmpty}>Ваша корзина пуста</div>
                }

            </div>
        );
    }

}