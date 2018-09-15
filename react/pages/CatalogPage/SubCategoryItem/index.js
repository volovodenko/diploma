import React, {Component, Fragment} from 'react';


import Nav from '../helpers/Nav';
import ProductsList from '../helpers/ProductsList';
import Pagination from '../../../components/Pagination';
import {ITEMS_COUNT_PER_PAGE, PAGE_RANGE_DISPLAYED} from '../../../config';
import NotFoundPage from '../../NotFoundPage';


export default class SubCategoryItem extends Component {

    constructor(props) {
        super(props);

        window.scrollTo(0, 0); //обнулить прокрутку

        this.state = {
            activePage: 1,
            totalItemsCount: 0,
            products: [],

            carModelCategoryNotFound: false,
            carModelSubCategoryNotFound: false,

        };
    }


    static getDerivedStateFromProps(props) {

        if (props.productListLoaded) {

            const carModel = props.carCategoriesCatalogList
                .find(item => item.carModel === props.carModel);

            if (!carModel) {
                return null;
            }

            const carModelCategories = carModel.categories;

            const carModelCategory = carModelCategories
                .find(item => item.slug === props.carModelCategory);

            if (!carModelCategory) {
                return {
                    carModelCategoryNotFound: true
                };
            }

            const carModelSubCategory = carModelCategories
                .find(item => item.slug === props.carModelSubCategory);

            if (!carModelSubCategory) {
                return {
                    carModelSubCategoryNotFound: true
                }
            }

            const subCategoryId = carModelSubCategory.car_category_id;


            const productList = props.productList
                .find(item => item.carModel === props.carModel);

            if (!productList) {
                return null;
            }

            const products = productList.products
                .filter(item => item.car_category_id === subCategoryId);


            return {
                totalItemsCount: products.length,
                products,

                refresh: false
            };
        }


        return null;
    }


    render() {
        if (this.state.carModelCategoryNotFound || this.state.carModelSubCategoryNotFound) {
            return <NotFoundPage/>
        }

        return (
            <Fragment>
                <Nav {...this.props} />

                <Pagination
                    totalItemsCount={this.state.totalItemsCount}
                    activePage={this.state.activePage}
                    itemsCountPerPage={ITEMS_COUNT_PER_PAGE}
                    pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                    onChange={::this.handlePageChange}
                />
                {
                    this.props.productListLoaded
                        ?
                        <ProductsList
                            productList={this.state.products}
                            activePage={this.state.activePage}
                            itemsCountPerPage={ITEMS_COUNT_PER_PAGE}
                            onPutProductIntoCart={this.props.onPutProductIntoCart}
                        />
                        : null
                }
                <Pagination
                    totalItemsCount={this.state.totalItemsCount}
                    activePage={this.state.activePage}
                    itemsCountPerPage={ITEMS_COUNT_PER_PAGE}
                    pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                    onChange={::this.handlePageChange}
                />
            </Fragment>
        )

    }

    /***************************************************************************
     *
     **************************************************************************/

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});

        if (window.pageYOffset > 300) {
            window.scrollTo(0, 125); //обнулить прокрутку
        }

    }


}