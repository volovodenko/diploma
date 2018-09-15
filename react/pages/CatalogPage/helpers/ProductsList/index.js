import React from 'react';


import styles from './styles.scss';
import ListItem from './ListItem/index';


export default ({productList, activePage, itemsCountPerPage, onPutProductIntoCart}) => {
    const from = (activePage - 1) * itemsCountPerPage;
    const to = from + itemsCountPerPage;
    const productListSlice = productList.slice(from, to);

    return (
        <ul className={styles.productList}>
            {
                productList.length > itemsCountPerPage
                    ?
                    <div>
                        Показано позиций {from}-{to} из {productList.length}
                    </div>
                    : null
            }

            {productListSlice.map(item =>
                <ListItem
                    item={item}
                    key={item.id}
                    onPutProductIntoCart={onPutProductIntoCart}
                />
            )}
        </ul>
    )
};