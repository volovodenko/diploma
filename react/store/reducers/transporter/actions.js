import {httpRequest, checkResponse} from '../../../helpers/network';
import * as t from './actionTypes';


/*************************************************************************
 * GET DELIVERY METHODS
 *************************************************************************/
const deliveryMethodsFetchRequest = () => ({
    type: t.DELIVERY_METHODS_FETCH_REQUEST
});

const deliveryMethodsFetchSuccess = (data) => ({
    type: t.DELIVERY_METHODS_FETCH_SUCCESS,
    payload: data
});

const deliveryMethodsFetchFail = (error) => ({
    type: t.DELIVERY_METHODS_FETCH_FAIL,
    payload: error
});

export const getDeliveryMethods = () => dispatch => {
    dispatch(deliveryMethodsFetchRequest());

    httpRequest('getDeliveryMethods')
        .then(res => {
            if (checkResponse(res)) {
                dispatch(deliveryMethodsFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(deliveryMethodsFetchFail(err.response.data.error));
        });
};


/*************************************************************************
 * GET TRANSPORTERS
 *************************************************************************/
const transportersFetchRequest = () => ({
    type: t.TRANSPORTERS_FETCH_REQUEST
});

const transportersFetchSuccess = (data) => ({
    type: t.TRANSPORTERS_FETCH_SUCCESS,
    payload: data
});

const transportersFetchFail = (error) => ({
    type: t.TRANSPORTERS_FETCH_FAIL,
    payload: error
});

export const getTransporters = () => dispatch => {
    dispatch(transportersFetchRequest());

    httpRequest('getTransporters')
        .then(res => {
            if (checkResponse(res)) {
                dispatch(transportersFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(transportersFetchFail(err.response.data.error));
        });
};

/*************************************************************************
 * GET TRANSPORTER CITIES
 *************************************************************************/
const transporterCitiesFetchRequest = () => ({
    type: t.TRANSPORTER_CITIES_FETCH_REQUEST
});

const transporterCitiesFetchSuccess = (data) => ({
    type: t.TRANSPORTER_CITIES_FETCH_SUCCESS,
    payload: data
});

const transporterCitiesFetchFail = (error) => ({
    type: t.TRANSPORTER_CITIES_FETCH_FAIL,
    payload: error
});

export const getTransporterCities = (data) => dispatch => {
    dispatch(transporterCitiesFetchRequest());

    httpRequest('transporter/getCities', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(transporterCitiesFetchSuccess({
                    transporter: data.transporter,
                    cities: res.data
                }));
            }
        })
        .catch(err => {
            dispatch(transporterCitiesFetchFail(err.response.data.error));
        });
};

/*************************************************************************
 * GET TRANSPORTER WAREHOUSES
 *************************************************************************/
const transporterWarehousesFetchRequest = () => ({
    type: t.TRANSPORTER_WAREHOUSES_FETCH_REQUEST
});

const transporterWarehousesFetchSuccess = (data) => ({
    type: t.TRANSPORTER_WAREHOUSES_FETCH_SUCCESS,
    payload: data
});

const transporterWarehousesFetchFail = (error) => ({
    type: t.TRANSPORTER_WAREHOUSES_FETCH_FAIL,
    payload: error
});

export const getTransporterWarehouses = (data) => dispatch => {
    dispatch(transporterWarehousesFetchRequest());

    httpRequest('transporter/getWarehouses', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(transporterWarehousesFetchSuccess({
                    id: data.cityRef,
                    transporter: data.transporter,
                    warehouses: res.data
                }));
            }
        })
        .catch(err => {
            dispatch(transporterWarehousesFetchFail(err.response.data.error));
        });
};
