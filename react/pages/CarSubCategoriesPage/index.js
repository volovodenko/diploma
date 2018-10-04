import React, {Component} from 'react';


import styles from './styles.scss';
import NavBar from '../../components/NavBar';
import ProductsList from '../../components/ProductsList';
import Pagination from '../../components/Pagination';
import CarSubCategoriesList from '../../components/Pages/CarSubCategories/CarSubCategoriesList';
import PageLoader from '../../components/Loaders/PageLoader';
import CarSubCategoriesPageController from '../../controllers/PageControllers/CarSubCategoriesPageController';
import FakeList from '../../components/Pages/Home/FakeList';


@CarSubCategoriesPageController()
export default class CarSubCategoriesPage extends Component {

    render() {

        return (
            <div
                className={styles.catalog}
                ref={this.props.catalogRef}
            >

                <NavBar
                    car={this.props.car}
                    carModel={this.props.carModel}
                    carModelCategory={this.props.carModelCategory}
                />

                <ul className={styles.subCategoriesList}>
                    <CarSubCategoriesList
                        car={this.props.car}
                        carModel={this.props.carModel}
                        carModelCategory={this.props.carModelCategory}
                        carSubCategoriesList={this.props.carSubCategoriesList}
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