import React, {Component} from 'react';


import CarSubCategoriesItemPageContainer from '../../containers/PageContainers/CarSubCategoriesItemPageContainer';
import NotFound from '../../pages/NotFoundPage/index';
import {ITEMS_COUNT_PER_PAGE, PAGE_RANGE_DISPLAYED} from '../../config/index';


export default () => View => {

    @CarSubCategoriesItemPageContainer()
    class CarSubCategoriesItemPageController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                activePage: 1,
                totalItemsCount: 0,
                products: [],

                carModelCategoryNotFound: false,
                carModelSubCategoryNotFound: false,

                currentCar: this.props.location.match.params.car,
                currentModel: this.props.location.match.params.model,
                currentCategory: this.props.location.match.params.category,
                currentSubCategory: this.props.location.match.params.subCategory,

                refresh: false,
            };

            this.saveHistorySlug(this.props);

            this.loadDataFromServer(this.props);

            window.scrollTo(0, 0); //обнулить прокрутку

        }


        static getDerivedStateFromProps(props, state) {

            if (
                state.currentCar !== props.location.match.params.car ||
                state.currentModel !== props.location.match.params.model ||
                state.currentCategory !== props.location.match.params.category ||
                state.currentSubCategory !== props.location.match.params.subCategory
            ) {
                return {
                    currentCar: props.location.match.params.car,
                    currentModel: props.location.match.params.model,
                    currentCategory: props.location.match.params.category,
                    currentSubCategory: props.location.match.params.subCategory,
                    refresh: true,
                    totalItemsCount: 0
                }
            }


            if (!state.totalItemsCount && props.productListLoaded) {
                const currentCarModel = props.location.match.params.model;
                const currentCarModelCategory = props.location.match.params.category;
                const currentCarModelSubCategory = props.location.match.params.subCategory;


                const carModelCategoriesData = props.carCategoriesCatalogList
                    .find(item => item.carModel === currentCarModel);

                if (!carModelCategoriesData) {
                    return null;
                }

                const carModelCategoriesList = carModelCategoriesData.categories;

                const carModelCategory = carModelCategoriesList
                    .find(item => item.slug === currentCarModelCategory);


                if (!carModelCategory) {
                    return {
                        carModelCategoryNotFound: true
                    };
                }


                const carModelSubCategory = carModelCategoriesList
                    .find(item => item.slug === currentCarModelSubCategory);

                if (!carModelSubCategory) {
                    return {
                        carModelSubCategoryNotFound: true
                    }
                }

                const subCategoryId = carModelSubCategory.car_category_id;


                const carModelProducts = props.productList
                    .find(item => item.carModel === currentCarModel);

                if (!carModelProducts) {
                    return null;
                }

                const products = carModelProducts.products
                    .filter(item => item.car_category_id === subCategoryId);

                const totalItemsCount = products.length;

                return {
                    totalItemsCount,
                    products
                }

            }

            return null;
        }


        shouldComponentUpdate(nextProps, nextState) {

            if (nextState.refresh) {

                this.saveHistorySlug(nextProps);

                this.loadDataFromServer(nextProps);

                this.setState({
                    refresh: false
                });

            }

            return true;
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
                this.props.carModelsCatalogFetchFail ||
                this.state.carModelCategoryNotFound ||
                this.state.carModelSubCategoryNotFound
            ) {
                return <NotFound/>;
            }

            return <View
                productList={this.state.products}
                car={this.state.currentCar}
                carModel={this.state.currentModel}
                carModelCategory={this.state.currentCategory}
                carModelSubCategory={this.state.currentSubCategory}

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


        loadDataFromServer(props) {
            const currentCar = props.location.match.params.car;
            const currentModel = props.location.match.params.model;

            if (!this.props.carsLoaded) {
                this.props.getCars();
            }


            //если список моделей для этой машины не загружен => загрузить список моделей для этой машины
            if (!this.props.carModelsCatalogList.some(item => item.car === currentCar)) {
                const data = {slug: currentCar};

                this.props.getCarModelsCatalog(data);
            }


            //если список категорий для этой модели не загружен => загрузить список категорий для этой модели
            if (!this.props.carCategoriesCatalogList.some(item => item.carModel === currentModel)) {
                const data = {slug: currentModel};

                this.props.getCarCategoriesCatalog(data);
            }


            //если список продуктов для этой модели не загружен => загрузить список продуктов для этой модели
            if (!this.props.productList.some(item => item.carModel === currentModel)) {

                this.props.getProductList(currentModel);
            }
        }

        saveHistorySlug(props){
            props.onSaveHistorySlug({
                car: props.location.match.params.car,
                carModel: props.location.match.params.model,
                carModelCategory: props.location.match.params.category,
                carModelSubCategory: props.location.match.params.subCategory,
            });
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CarSubCategoriesItemPageController;

}