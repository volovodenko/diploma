import React, {Component} from 'react';


import styles from './styles.scss';
import NavBar from '../../components/NavBar';
import ProductsList from '../../components/ProductsList';
import Pagination from '../../components/Pagination';
import CarSubCategoriesList from './components/CarSubCategoriesList'
import CarSubCategoriesPageController from '../../controllers/PageControllers/CarSubCategoriesPageController'


@CarSubCategoriesPageController()
export default class CarSubCategoriesPage extends Component {

    render() {

        return (
            <div className={styles.catalog}>

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
            </div>
        )

    }
}