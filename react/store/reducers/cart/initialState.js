import calcSumTotal from '../../../helpers/calcSumTotal';

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    productTitleToCartAdded: '',
    productToCartAdded: false,

    sumTotal: localStorage.getItem('cart')
        ? calcSumTotal(JSON.parse(localStorage.getItem('cart')))
        : '0'
};

export default initialState;