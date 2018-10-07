import React from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';


const Aside = () => (
    <aside>
        <ul className={styles.nav}>
            <li>
                <Link to='/dashboard/orders'>
                    Заказы
                </Link>
            </li>
            <li>
                <Link to='/dashboard/comments'>
                    Комментарии
                </Link>
            </li>
            <li>
                <a href='/dashboard/logout' onClick={logout}>
                    Выход
                </a>
            </li>
        </ul>
    </aside>
);

export default Aside;



const logout = () => {
    localStorage.clear();
};