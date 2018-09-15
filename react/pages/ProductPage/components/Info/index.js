import React from 'react';


import styles from './styles.scss';
import SelectQuantityDropDown from '../../../../components/SelectQuantityDropDown';
import Characteristics from './components/Characteristics';
import BuyButton from './components/BuyButton';
import Price from './components/Price';


export default ({product, ...props}) => (

    <div className={styles.info}>

        <div className={styles.buy}>
            <Price product={product}/>
            <BuyButton product={product} {...props}/>
        </div>

        {props.dropDownVisible ? <SelectQuantityDropDown {...props} styles={styles}/> : null}

        <Characteristics product={product}/>

    </div>

);