import React from 'react';
import styles from './styles.scss';


const HeaderTabs = ({activePage}) => (
    <ul className={styles.tabs}>
        <li className={activePage >= 1 ? styles.active : null}>1. Контакты</li>
        <li className={activePage >= 2 ? styles.active : null}>2. Оплата</li>
        <li className={activePage >= 3 ? styles.active : null}>3. Доставка</li>
        <li className={activePage >= 4 ? styles.active : null}>4. Завершение</li>
    </ul>
);

export default HeaderTabs;