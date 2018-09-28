import React, {Fragment} from 'react';
import classNames from 'classnames';

import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


export default ({item}) => (
    <ul className={styles.infoRight}>
        <li className={styles.amount}>
            {
                (item.amount === 0) &&
                <Fragment>
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
                    />
                    <span>Нет в наличии</span>
                </Fragment>
            }

            {
                (item.amount <= 10 && item.amount > 0) &&
                <Fragment>
                    <i
                        className={
                            classNames(
                                fontAwesome.fa,
                                fontAwesome['fa-arrow-circle-o-down'],
                                fontAwesome['fa-lg'],
                                styles.arrowCircleDown
                            )
                        }
                        aria-hidden='true'
                    />
                    <span>Заканчивается</span>
                </Fragment>
            }

            {
                (item.amount > 10) &&
                <Fragment>
                    <i
                        className={
                            classNames(
                                fontAwesome.fa,
                                fontAwesome['fa-check-circle-o'],
                                fontAwesome['fa-lg'],
                                styles.checkCircle
                            )
                        }
                        aria-hidden='true'
                    />
                    <span>В наличии</span>
                </Fragment>
            }
        </li>

        <li
            className={
                classNames(
                    styles.price,
                    item.amount === 0 ? styles.disabled : null
                )
            }
        >
            {(item.price / 100).toFixed(2)} грн.
        </li>

    </ul>
)