import React from 'react';

import styles from './styles.scss';


export default ({item}) => (
    <ul className={styles.infoLeft}>
        <li>{item.manufacturer}</li>
        <li>Код товара: {item.code}</li>
        <li>Кат. номер: {item.catalog_number}</li>
        <li>Зав. номер: {item.factory_number}</li>
    </ul>
)