import React from 'react';


import styles from './styles.scss';
import ProductListItem from './components/ProductListItem';
import ProductListController from '../../controllers/ComponentCotrollers/Main/ProductListController';


const ProductList  =  props => (
    <ul className={styles.productList}>
        {
            props.productList.length > props.itemsCountPerPage
                ?
                <div>
                    Показано позиций {props.from}-{props.to} из {props.productList.length}
                </div>
                : null
        }

        {props.productListSlice.map(item =>
            <ProductListItem
                item={item}
                key={item.id}
            />
        )}
    </ul>
);

export default ProductListController(ProductList);