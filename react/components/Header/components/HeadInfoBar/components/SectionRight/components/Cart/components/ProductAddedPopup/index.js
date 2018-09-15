import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


export default props => {
    props.clearTimer();
    props.setTimer();


    return (
        <div
            className={
                classNames(
                    styles.cartPopup,
                    props.headInfoFixed ? styles.fixed : null
                )
            }
            onMouseEnter={props.popupSetInvisible}
        >
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-times-circle-o'],
                        fontAwesome['fa-lg'],
                        styles.timesCircle
                    )
                }
                aria-hidden='true'
                onClick={props.onResetProductToCartAdded}
            />
            <div className={styles.productAdded}>
                <span>Товар</span>
                <span>"{props.productTitleToCartAdded}"</span>
                <span>добавлен в корзину</span>
            </div>
        </div>
    )
};
