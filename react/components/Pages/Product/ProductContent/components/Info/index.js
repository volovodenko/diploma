import React from 'react';


import styles from './styles.scss';
import SelectQuantityDropDown from '../../../../../SelectQuantityDropDown';
import Characteristics from './components/Characteristics';
import BuyButton from './components/BuyButton';
import Price from './components/Price';
import FavoriteButton from './components/FavoriteButton';


export default ({product, ...props}) => (

    <div className={styles.info}>

        <div className={styles.buy}>
            <Price product={product}/>
            <BuyButton product={product} {...props}/>
        </div>

        {props.dropDownVisible && <SelectQuantityDropDown {...props} styles={styles}/>}

        <Characteristics product={product}/>

        <FavoriteButton addToFavorites={props.addToFavorites} product={product}/>
    </div>

);