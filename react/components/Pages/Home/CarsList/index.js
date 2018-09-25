import React from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';


const carsList = ({carsList}) => (
    carsList.map(item => (
        <li key={item.id} className={styles.item}>
            <Link to={`/catalog/${item.slug}`}>
                <img src={`/storage/img/icons/cars/${item.slug}.png`}/>
                <span>{item.title}</span>
            </Link>
        </li>
    ))
);

export default carsList;