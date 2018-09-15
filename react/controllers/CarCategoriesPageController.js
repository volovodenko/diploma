import React, {Component} from 'react';

import CarCategoriesPageContainer from '../containers/CarCategoriesPageContainer';
import NotFound from '../pages/NotFoundPage';
import {ITEMS_COUNT_PER_PAGE, PAGE_RANGE_DISPLAYED} from '../config';


export default () => View => {

    @CarCategoriesPageContainer()
    class CarCategoriesPageController extends Component {

        constructor(props) {
            super(props);

            this.car = this.props.location.match.params.car;
            this.carModel = this.props.location.match.params.model;

            //если список категорий для этой модели не загружен => загрузить список категорий для этой модели
            if (!this.props.carCategoriesCatalogList.some(item => item.carModel === this.carModel)) {
                const data = {slug: this.carModel};

                this.props.getCarCategoriesCatalog(data);
            }


            //если список продуктов для этой модели не загружен => загрузить список продуктов для этой модели
            if (!this.props.productList.some(item => item.carModel === this.carModel)) {

                this.props.getProductList(this.carModel);
            }

            this.state = {
                activePage: 1,
                totalItemsCount: 0,
                products: []
            };

            window.scrollTo(0, 0); //обнулить прокрутку

        }


        static getDerivedStateFromProps(props, state){

            if (!state.totalItemsCount && props.productListLoaded) {
                const carModel = props.location.match.params.model;

                const carModelProducts = props.productList
                    .find(item => item.carModel === carModel);

                if (!carModelProducts){
                    return null;
                }



                return {
                    totalItemsCount: carModelProducts.products.length,
                    products: carModelProducts.products
                };
            }

            return null;
        }


        componentWillUnmount() {
            if (this.props.carCategoriesCatalogFetchFail) {
                this.props.onClearFetchErrors();
            }
        }


        render() {
            console.log('CarCategoriesPageController');

            if (this.props.carCategoriesCatalogFetchFail) {
                return <NotFound/>;
            }

            return <View
                carCategoriesCatalogLoaded={this.props.carCategoriesCatalogLoaded}
                carCategoriesCatalogList={this.props.carCategoriesCatalogList}
                productListLoaded={this.props.productListLoaded}

                car={this.car}
                carModel={this.carModel}
                productList={this.state.products}
                totalItemsCount={this.state.totalItemsCount}
                activePage={this.state.activePage}
                itemsCountPerPage={ITEMS_COUNT_PER_PAGE}
                pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                handlePageChange={::this.handlePageChange}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        handlePageChange(pageNumber) {
            this.setState({activePage: pageNumber});

            if (window.pageYOffset > 300) {
                window.scrollTo(0, 125); //обнулить прокрутку
            }
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CarCategoriesPageController;

}