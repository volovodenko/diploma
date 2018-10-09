import React from 'react';

import HomePage from '../pages/HomePage';
import CarModelsPage from '../pages/CarModelsPage';
import CarCategoriesPage from '../pages/CarCategoriesPage';
import CarSubCategoriesPage from '../pages/CarSubCategoriesPage';
import CarSubCategoriesItemPage from '../pages/CarSubCategoriesItemPage';
import CartPage from '../pages/CartPage';
import ProductPage from '../pages/ProductPage';
import CheckoutPage from '../pages/CheckoutPage';
import AboutPage from '../pages/AboutPage';
import PaymentPage from '../pages/PaymentPage';
import ContactsPage from '../pages/ContactsPage';
import WarrantyPage from '../pages/WarrantyPage';
import ArticlesPage from '../pages/ArticlesPage';
import ProfilePage from '../pages/ProfilePage';
import OrderPage from '../pages/OrderPage';
import NotFoundPage from '../pages/NotFoundPage';


const routes = [
    {
        name: 'Home',
        path: '/',
        isExact: true,
        component: (location) => <HomePage location={location}/>
    },
    {
        name: 'CarModels',
        path: '/catalog/:car',
        isExact: true,
        component: (location) => <CarModelsPage location={location}/>
    },
    {
        name: 'CarCategories',
        path: '/catalog/:car/:model',
        isExact: true,
        component: (location) => <CarCategoriesPage location={location}/>
    },
    {
        name: 'CarSubCategories',
        path: '/catalog/:car/:model/:category',
        isExact: true,
        component: (location) => <CarSubCategoriesPage location={location}/>
    },
    {
        name: 'CarSubCategoriesItem',
        path: '/catalog/:car/:model/:category/:subCategory',
        isExact: true,
        component: (location) => <CarSubCategoriesItemPage location={location}/>
    },
    {
        name: 'Cart',
        path: '/cart',
        isExact: true,
        component: (location) => <CartPage location={location}/>
    },
    {
        name: 'Product',
        path: '/parts/:partSlug',
        isExact: true,
        component: (location) => <ProductPage location={location}/>
    },
    {
        name: 'Checkout',
        path: '/checkout',
        isExact: true,
        component: (location) => <CheckoutPage location={location}/>
    },
    {
        name: 'About',
        path: '/about',
        isExact: true,
        component: (location) => <AboutPage location={location}/>
    },
    {
        name: 'Payment',
        path: '/payment',
        isExact: true,
        component: (location) => <PaymentPage location={location}/>
    },
    {
        name: 'Contacts',
        path: '/contacts',
        isExact: true,
        component: (location) => <ContactsPage location={location}/>
    },
    {
        name: 'Warranty',
        path: '/warranty',
        isExact: true,
        component: (location) => <WarrantyPage location={location}/>
    },
    {
        name: 'Articles',
        path: '/articles',
        isExact: true,
        component: (location) => <ArticlesPage location={location}/>
    },
    {
        name: 'Profile',
        path: '/profile/:tab?',
        isExact: true,
        component: (location) => <ProfilePage location={location}/>
    },
    {
        name: 'Order',
        path: '/order/:orderId',
        isExact: true,
        component: (location) => <OrderPage location={location}/>
    },
    {
        name: 'NotFound',
        path: '*',
        isExact: false,
        component: () => <NotFoundPage/>
    },
];

export default routes;