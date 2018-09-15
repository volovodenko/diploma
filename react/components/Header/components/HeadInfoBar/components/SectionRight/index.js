import React from 'react';


import styles from './styles.scss';
import Phones from './components/Phones/index';
import Cart from './components/Cart/index';


export default ({headInfoFixed}) => (
    <div className={styles.sectionRight}>
        <Phones headInfoFixed={headInfoFixed}/>
        <Cart headInfoFixed={headInfoFixed}/>
    </div>
)