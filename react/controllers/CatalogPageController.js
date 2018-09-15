import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import CarContainer from '../containers/CarContainer';
import NotFound from '../pages/NotFoundPage';
import SubCategoryItem from '../pages/CatalogPage/SubCategoryItem';
import SubCategoryList from '../pages/CatalogPage/SubCategoryList';
import CategoryList from '../pages/CatalogPage/CategoryList';
import ModelsList from '../pages/CatalogPage/ModelsList';


export default () => View => {

    @CarContainer()
    class CatalogPageController extends Component {

        constructor(props) {
            super(props);

            if (this.props.location.match.params.car) {
                //начальная загрузка списка моделей
                this.getCarModels(this.props);
            }

            if (this.props.location.match.params.model) {
                //начальная загрузка списка категорий для этой модели
                this.getCarModelCategories(this.props);
                //начальная загрузка списка продуктов для этой модели
                this.getCarModelProducts(this.props);
            }


            window.scrollTo(0, 0); //обнулить прокрутку

            this.state = {
                currentCar: this.props.location.match.params.car,
                currentModel: this.props.location.match.params.model,
                currentCategory: this.props.location.match.params.category,
                currentSubCategory: this.props.location.match.params.subCategory,

                refresh: false,
            };
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

                    refresh: true
                };
            }

            return null;
        }


        shouldComponentUpdate(nextProps, nextState) {

            if (nextState.refresh) {

                if (nextState.currentCar) {
                    //загрузка списка моделей при обновлении данных
                    this.getCarModels(nextProps);
                }

                if (nextState.currentModel) {
                    //загрузка списка моделей при обновлении данных
                    this.getCarModelCategories(nextProps);
                    //загрузка списка продуктов при обновлении данных
                    this.getCarModelProducts(nextProps);
                }

                this.setState({
                    refresh: false
                });

            }

            return true;
        }


        render() {
            return (
                <View>
                    {this.catalogPageSelect()}
                </View>
            )

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/


        catalogPageSelect() {
            if (
                this.props.carModelsCatalogFetchFail ||
                this.props.carCategoriesCatalogFetchFail
            ) {
                return <NotFound/>;
            }

            if (this.state.currentSubCategory) {
                return <SubCategoryItem
                    car={this.state.currentCar}
                    carModel={this.state.currentModel}
                    carModelCategory={this.state.currentCategory}
                    carModelSubCategory={this.state.currentSubCategory}
                    {...this.props}
                />
            }

            if (this.state.currentCategory) {
                return <SubCategoryList
                    car={this.state.currentCar}
                    carModel={this.state.currentModel}
                    carModelCategory={this.state.currentCategory}
                    {...this.props}
                />
            }

            if (this.state.currentModel) {
                return <CategoryList
                    car={this.state.currentCar}
                    carModel={this.state.currentModel}
                    {...this.props}
                />
            }

            if (this.state.currentCar) {
                return <ModelsList car={this.state.currentCar} {...this.props}/>
            }

            return <Redirect to='/'/>;
        }


        getCarModels(props) {
            const car = props.location.match.params.car;

            //если список моделей для этой машины не загружен => загрузить список моделей для этой машины
            if (!props.carModelsCatalogList.some(item => item.car === car)) {
                const data = {slug: car};

                props.getCarModelsCatalog(data);
            }

            if (props.carModelsCatalogFetchFail || props.carCategoriesCatalogFetchFail) {
                props.onClearFetchErrors();
            }

        }


        getCarModelCategories(props) {
            const carModel = props.location.match.params.model;

            //если список категорий для этой модели не загружен => загрузить список категорий для этой модели
            if (!props.carCategoriesCatalogList.some(item => item.carModel === carModel)) {
                const data = {slug: carModel};

                props.getCarCategoriesCatalog(data);
            }
        }


        getCarModelProducts(props) {
            const carModelSlug = props.location.match.params.model;

            //если список продуктов для этой модели не загружен => загрузить список продуктов для этой модели
            if (!props.productList.some(item => item.carModel === carModelSlug)) {

                props.getProductList(carModelSlug);
            }
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CatalogPageController;

}