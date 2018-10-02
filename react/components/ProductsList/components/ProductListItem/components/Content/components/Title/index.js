import React from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';


export default (props) => (
    <div className={styles.title}>
        <Link
            onClick={props.linkClick}
            to={`/parts/${props.item.slug}`}
        >
            {props.item.title}
        </Link>
    </div>
)