import React, {Component} from 'react';


import styles from './styles.scss';
import NavBar from '../../components/NavBar';
import ProductsList from '../../components/ProductsList';
import Pagination from '../../components/Pagination';
import CarCategoriesList from './components/CarCategoriesList';
import CarCategoriesPageController from '../../controllers/PageControllers/CarCategoriesPageController';


@CarCategoriesPageController()
export default class CarCategoriesPage extends Component {

    render() {

        return (
            <div className={styles.catalog}>

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