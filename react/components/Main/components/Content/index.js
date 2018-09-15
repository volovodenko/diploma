import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';


import styles from './styles.scss';
import HomePage from '../../../../pages/HomePage';
import CarModelsPage from '../../../../pages/CarModelsPage';
import CarCategoriesPage from '../../../../pages/CarCategoriesPage';

import CartPage from '../../../../pages/CartPage';
import ProductPage from '../../../../pages/ProductPage';
import NotFoundPage from '../../../../pages/NotFoundPage';
import Loader from '../../../Loader';


export default class Content extends Component {

    render() {
        return (
            <section className={styles.content}>
                <Switch>
                    <Route exact path='/' render={() => <HomePage />}/>
                    <Route exact path='/catalog'
                           render={this.redirectTo('/')}
                    />
                    <Route exact path='/catalog/:car'
                           render={location => <CarModelsPage location={location}/>}
                    />
                    <Route exact path='/catalog/:car/:model'
                           render={location => <CarCategoriesPage location={location}/>}
                    />
                    {/*<Route exact path='/catalog/:car?/:model?/:category?/:subCategory?'*/}
                           {/*render={location => <CatalogPage location={location} {...this.props}/>}*/}
                    {/*/>*/}
                    <Route exact path='/parts/:partSlug'
                           render={location => <ProductPage location={location}/>}
                    />
                    <Route exact path='/cart' render={() => <CartPage />}/>
                    <Route component={NotFoundPage}/>
                </Switch>

                {
                    this.props.carModelsCatalogIsLoading ||
                    this.props.carCategoriesCatalogIsLoading ||
                    this.props.productListIsLoading ||
                    this.props.productItemIsLoading
                        ? <Loader/>
                        : null
                }
            </section>
        );
    }

    /***************************************************************************
     *
     **************************************************************************/


    redirectTo = to => () => <Redirect to={to}/>;

}