import React from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';


export default ({item}) => (
    <div className={styles.title}>
        <Link to={`/parts/${item.slug}`}>
            {item.title}
        </Link>
    </div>
)