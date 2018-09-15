import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';
import Nav from '../helpers/Nav';
import ProductsList from '../helpers/ProductsList';
import Pagination from '../../../components/Pagination';
import {ITEMS_COUNT_PER_PAGE, PAGE_RANGE_DISPLAYED} from '../../../config';
import NotFoundPage from '../../NotFoundPage';


export default class SubCategoryList extends Component {

    constructor(props) {
        super(props);

        window.scrollTo(0, 0); //обнулить прокрутку

        this.state = {
            activePage: 1,
            totalItemsCount: 0,
            products: [],

            carModelCategoryNotFound: false
        };

    }

    static getDerivedStateFromProps(props, state) {
        if (!state.totalItemsCount && props.productListLoaded) {
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

            const parentId = carModelCategory.id;

            const subCategoriesList = carModelCategories
                .filter(item => item.parent_id === parentId);

            const subCategoriesIdArray = subCategoriesList
                .map(item => item.car_category_id);

            const carModelProducts = props.productList
                .find(item => item.carModel === props.carModel);

            if (!carModelProducts) {
                return null;
            }

            const products = carModelProducts.products
                .filter(item => subCategoriesIdArray.includes(item.car_category_id));

            return {
                totalItemsCount: products.length,
                products
            };
        }

        return null;
    }


    render() {
        if (this.state.carModelCategoryNotFound) {
            return <NotFoundPage/>
        }

        return (
            <Fragment>
                <Nav {...this.props} />

                <ul className={styles.subCategoriesList}>
                    {
                        this.props.carCategoriesCatalogLoaded
                            ? this.carSubCategoriesRender()
                            : null
                    }
                </ul>

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

    carSubCategoriesRender() {
        let parentId = null;

        const carModel = this.props.carCategoriesCatalogList
            .find(item => item.carModel === this.props.carModel);

        if (carModel) {
            const carModelCategory = carModel.categories
                .find(item => item.slug === this.props.carModelCategory);

            parentId = carModelCategory ? carModelCategory.id : null;

        }

        return parentId ?
            (
                carModel.categories
                    .filter(item => item.parent_id === parentId)
                    .map(item => (
                        <li key={item.id}>
                            <Link
                                to={
                                    `/catalog/${this.props.car}/${this.props.carModel}/`
                                    + `${this.props.carModelCategory}/${item.slug}`
                                }
                            >
                                <img src={`/storage/img/icons/car-categories/${item.slug}.png`}/>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ))
            )
            : null
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});

        if (window.pageYOffset > 300) {
            window.scrollTo(0, 125); //обнулить прокрутку
        }
    }

}