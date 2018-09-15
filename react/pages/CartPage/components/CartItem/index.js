import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import CartItemController from '../../../../controllers/CartItemController';


@CartItemController()
export default class CartItem extends Component {


    render() {

        return (
            <li className={styles.item}>
                <div>
                    <div className={styles.title}>
                        <Link to={`/parts/${this.props.item.slug}`}>
                            {this.props.item.title}
                        </Link>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <img
                                src={`/storage/img/parts/${this.props.item.id}/${this.props.item.image}`}
                                alt={this.props.item.title}
                            />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.price}>
                                Цена:
                                <span>{(this.props.item.price / 100).toFixed(2)} грн.</span>
                            </div>
                            <div className={styles.amount}>
                                Кол-во:
                                <input type='text'
                                       value={this.props.buyQuantity}
                                       onChange={this.props.onChangeQuantity}
                                       ref={this.props.inputQuantity}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.operations}>
                    <div className={styles.del} onClick={this.props.deleteItem}>
                        <i
                            className={
                                classNames(
                                    fontAwesome.fa,
                                    fontAwesome['fa-trash-o'],
                                    fontAwesome['fa-lg'],
                                )
                            }
                            aria-hidden='true'
                        />
                        удалить
                    </div>
                </div>
            </li>
        )

    }
}