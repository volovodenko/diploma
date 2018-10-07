import React, {Component} from 'react';


import CarSubCategoriesPageContainer from '../../containers/PageContainers/CarSubCategoriesPageContainer';
import NotFound from '../../pages/NotFoundPage/index';
import {ITEMS_COUNT_PER_PAGE, PAGE_RANGE_DISPLAYED} from '../../config/index';
import getFakeList from '../../helpers/getFakeList';


export default () => View => {

    @CarSubCategoriesPageContainer()
    class CarSubCategoriesPageController extends Component {

        constructor(props) {
            super(props);

            this.car = this.props.location.match.params.car;
            this.carModel = this.props.location.match.params.model;
            this.carModelCategory = this.props.location.match.params.category;

            this.props.onSaveHistorySlug({
                car: this.car,
                carModel: this.carModel,
                carModelCategory: this.carModelCategory
            });

            this.loadDataFromServer();

            this.state = {
                activePage: 1,
                totalItemsCount: 0,
                subCategoriesList: [],
                products: [],

                carModelCategoryNotFound: false,

                numInvisibleItems: 0
            };

            window.scrollTo(0, 0); //обнулить прокрутку

            this.catalogRef = React.createRef();
            this.updateDimensions = ::this.updateDimensions;
        }


        static getDerivedStateFromProps(props, state) {

            if (!state.totalItemsCount && props.productListLoaded) {
                const currentCarModel = props.location.match.params.model;
                const currentCarModelCategory = props.location.match.params.category;


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


                const parentId = carModelCategory.id;

                const subCategoriesList = carModelCategoriesList
                    .filter(item => item.parent_id === parentId);


                const subCategoriesIdArray = subCategoriesList
                    .map(item => item.car_category_id);

                const carModelProducts = props.productList
                    .find(item => item.carModel === currentCarModel);

                if (!carModelProducts) {
                    return null;
                }

                const products = carModelProducts.products
                    .filter(item => subCategoriesIdArray.includes(item.car_category_id));

                return {
                    totalItemsCount: products.length,
                    subCategoriesList,
                    products
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

            window.removeEventListener('resize', this.updateDimensions);
        }

        componentDidUpdate() {
            if (this.props.carCategoriesCatalogLoaded && !this.state.numInvisibleItems) {
                this.updateDimensions();
            }
        }

        componentDidMount() {
            window.addEventListener('resize', this.updateDimensions);
            this.updateDimensions();
        }


        render() {
            if (this.props.carCategoriesCatalogFetchFail ||
                this.props.carModelsCatalogFetchFail ||
                this.state.carModelCategoryNotFound
            ) {
                return <NotFound/>;
            }

            return <View
                productList={this.state.products}
                carSubCategoriesList={this.state.subCategoriesList}
                car={this.car}
                carModel={this.carModel}
                carModelCategory={this.carModelCategory}

                totalItemsCount={this.state.totalItemsCount}
                activePage={this.state.activePage}
                itemsCountPerPage={ITEMS_COUNT_PER_PAGE}
                pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                handlePageChange={::this.handlePageChange}

                catalogRef={this.catalogRef}
                fakeList={getFakeList(this.state.numInvisibleItems)}
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
            this.props.carsLoaded || this.props.getCars();

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


        updateDimensions() {
            if (!this.catalogRef.current){
                return;
            }

            const numItemsInRow = Math.floor(this.catalogRef.current.offsetWidth / 190);
            const numLastRowItems = this.state.subCategoriesList.length % numItemsInRow;
            const numInvisibleItems = numLastRowItems === 0 ||
            this.state.subCategoriesList.length <= numItemsInRow
                ? 0
                : numItemsInRow - numLastRowItems;


            if (numInvisibleItems !== this.state.numInvisibleItems) {
                this.setState({
                    numInvisibleItems
                });
            }
        }


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CarSubCategoriesPageController;

}