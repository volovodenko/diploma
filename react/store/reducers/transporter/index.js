import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.TRANSPORTER_CITIES_FETCH_REQUEST:
            return {
                ...stateStore,
                transporterCitiesIsLoading: true,
                transporterCitiesLoaded: false,
            };
        case t.TRANSPORTER_CITIES_FETCH_SUCCESS:

            return {
                ...stateStore,
                transporterCities: [...stateStore.transporterCities, action.payload],
                transporterCitiesIsLoading: false,
                transporterCitiesLoaded: true
            };
        case t.TRANSPORTER_CITIES_FETCH_FAIL:
            return {
                ...stateStore,
                transporterCitiesIsLoading: false
            };

        /****************************************************************************/
        case t.TRANSPORTER_WAREHOUSES_FETCH_REQUEST:
            return {
                ...stateStore,
                transporterWarehousesIsLoading: true,
                transporterWarehousesLoaded: false,
            };
        case t.TRANSPORTER_WAREHOUSES_FETCH_SUCCESS: {

            // const
            const cities = stateStore.transporterCities
                .find(item => item.transporter === action.payload.transporter)
                .cities
                .map(item => {
                    if (item.id === action.payload.id) {
                        item.warehouses = action.payload.warehouses;
                    }

                    return item;
                });

            const transporterCities = stateStore.transporterCities
                .map(item => {
                    if (item.transporter === action.payload.transporter) {
                        item.cities = cities;
                    }

                    return item;
                });


            return {
                ...stateStore,
                transporterCities,
                transporterWarehousesIsLoading: false,
                transporterWarehousesLoaded: true
            };
        }


        case t.TRANSPORTER_WAREHOUSES_FETCH_FAIL:
            return {
                ...stateStore,
                transporterWarehousesIsLoading: false
            };

        /****************************************************************************/

        default:
            return stateStore;
    }

}
