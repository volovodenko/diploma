import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import ucFirst from '../../../../../../../helpers/ucFirst';


const LoginPopup = (props) => (
    <div
        className={
            classNames(
                styles.authPopup,
                props.styles ? props.styles.userPopup : styles.local
            )
        }
        ref={props.userPopupRef}
    >

        <div className={styles.name}>
            {ucFirst(props.userName)}
        </div>

        <div className={styles.history}>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-history']
                    )
                }
                aria-hidden='true'
            />
            <Link to='/profile/orders'>
                История заказов
            </Link>
        </div>

        <div className={styles.detail}>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-user'],
                    )
                }
                aria-hidden='true'
            />
            <Link to='/profile/detail'>
                Личные данные
            </Link>
        </div>

        <div className={styles.favorite}>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-star'],
                    )
                }
                aria-hidden='true'
            />
            <Link to='/profile/favorite'>
                Избранное
            </Link>
        </div>

        <div className={styles.logout}>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-sign-out'],
                        fontAwesome['fa-lg'],
                    )
                }
                aria-hidden='true'
            />
            <span onClick={props.logout}>
                Выход
            </span>
        </div>

    </div>
);

export default LoginPopup;