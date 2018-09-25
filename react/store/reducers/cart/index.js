import initialState from './initialState';
import calcSumTotal from '../../../helpers/calcSumTotal';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.PUT_PRODUCT_INTO_CART: {

            let cart;

            //если такой товар уже есть в корзине
            if (stateStore.cart.some(item => item.id === action.payload.id)) {
                cart = stateStore.cart.map(item => {
                    //изменяем его кол-во
                    if (item.id === action.payload.id) {
                        item.buyQuantity += action.payload.buyQuantity
                    }

                    return item;
                })
            } else {
                cart = [...stateStore.cart, action.payload];
            }

            const sumTotal = calcSumTotal(cart);

            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('sumTotal', JSON.stringify(sumTotal));

            return {
                ...stateStore,
                cart,
                sumTotal,
                productTitleToCartAdded: action.payload.title,
                productToCartAdded: true
            };
        }

        /****************************************************************************/
        case t.RESET_POPUP_PRODUCT_TO_CART_ADDED:
            return {
                ...stateStore,
                productToCartAdded: false
            };


        /****************************************************************************/
        case t.CHANGE_PRODUCT_BUY_QUANTITY: {

            //если такого товара нет в корзине
            if (!stateStore.cart.some(item => item.id === action.payload.id)) {
                return stateStore;
            }

            //
            const cart = stateStore.cart.map(item => {
                //изменяем кол-во для выбранного товара
                if (item.id === action.payload.id) {
                    item.buyQuantity = action.payload.buyQuantity
                }

                return item;
            });

            const sumTotal = calcSumTotal(cart);
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('sumTotal', JSON.stringify(sumTotal));

            return {
                ...stateStore,
                cart,
                sumTotal
            };
        }

        /****************************************************************************/
        case t.DELETE_PRODUCT_ITEM_FROM_CART: {

            //если такого товара нет в корзине
            if (!stateStore.cart.some(item => item.id === action.payload.id)) {
                return stateStore;
            }

            const cart = stateStore.cart.filter(item => item.id !== action.payload.id);

            const sumTotal = calcSumTotal(cart);
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('sumTotal', JSON.stringify(sumTotal));

            return {
                ...stateStore,
                cart,
                sumTotal
            };
        }

        /****************************************************************************/
        case t.CLEAR_CART: {
            const cart = [];
            const sumTotal = '0';

            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('sumTotal', JSON.stringify(sumTotal));

            return {
                ...stateStore,
                cart,
                sumTotal
            };
        }

        /****************************************************************************/

        default:
            return stateStore;
    }

}
