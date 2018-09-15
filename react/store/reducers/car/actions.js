import {httpRequest, checkResponse} from '../../../helpers/network';
import * as t from './actionTypes';


/*************************************************************************
 * GET CARS LIST
 *************************************************************************/
const carsFetchRequest = () => ({
    type: t.CARS_FETCH_REQUEST
});

const carsFetchSuccess = (data) => ({
    type: t.CARS_FETCH_SUCCESS,
    payload: data
});

const carsFetchFail = (error) => ({
    type: t.CARS_FETCH_FAIL,
    payload: error
});

export const getCars = () => dispatch => {
    dispatch(carsFetchRequest());

    httpRequest('getCars')
        .then(res => {
            if (checkResponse(res)) {
                dispatch(carsFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(carsFetchFail(err.response.data.error));
        });
};

/*************************************************************************
 * GET MODELS LIST FOR FILTER BY CAR SLUG
 *************************************************************************/
const carModelsFilterFetchRequest = () => ({
    type: t.CAR_MODELS_FILTER_FETCH_REQUEST
});

const carModelsFilterFetchSuccess = (data) => ({
    type: t.CAR_MODELS_FILTER_FETCH_SUCCESS,
    payload: data
});

const carModelsFilterFetchFail = (error) => ({
    type: t.CAR_MODELS_FILTER_FETCH_FAIL,
    payload: error
});

export const getCarModelsFilter = (data) => dispatch => {
    dispatch(carModelsFilterFetchRequest());

    httpRequest('getCarModels', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(carModelsFilterFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(carModelsFilterFetchFail(err.response.data.error));
        });
};



/*************************************************************************
 * GET MODELS LIST FOR CATALOG BY CAR SLUG
 *************************************************************************/
const carModelsCatalogFetchRequest = () => ({
    type: t.CAR_MODELS_CATALOG_FETCH_REQUEST
});

const carModelsCatalogFetchSuccess = (data) => ({
    type: t.CAR_MODELS_CATALOG_FETCH_SUCCESS,
    payload: data
});

const carModelsCatalogFetchFail = (error) => ({
    type: t.CAR_MODELS_CATALOG_FETCH_FAIL,
    payload: error
});

export const getCarModelsCatalog = (data) => dispatch => {
    dispatch(carModelsCatalogFetchRequest());

    httpRequest('getCarModels', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(carModelsCatalogFetchSuccess({car: data.slug, models: res.data}));
            }
        })
        .catch(err => {
            dispatch(carModelsCatalogFetchFail(err.response.data.error));
        });
};


/*************************************************************************
 * GET CATEGORY LIST FOR FILTER BY CAR MODEL SLUG
 *************************************************************************/
const carCategoriesFilterFetchRequest = () => ({
    type: t.CAR_CATEGORIES_FILTER_FETCH_REQUEST
});

const carCategoriesFilterFetchSuccess = (data) => ({
    type: t.CAR_CATEGORIES_FILTER_FETCH_SUCCESS,
    payload: data
});

const carCategoriesFilterFetchFail = (error) => ({
    type: t.CAR_CATEGORIES_FILTER_FETCH_FAIL,
    payload: error
});

export const getCarCategoriesFilter = (data) => dispatch => {
    dispatch(carCategoriesFilterFetchRequest());

    httpRequest('getCarCategories', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(carCategoriesFilterFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(carCategoriesFilterFetchFail(err.response.data.error));
        });
};


/*************************************************************************
 * GET CATEGORY LIST FOR CATALOG BY CAR MODEL SLUG
 *************************************************************************/
const carCategoriesCatalogFetchRequest = () => ({
    type: t.CAR_CATEGORIES_CATALOG_FETCH_REQUEST
});

const carCategoriesCatalogFetchSuccess = (data) => ({
    type: t.CAR_CATEGORIES_CATALOG_FETCH_SUCCESS,
    payload: data
});

const carCategoriesCatalogFetchFail = (error) => ({
    type: t.CAR_CATEGORIES_CATALOG_FETCH_FAIL,
    payload: error
});

export const getCarCategoriesCatalog = (data) => dispatch => {
    dispatch(carCategoriesCatalogFetchRequest());

    httpRequest('getCarCategories', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(carCategoriesCatalogFetchSuccess({carModel: data.slug, categories: res.data}));
            }
        })
        .catch(err => {
            dispatch(carCategoriesCatalogFetchFail(err.response.data.error));
        });
};

/*************************************************************************
 * CLEAR FETCH ERRORS
 *************************************************************************/
const clearFetchErrors = () => ({
    type: t.CLEAR_FETCH_ERRORS
});

export const onClearFetchErrors = () => dispatch => {
    dispatch(clearFetchErrors());
};