import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.DELIVERY_METHODS_FETCH_REQUEST:
            return {
                ...stateStore,
                deliveryMethodsIsLoading: true,
            };
        case t.DELIVERY_METHODS_FETCH_SUCCESS:

            return {
                ...stateStore,
                deliveryMethods: action.payload,
                deliveryMethodsIsLoading: false,
                deliveryMethodsLoaded: true
            };
        case t.DELIVERY_METHODS_FETCH_FAIL:
            return {
                ...stateStore,
                deliveryMethodsIsLoading: false
            };

        /****************************************************************************/
        case t.TRANSPORTERS_FETCH_REQUEST:
            return {
                ...stateStore,
                transportersIsLoading: true,
            };
        case t.TRANSPORTERS_FETCH_SUCCESS:

            return {
                ...stateStore,
                transporters: action.payload,
                transportersIsLoading: false,
                transportersLoaded: true
            };
        case t.TRANSPORTERS_FETCH_FAIL:
            return {
                ...stateStore,
                transportersIsLoading: false
            };

        /****************************************************************************/
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

            const transporterCities = stateStore.transporterCities
                .reduce((accumulator, item) => {

                    if (item.transporter === action.payload.transporter) {
                        item.cities.map(item => {
                            if (item.id === action.payload.id) {
                                item.warehouses = action.payload.warehouses;
                            }

                            return item;
                        });
                    }

                    accumulator.push(item);

                    return accumulator;
                }, []);


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
