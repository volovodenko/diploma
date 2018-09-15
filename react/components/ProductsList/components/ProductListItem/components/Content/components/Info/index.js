import React from 'react';


import styles from './styles.scss';
import InfoLeft from './components/InfoLeft';
import InfoRight from './components/InfoRight';


export default ({item}) => (

    <div className={styles.info}>
        <InfoLeft item={item}/>
        <InfoRight item={item}/>
    </div>

)