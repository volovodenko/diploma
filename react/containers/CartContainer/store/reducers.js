import initialState from './initialState';
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

            localStorage.setItem('cart', JSON.stringify(cart));

            return {
                ...stateStore,
                cart,
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


            localStorage.setItem('cart', JSON.stringify(cart));

            return {
                ...stateStore,
                cart
            };
        }

        /****************************************************************************/
        case t.DELETE_PRODUCT_ITEM_FROM_CART: {

            //если такого товара нет в корзине
            if (!stateStore.cart.some(item => item.id === action.payload.id)) {
                return stateStore;
            }

            const cart = stateStore.cart.filter(item => item.id !== action.payload.id);

            localStorage.setItem('cart', JSON.stringify(cart));

            return {
                ...stateStore,
                cart
            };
        }

        /****************************************************************************/
        case t.CLEAR_CART: {
            const cart = [];

            localStorage.setItem('cart', JSON.stringify(cart));

            return {
                ...stateStore,
                cart
            };
        }

        /****************************************************************************/

        default:
            return stateStore;
    }

}
