import React from 'react';


import styles from './styles.scss';


export default ({product}) => (
    <div className={styles.characteristic}>
        <h3>Характеристики</h3>

        <div className={styles.characteristicList}>

            <ul>
                <li>Производитель:</li>
                <li>Код товара:</li>
                <li>Каталожный номер:</li>
                <li>Заводской номер:</li>
            </ul>

            <ul>
                <li>{product.manufacturer}</li>
                <li>{product.code}</li>
                <li>
                    {
                        product.catalog_number.length
                            ? product.catalog_number
                            : '-'
                    }
                </li>
                <li>
                    {
                        product.factory_number.length
                            ? product.factory_number
                            : '-'
                    }
                </li>
            </ul>

        </div>

    </div>
)