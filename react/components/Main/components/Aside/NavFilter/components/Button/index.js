import React from 'react';
import {Link} from 'react-router-dom';


import styles from '../../styles.scss';


export default props => (
    <li className={styles[props.buttonClassName]}>
        <div className={styles.select}>
            <Link
                to={props.buttonLink}
                onClick={props.getParts}
            >
                Перейти
            </Link>
        </div>
    </li>
)