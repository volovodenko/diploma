import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';


export default ({headInfoFixed}) => (
    <div
        className={
            classNames(
                styles.logo,
                headInfoFixed ? styles.fixed : null
            )
        }
    >
        <Link to='/'>
            <img src='/storage/img/logo/logo.png'/>
        </Link>
    </div>
)