import React from 'react';


import styles from './styles.scss';
import Title from './components/Title';
import Info from './components/Info';
import BuyButton from './components/BuyButton';


export default props => (
    <div className={styles.content}>
        <Title {...props}/>
        <Info item={props.item}/>
        <BuyButton {...props}/>
    </div>
)