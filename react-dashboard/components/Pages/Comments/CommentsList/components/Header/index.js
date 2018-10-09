import React from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';
import ucFirst from '../../../../../../../react/helpers/ucFirst';
import {getDate} from '../../../../../../../react/helpers/getDate';


const Header = ({item}) => (
    <div className={styles.header}>
        <div>
            <span className={styles.author}>{ucFirst(item.author)}</span>
            <span className={styles.date}>{getDate(item.created_at)}</span>
        </div>
        <div>
            <span className={styles.product}>Для продукта:</span>
            <Link to={`/parts/${item.product_slug}`} target='_blank'>
                {item.product_title}
            </Link>
        </div>
    </div>
);


export default Header;