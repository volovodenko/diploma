import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import SelectQuantity from '../../../../../../components/SelectQuantity';


export default ({product, ...props}) => (
    <div className={styles.buyButton}>

        {
            product.amount > 0
                ? <SelectQuantity {...props} styles={styles} />
                : null
        }

        <button
            id={product.id}
            className={product.amount === 0 ? styles.disable : null}
            onClick={props.addToCart}
        >
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-shopping-cart'],
                        fontAwesome['fa-lg']
                    )
                }
                aria-hidden='true'
            />
            <span>купить</span>
        </button>
    </div>
)