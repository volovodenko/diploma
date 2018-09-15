import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.CARS_FETCH_REQUEST:
            return {
                ...stateStore,
                carsIsLoading: true
            };
        case t.CARS_FETCH_SUCCESS:
            return {
                ...stateStore,
                carsList: action.payload,
                carsIsLoading: false,
                carsLoaded: true
            };
        case t.CARS_FETCH_FAIL:
            return {
                ...stateStore,
                carsIsLoading: false
            };

            /****************************************************************************/
        case t.CAR_MODELS_FILTER_FETCH_REQUEST:
            return {
                ...stateStore,
                carModelsFilterIsLoading: true,
                carModelsFilterLoaded: false,
                carModelsFilterList: []
            };
        case t.CAR_MODELS_FILTER_FETCH_SUCCESS:
            return {
                ...stateStore,
                carModelsFilterList: action.payload,
                carModelsFilterIsLoading: false,
                carModelsFilterLoaded: true
            };
        case t.CAR_MODELS_FILTER_FETCH_FAIL:
            return {
                ...stateStore,
                carModelsFilterIsLoading: false
            };

            /****************************************************************************/
        case t.CAR_MODELS_CATALOG_FETCH_REQUEST:
            return {
                ...stateStore,
                carModelsCatalogIsLoading: true,
                carModelsCatalogLoaded: false,
            };
        case t.CAR_MODELS_CATALOG_FETCH_SUCCESS: {
            let carModelsCatalogList = [...stateStore.carModelsCatalogList, action.payload];

            if (stateStore.carModelsCatalogList[0].car === 'initial') {
                carModelsCatalogList = [action.payload];
            }

            return {
                ...stateStore,
                carModelsCatalogList,
                carModelsCatalogIsLoading: false,
                carModelsCatalogLoaded: true
            };
        }

        case t.CAR_MODELS_CATALOG_FETCH_FAIL:
            return {
                ...stateStore,
                carModelsCatalogIsLoading: false,
                carModelsCatalogFetchFail: true
            };

            /****************************************************************************/
        case t.CAR_CATEGORIES_FILTER_FETCH_REQUEST:
            return {
                ...stateStore,
                carCategoriesFilterIsLoading: true,
                carCategoriesFilterLoaded: false,
                carCategoriesFilterList: []
            };
        case t.CAR_CATEGORIES_FILTER_FETCH_SUCCESS:
            return {
                ...stateStore,
                carCategoriesFilterList: action.payload,
                carCategoriesFilterIsLoading: false,
                carCategoriesFilterLoaded: true
            };
        case t.CAR_CATEGORIES_FILTER_FETCH_FAIL:
            return {
                ...stateStore,
                carCategoriesFilterIsLoading: false
            };

            /****************************************************************************/
        case t.CAR_CATEGORIES_CATALOG_FETCH_REQUEST:
            return {
                ...stateStore,
                carCategoriesCatalogIsLoading: true,
                carCategoriesCatalogLoaded: false,
            };
        case t.CAR_CATEGORIES_CATALOG_FETCH_SUCCESS:
            return {
                ...stateStore,
                carCategoriesCatalogList: [...stateStore.carCategoriesCatalogList, action.payload],
                carCategoriesCatalogIsLoading: false,
                carCategoriesCatalogLoaded: true
            };
        case t.CAR_CATEGORIES_CATALOG_FETCH_FAIL:
            return {
                ...stateStore,
                carCategoriesCatalogIsLoading: false,
                carCategoriesCatalogFetchFail: true
            };

            /****************************************************************************/
        case t.CLEAR_FETCH_ERRORS:
            return {
                ...stateStore,
                carModelsCatalogFetchFail: false,
                carCategoriesCatalogFetchFail: false,
            };

        /****************************************************************************/

        default:
            return stateStore;
    }

}
