import React from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';


export default props => (
    <div className={styles.orderData}>
        <ul>
            {
                props.cart.map(item =>
                    <li key={item.id} className={styles.orderItem}>
                        <Link to={`/parts/${item.slug}`}>
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
            Итого: <span>{props.sumTotal} грн.</span>
            <div className={styles.button} onClick={props.popupSetInvisible}>
                <Link to='/cart'>Перейти в корзину</Link>
            </div>
            <div className={styles.button} onClick={props.popupSetInvisible}>
                <Link to='/checkout'>Оформить товар</Link>
            </div>
        </div>
    </div>
)