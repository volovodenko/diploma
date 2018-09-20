const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    productTitleToCartAdded: '',
    productToCartAdded: false,
};

export default initialState;