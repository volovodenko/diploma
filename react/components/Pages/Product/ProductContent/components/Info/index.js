import React from 'react';


import styles from './styles.scss';
import SelectQuantityDropDown from '../../../../../SelectQuantityDropDown/index';
import Characteristics from './components/Characteristics/index';
import BuyButton from './components/BuyButton/index';
import Price from './components/Price/index';


export default ({product, ...props}) => (

    <div className={styles.info}>

        <div className={styles.buy}>
            <Price product={product}/>
            <BuyButton product={product} {...props}/>
        </div>

        {props.dropDownVisible && <SelectQuantityDropDown {...props} styles={styles}/>}

        <Characteristics product={product}/>

    </div>

);