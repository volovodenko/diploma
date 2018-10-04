import React, {Component} from 'react';


import styles from './styles.scss';
import NavBar from '../../components/NavBar';
import ProductsList from '../../components/ProductsList';
import Pagination from '../../components/Pagination';
import CarCategoriesList from '../../components/Pages/CarCategories/CarCategoriesList';
import PageLoader from '../../components/Loaders/PageLoader';
import CarCategoriesPageController from '../../controllers/PageControllers/CarCategoriesPageController';
import FakeList from '../../components/Pages/Home/FakeList';


@CarCategoriesPageController()
export default class CarCategoriesPage extends Component {

    render() {

        return (
            <div
                className={styles.catalog}
                ref={this.props.catalogRef}
            >

                <NavBar
                    car={this.props.car}
                    carModel={this.props.carModel}
                />

                <ul className={styles.categoriesList}>
                    <CarCategoriesList
                        car={this.props.car}
                        carModel={this.props.carModel}
                        carCategoriesList={this.props.carCategoriesList}
                    />
                    <FakeList fakeList={this.props.fakeList}/>
                </ul>

                <Pagination
                    totalItemsCount={this.props.totalItemsCount}
                    activePage={this.props.activePage}
                    itemsCountPerPage={this.props.itemsCountPerPage}
                    pageRangeDisplayed={this.props.pageRangeDisplayed}
                    onChange={this.props.handlePageChange}
                />

                <ProductsList
                    productList={this.props.productList}
                    activePage={this.props.activePage}
                    itemsCountPerPage={this.props.itemsCountPerPage}
                />

                <Pagination
                    totalItemsCount={this.props.totalItemsCount}
                    activePage={this.props.activePage}
                    itemsCountPerPage={this.props.itemsCountPerPage}
                    pageRangeDisplayed={this.props.pageRangeDisplayed}
                    onChange={this.props.handlePageChange}
                />

                <PageLoader styles={styles}/>
            </div>
        )

    }
}