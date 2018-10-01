import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';


import styles from './styles.scss';
import HomePage from '../../../../pages/HomePage';
import CarModelsPage from '../../../../pages/CarModelsPage';
import CarCategoriesPage from '../../../../pages/CarCategoriesPage';
import CarSubCategoriesPage from '../../../../pages/CarSubCategoriesPage';
import CarSubCategoriesItemPage from '../../../../pages/CarSubCategoriesItemPage';

import CartPage from '../../../../pages/CartPage';
import ProductPage from '../../../../pages/ProductPage';
import CheckoutPage from '../../../../pages/CheckoutPage';
import AboutPage from '../../../../pages/AboutPage';
import PaymentPage from '../../../../pages/PaymentPage';
import ContactsPage from '../../../../pages/ContactsPage';
import WarrantyPage from '../../../../pages/WarrantyPage';
import ArticlesPage from '../../../../pages/ArticlesPage';
import ProfilePage from '../../../../pages/ProfilePage';
import NotFoundPage from '../../../../pages/NotFoundPage';


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
                    <Route exact path='/catalog/:car/:model/:category'
                           render={location => <CarSubCategoriesPage location={location}/>}
                    />
                    <Route exact path='/catalog/:car/:model/:category/:subCategory'
                           render={location => <CarSubCategoriesItemPage location={location}/>}
                    />


                    <Route exact path='/parts/:partSlug'
                           render={location => <ProductPage location={location}/>}
                    />
                    <Route exact path='/cart' render={() => <CartPage />}/>

                    <Route exact path='/checkout'
                           render={location => <CheckoutPage location={location}/>}
                    />


                    <Route exact path='/about'
                           render={location => <AboutPage location={location}/>}
                    />
                    <Route exact path='/payment'
                           render={location => <PaymentPage location={location}/>}
                    />
                    <Route exact path='/contacts'
                           render={location => <ContactsPage location={location}/>}
                    />
                    <Route exact path='/warranty'
                           render={location => <WarrantyPage location={location}/>}
                    />
                    <Route exact path='/articles'
                           render={location => <ArticlesPage location={location}/>}
                    />

                    <Route exact path='/profile/:tab?'
                           render={location => <ProfilePage location={location}/>}
                    />

                    <Route component={NotFoundPage}/>
                </Switch>
            </section>
        );
    }

    /***************************************************************************
     *
     **************************************************************************/


    redirectTo = to => () => <Redirect to={to}/>;

}