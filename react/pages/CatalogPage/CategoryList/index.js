import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';
import Nav from '../helpers/Nav';
import ProductsList from '../helpers/ProductsList';
import Pagination from '../../../components/Pagination';
import {ITEMS_COUNT_PER_PAGE, PAGE_RANGE_DISPLAYED} from '../../../config';


export default class CategoryList extends Component {

    constructor(props) {
        super(props);

        window.scrollTo(0, 0); //обнулить прокрутку

        this.state = {
            activePage: 1,
            totalItemsCount: 0,
            products: []
        };

    }

    static getDerivedStateFromProps(props, state){
        if (!state.totalItemsCount && props.productListLoaded) {
            const carModelProducts = props.productList
                .find(item => item.carModel === props.carModel);

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


    render() {
        return (
            <Fragment>
                <Nav {...this.props} />
                <ul className={styles.categoriesList}>
                    {
                        this.props.carCategoriesCatalogLoaded
                            ? this.carCategoriesRender()
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

    carCategoriesRender() {
        const carModel = this.props.carCategoriesCatalogList
            .find(item => item.carModel === this.props.carModel);

        return carModel ?
            (
                carModel.categories
                    .filter(item => item.parent_id === 0)
                    .map(item => (
                        <li key={item.id}>
                            <Link to={`/catalog/${this.props.car}/${this.props.carModel}/${item.slug}`}>
                                <img src={`/storage/img/icons/car-categories/${item.slug}.png`}/>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ))
            )
            : null;
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});

        if (window.pageYOffset > 300) {
            window.scrollTo(0, 125); //обнулить прокрутку
        }
    }
}