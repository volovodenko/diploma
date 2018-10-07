import React, {Component} from 'react';


import NavBarContainer from '../../../containers/ComponentContainers/Main/NavBarContainer';


export default () => View => {

    @NavBarContainer()
    class NavBarController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                carTitle: null,
                modelTitle: null,
                categoryTitle: null,
                subCategoryTitle: null,
            };

        }


        static getDerivedStateFromProps(props) {

            let carTitle = null;
            let modelTitle = null;
            let categoryTitle = null;
            let subCategoryTitle = null;


            if (props.car) {
                const car = props.carsList.find(item => item.slug === props.car);

                carTitle = car ? car.title : null;
            }


            if (props.carModel) {
                const carModelsList = props.carModelsCatalogList
                    .find(item => item.car === props.car);

                if (carModelsList) {
                    const carModel = carModelsList
                        .models.find(item => item.slug === props.carModel);

                    modelTitle = carModel ? carModel.title : null;
                }

            }


            if (props.carModelCategory || props.carModelSubCategory) {

                const carCategoriesList = props.carCategoriesCatalogList
                    .find(item => item.carModel === props.carModel);

                if (carCategoriesList) {
                    const carCategory = carCategoriesList
                        .categories.find(item => item.slug === props.carModelCategory);


                    categoryTitle = carCategory ? carCategory.title : null;

                    if (props.carModelSubCategory) {
                        const carSubCategory = carCategoriesList
                            .categories.find(item => item.slug === props.carModelSubCategory);

                        subCategoryTitle = carSubCategory ? carSubCategory.title : null;
                    }

                }

            }

            if (!props.productPage) {
                props.onSaveHistoryTitle({
                    carTitle,
                    carModelTitle: modelTitle,
                    carCategoryTitle: categoryTitle,
                    carSubCategoryTitle: subCategoryTitle,
                });
            }

            return {
                carTitle,
                modelTitle,
                categoryTitle,
                subCategoryTitle,
            };

        }


        render() {
            return <View
                carTitle={this.props.productPage ? this.props.carTitle : this.state.carTitle}
                modelTitle={this.props.productPage ? this.props.carModelTitle : this.state.modelTitle}
                categoryTitle={this.props.productPage ? this.props.carCategoryTitle : this.state.categoryTitle}
                subCategoryTitle={this.props.productPage ? this.props.carSubCategoryTitle : this.state.subCategoryTitle}

                car={this.props.car}
                carModel={this.props.carModel}
                carModelCategory={this.props.carModelCategory}
                carModelSubCategory={this.props.carModelSubCategory}

                productPage={this.props.productPage}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return NavBarController;

}