import React from 'react';


import styles from './styles.scss';
import MenuBar from './components/MenuBar/index';
import HeadInfoBar from './components/HeadInfoBar/index';


export default () => (
    <header className={styles.header}>
        <MenuBar/>
        <HeadInfoBar/>
    </header>
)