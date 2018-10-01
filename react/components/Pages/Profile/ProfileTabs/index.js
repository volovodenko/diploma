import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


const ProfileTabs = ({activePage}) => (
    <ul className={styles.tabs}>
        <li className={activePage === 1 ? styles.active : null}>
            <Link to='/profile/orders'>
                <i
                    className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-history']
                        )
                    }
                    aria-hidden='true'
                />
                <span>История заказов</span>
            </Link>
        </li>
        <li className={activePage === 2 ? styles.active : null}>
            <Link to='/profile/detail'>
                <i
                    className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-user'],
                        )
                    }
                    aria-hidden='true'
                />
                <span>Личные данные</span>
            </Link>
        </li>
        <li className={activePage === 3 ? styles.active : null}>
            <Link to='/profile/favorite'>
                <i
                    className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-star'],
                        )
                    }
                    aria-hidden='true'
                />
                <span>Избранное</span>
            </Link>
        </li>
    </ul>
);

export default ProfileTabs;