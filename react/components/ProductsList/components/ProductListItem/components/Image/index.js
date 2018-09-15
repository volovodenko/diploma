import React from 'react';


import styles from './styles.scss';


export default ({item}) => (
    <div className={styles.image}>
        <img
            src={`/storage/img/parts/${item.id}/${item.image}`}
            alt={item.title}
        />
    </div>
)