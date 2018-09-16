import React, {Component} from 'react';

import CarCategoriesPageContainer from '../../containers/PageContainers/CarCategoriesPageContainer';
import NotFound from '../../pages/NotFoundPage/index';
import {ITEMS_COUNT_PER_PAGE, PAGE_RANGE_DISPLAYED} from '../../config/index';


export default () => View => {

    @CarCategoriesPageContainer()
    class CarCategoriesPageController extends Component {

        constructor(props) {
            super(props);

            this.car = this.props.location.match.params.car;
            this.carModel = this.props.location.match.params.model;

            this.loadDataFromServer();

            this.state = {
                activePage: 1,
                totalItemsCount: 0,
                products: [],
                carCategoriesList: []
            };

            window.scrollTo(0, 0); //обнулить прокрутку

        }


        static getDerivedStateFromProps(props, state) {

            if ((!state.totalItemsCount && props.productListLoaded) ||
                props.carCategoriesCatalogLoaded
            ) {
                const currentCarModel = props.location.match.params.model;

                const carModelProducts = props.productList
                    .find(item => item.carModel === currentCarModel);

                const carModelCategories = props.carCategoriesCatalogList
                    .find(item => item.carModel === currentCarModel);


                if (!carModelProducts || !carModelCategories) {
                    return null;
                }

                const carCategoriesList = carModelCategories.categories
                    .filter(item => item.parent_id === 0);


                return {
                    totalItemsCount: carModelProducts.products.length,
                    products: carModelProducts.products,
                    carCategoriesList
                };
            }

            return null;
        }


        componentWillUnmount() {
            if (this.props.carCategoriesCatalogFetchFail ||
                this.props.carModelsCatalogFetchFail
            ) {
                this.props.onClearFetchErrors();
            }
        }


        render() {
            if (this.props.carCategoriesCatalogFetchFail ||
                this.props.carModelsCatalogFetchFail) {
                return <NotFound/>;
            }

            return <View
                productList={this.state.products}
                carCategoriesList={this.state.carCategoriesList}
                car={this.car}
                carModel={this.carModel}

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

        loadDataFromServer() {

            if (!this.props.carsLoaded) {
                this.props.getCars();
            }


            //если список моделей для этой машины не загружен => загрузить список моделей для этой машины
            if (!this.props.carModelsCatalogList.some(item => item.car === this.car)) {
                const data = {slug: this.car};

                this.props.getCarModelsCatalog(data);
            }


            //если список категорий для этой модели не загружен => загрузить список категорий для этой модели
            if (!this.props.carCategoriesCatalogList.some(item => item.carModel === this.carModel)) {
                const data = {slug: this.carModel};

                this.props.getCarCategoriesCatalog(data);
            }


            //если список продуктов для этой модели не загружен => загрузить список продуктов для этой модели
            if (!this.props.productList.some(item => item.carModel === this.carModel)) {

                this.props.getProductList(this.carModel);
            }
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CarCategoriesPageController;

}