import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


export default class Nav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            carTitle: this.props.carsLoaded ? this.getCarTitle() : null,
            modelTitle: this.props.carModelsCatalogLoaded ? this.getCarModelTitle() : null,
            categoryTitle: this.props.carCategoriesCatalogLoaded ? this.getCarModelCategoryTitle() : null,
            subCategoryTitle: this.props.carCategoriesCatalogLoaded ? this.getCarModelSubCategoryTitle() : null,
        };
    }


    static getDerivedStateFromProps(props) {

        if (props.carsLoaded && props.carModelsCatalogLoaded && props.carCategoriesCatalogLoaded) {

            let subCategoryTitle = null;
            let categoryTitle = null;
            let modelTitle = null;
            let carTitle = null;

            if (props.carModelSubCategory || props.carModelCategory) {

                const carCategoriesList = props.carCategoriesCatalogList
                    .find(item => item.carModel === props.carModel);

                if (carCategoriesList) {
                    const carCategory = carCategoriesList
                        .categories.find(item => item.slug === props.carModelCategory);

                    const carSubCategory = carCategoriesList
                        .categories.find(item => item.slug === props.carModelSubCategory);

                    categoryTitle = carCategory ? carCategory.title : null;
                    subCategoryTitle = carSubCategory ? carSubCategory.title : null;

                }

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

            if (props.car) {
                const car = props.carsList.find(item => item.slug === props.car);

                if (car){
                    carTitle = car.title;
                }
            }

            return {
                carTitle,
                modelTitle,
                categoryTitle,
                subCategoryTitle,
            };

        }


        return null;
    }


    render() {
        return (
            <Fragment>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link to='/catalog'>
                                Каталог автозапчастей
                            </Link>
                        </li>
                        <li>
                            <i
                                className={
                                    classNames(
                                        fontAwesome.fa,
                                        fontAwesome['fa-angle-double-right'],
                                    )
                                }
                                aria-hidden='true'
                            />
                        </li>
                        <li>{this.carTitleRender()}</li>

                        {this.modelTitleRender()}

                        {this.categoryTitleRender()}

                        {this.subCategoryTitleRender()}
                    </ul>
                </nav>
                <h1 className={styles.header}>{this.h1Render()}</h1>
            </Fragment>
        )

    }

    /***************************************************************************
     *
     **************************************************************************/

    h1Render() {
        if (this.state.subCategoryTitle) {
            return this.state.subCategoryTitle
        }

        if (this.state.categoryTitle) {
            return this.state.categoryTitle;
        }

        if (this.state.modelTitle) {
            return this.state.modelTitle;
        }

        if (this.state.carTitle) {
            return this.state.carTitle
        }

        return null;
    }

    carTitleRender() {
        return this.state.modelTitle
            ?
            <Link to={`/catalog/${this.props.car}`}>
                {this.state.carTitle}
            </Link>
            : this.state.carTitle;

    }

    modelTitleRender() {
        if (!this.state.modelTitle) {
            return null;
        }

        return (
            <Fragment>
                <li>
                    <i
                        className={
                            classNames(
                                fontAwesome.fa,
                                fontAwesome['fa-angle-double-right'],
                            )
                        }
                        aria-hidden='true'
                    />
                </li>
                <li>
                    {
                        this.state.categoryTitle
                            ?
                            <Link to={`/catalog/${this.props.car}/${this.props.carModel}`}>
                                {this.state.modelTitle}
                            </Link>
                            :
                            this.state.modelTitle
                    }
                </li>
            </Fragment>
        )
    }

    categoryTitleRender() {
        if (!this.state.categoryTitle) {
            return null;
        }

        return (
            <Fragment>
                <li>
                    <i
                        className={
                            classNames(
                                fontAwesome.fa,
                                fontAwesome['fa-angle-double-right'],
                            )
                        }
                        aria-hidden='true'
                    />
                </li>
                <li>
                    {
                        this.state.subCategoryTitle
                            ?
                            <Link
                                to={
                                    `/catalog/
                                    ${this.props.car}/
                                    ${this.props.carModel}/
                                    ${this.props.carModelCategory}`
                                }
                            >
                                {this.state.categoryTitle}
                            </Link>
                            : this.state.categoryTitle
                    }
                </li>
            </Fragment>
        )
    }

    subCategoryTitleRender() {
        return this.state.subCategoryTitle
            ?
            <Fragment>
                <li>
                    <i
                        className={
                            classNames(
                                fontAwesome.fa,
                                fontAwesome['fa-angle-double-right'],
                            )
                        }
                        aria-hidden='true'
                    />
                </li>
                <li>{this.state.subCategoryTitle}</li>
            </Fragment>
            : null;
    }


    getCarTitle() {
        const car = this.props.carsList.find(item => item.slug === this.props.car);

        return car ? car.title : null;
    }


    getCarModelTitle() {
        const carModelsList = this.props.carModelsCatalogList
            .find(item => item.car === this.props.car);

        if (!carModelsList) {
            return null;
        }

        const carModel = carModelsList.models.find(item => item.slug === this.props.carModel);


        return carModel ? carModel.title : null;
    }


    getCarModelCategoryTitle() {
        const carCategoriesList = this.props.carCategoriesCatalogList
            .find(item => item.carModel === this.props.carModel);

        if (!carCategoriesList) {
            return null;
        }

        const carCategory = carCategoriesList
            .categories.find(item => item.slug === this.props.carModelCategory);

        return carCategory ? carCategory.title : null;
    }


    getCarModelSubCategoryTitle() {
        const carCategoriesList = this.props.carCategoriesCatalogList
            .find(item => item.carModel === this.props.carModel);

        if (!carCategoriesList) {
            return null;
        }

        const carSubCategory = carCategoriesList
            .categories.find(item => item.slug === this.props.carModelSubCategory);


        return carSubCategory ? carSubCategory.title : null;
    }
}