import React, {Component} from 'react';


import NavBarContainer from '../containers/NavBarContainer';


export default () => View => {

    @NavBarContainer()
    class NavBarController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                carTitle: null,
                modelTitle: null,
                categoryTitle: null,
                subCategoryTitle: null
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

            return {
                carTitle,
                modelTitle,
                categoryTitle,
                subCategoryTitle,
            };

        }


        render() {
            console.log('NavBarController');
            return <View
                carTitle={this.state.carTitle}
                modelTitle={this.state.modelTitle}
                categoryTitle={this.state.categoryTitle}
                subCategoryTitle={this.state.subCategoryTitle}

                car={this.props.car}
                carModel={this.carModel}
                carModelCategory={this.props.carModelCategory}

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