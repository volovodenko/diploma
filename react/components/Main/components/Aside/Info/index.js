import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


export default () => (
    <ul className={styles.info}>
        <li>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-truck'],
                    )
                }
                aria-hidden='true'
            />
            <span>Доставка по Украине</span>
        </li>
        <li>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-credit-card'],
                    )
                }
                aria-hidden='true'
            />
            <span>Возможен безналичный расчет</span>
        </li>
        <li>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-certificate'],
                    )
                }
                aria-hidden='true'
            />
            <span>Гарантия на товар</span>
        </li>
        <li>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-check'],
                    )
                }
                aria-hidden='true'
            />
            <span>Актуальные цены и наличие товара</span>
        </li>
    </ul>
)