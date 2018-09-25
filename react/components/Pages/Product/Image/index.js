import React from 'react';


import styles from './styles.scss';


export default ({product}) => (
    <div className={styles.image}>
        <img
            src={`/storage/img/parts/${product.id}/${product.image}`}
            alt={product.title}
        />
    </div>
);