const ProductListController = View => props => {
    const from = (props.activePage - 1) * props.itemsCountPerPage;
    const to = from + props.itemsCountPerPage;
    const productListSlice = props.productList.slice(from, to);


    console.log('ProductListController');
    return View({from, to, productListSlice, productList: props.productList});

};

export default ProductListController;
