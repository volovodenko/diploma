import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import SelectQuantity from '../../../../../../../SelectQuantity';



export default props => (
    <div className={styles.buy}>
        <span>Кол-во:</span>

        <SelectQuantity {...props} styles={styles}/>

        <button
            id={props.item.id}
            className={props.item.amount === 0 ? styles.disable : null}
            onClick={props.addToCart}
        >
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-shopping-cart'],
                        fontAwesome['fa-lg'],
                    )
                }
                aria-hidden='true'
            />
            <span>купить</span>
        </button>
    </div>
)