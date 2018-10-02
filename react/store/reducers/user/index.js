import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.REGISTER_USER_REQUEST:
        case t.LOGIN_USER_REQUEST:
            return {
                ...stateStore,
                loginRequest: true,
                errorLogin: false,
            };

        case t.REGISTER_USER_SUCCESS:
        case t.LOGIN_USER_SUCCESS: {
            const {
                token, name, email
            } = action.payload;

            const phone = action.payload.phone ? action.payload.phone : '';
            const fio = action.payload.fio ? action.payload.fio : '';
            const payment = action.payload.payment ? action.payload.payment : '';
            const paymentId = action.payload.paymentId ? action.payload.paymentId : 0;
            const deliveryMethodId = action.payload.deliveryMethodId ? action.payload.deliveryMethodId : 0;
            const deliveryMethod = action.payload.deliveryMethod ? action.payload.deliveryMethod : '';
            const transporterId = action.payload.transporterId ? action.payload.transporterId : 0;
            const transporter = action.payload.transporter ? action.payload.transporter : '';
            const deliveryAddress = action.payload.deliveryAddress ? action.payload.deliveryAddress : '';
            const deliveryAddressRef = action.payload.deliveryAddressRef ? action.payload.deliveryAddressRef : '';
            const deliveryWarehouse = action.payload.deliveryWarehouse ? action.payload.deliveryWarehouse : '';
            const deliveryWarehouseRef = action.payload.deliveryWarehouseRef ? action.payload.deliveryWarehouseRef : '';


            //запись в localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('userName', name);
            localStorage.setItem('userLoggedIn', '1');

            localStorage.setItem('phone', phone);
            localStorage.setItem('fio', fio);
            localStorage.setItem('payment', payment);
            localStorage.setItem('paymentId', paymentId);
            localStorage.setItem('email', email);
            localStorage.setItem('deliveryMethodId', deliveryMethodId);
            localStorage.setItem('deliveryMethod', deliveryMethod);
            localStorage.setItem('transporterId', transporterId);
            localStorage.setItem('transporter', transporter);
            localStorage.setItem('deliveryAddress', deliveryAddress);
            localStorage.setItem('deliveryAddressRef', deliveryAddressRef);
            localStorage.setItem('deliveryWarehouse', deliveryWarehouse);
            localStorage.setItem('deliveryWarehouseRef', deliveryWarehouseRef);

            return {
                ...stateStore,
                loginRequest: false,
                userLoggedIn: true,
                userName: name,
                token,

                phone,
                fio,
                payment,
                paymentId,
                email,
                deliveryMethodId,
                deliveryMethod,
                transporterId,
                transporter,
                deliveryAddress,
                deliveryAddressRef,
                deliveryWarehouse,
                deliveryWarehouseRef
            };
        }


        case t.REGISTER_USER_FAIL:
        case t.LOGIN_USER_FAIL:

            return {
                ...stateStore,
                loginRequest: false,
                errorLogin: true,
            };

        /****************************************************************************/
        case t.VALIDATE_NAME_REQUEST:
            return {
                ...stateStore,
            };
        case t.VALIDATE_NAME_SUCCESS:
            return {
                ...stateStore,
                nameExists: false
            };
        case t.VALIDATE_NAME_FAIL:
            return {
                ...stateStore,
                nameExists: true
            };

        /****************************************************************************/
        case t.VALIDATE_EMAIL_REQUEST:
            return {
                ...stateStore,
            };
        case t.VALIDATE_EMAIL_SUCCESS:
            return {
                ...stateStore,
                emailExists: false
            };
        case t.VALIDATE_EMAIL_FAIL:
            return {
                ...stateStore,
                emailExists: true
            };

        /****************************************************************************/
        case t.CLEAR_ERROR_LOGIN:
            return {
                ...stateStore,
                errorLogin: false
            };

        /****************************************************************************/
        case t.LOGOUT_USER:
            //Очистка localStorage
            localStorage.clear();

            return {
                ...stateStore,
                userLoggedIn: false,
                userName: '',
                token: '',

                phone: '',
                fio: '',
                payment: '',
                paymentId: 0,
                email: '',
                deliveryMethodId: 0,
                deliveryMethod: '',
                transporterId: 0,
                transporter: '',
                deliveryAddress: '',
                deliveryAddressRef: '',
                deliveryWarehouse: '',
                deliveryWarehouseRef: '',

                favoritesList: [],
                ordersList:[]
            };

        /****************************************************************************/
        case t.SAVE_ORDER_TAB_DATA:
            return {
                ...stateStore,
                phone: action.payload.phone,
                fio: action.payload.fio,
            };

        /****************************************************************************/
        case t.SAVE_PAYMENT_TAB_DATA:
            return {
                ...stateStore,
                paymentId: action.payload.paymentId,
                payment: action.payload.payment,
            };

        /****************************************************************************/
        case t.SAVE_DELIVERY_TAB_DATA:
            return {
                ...stateStore,
                email: action.payload.email,
                deliveryMethodId: action.payload.deliveryMethodId,
                deliveryMethod: action.payload.deliveryMethod,
                transporterId: action.payload.transporterId,
                transporter: action.payload.transporter,
                deliveryAddress: action.payload.deliveryAddress,
                deliveryAddressRef: action.payload.deliveryAddressRef,
                deliveryWarehouse: action.payload.deliveryWarehouse,
                deliveryWarehouseRef: action.payload.deliveryWarehouseRef,
                fio: action.payload.fio
            };

        /****************************************************************************/
        case t.SAVE_USER_PHONE:
            return {
                ...stateStore,
                phone: action.payload.phone,
            };

        /****************************************************************************/
        case t.SAVE_USER_DATA_REQUEST:
            return {
                ...stateStore,
                userDataIsSaving: true
            };
        case t.SAVE_USER_DATA_SUCCESS: {

            const phone = action.payload.phone ? action.payload.phone : '';
            const fio = action.payload.fio ? action.payload.fio : '';
            const payment = action.payload.payment ? action.payload.payment : '';
            const paymentId = action.payload.paymentId ? action.payload.paymentId : 0;
            const deliveryMethodId = action.payload.deliveryMethodId ? action.payload.deliveryMethodId : 0;
            const deliveryMethod = action.payload.deliveryMethod ? action.payload.deliveryMethod : '';
            const transporterId = action.payload.transporterId ? action.payload.transporterId : 0;
            const transporter = action.payload.transporter ? action.payload.transporter : '';
            const deliveryAddress = action.payload.deliveryCity ? action.payload.deliveryCity : '';
            const deliveryAddressRef = action.payload.deliveryCityRef ? action.payload.deliveryCityRef : '';
            const deliveryWarehouse = action.payload.deliveryWarehouse ? action.payload.deliveryWarehouse : '';
            const deliveryWarehouseRef = action.payload.deliveryWarehouseRef ? action.payload.deliveryWarehouseRef : '';


            //запись в localStorage
            localStorage.setItem('phone', phone);
            localStorage.setItem('fio', fio);
            localStorage.setItem('payment', payment);
            localStorage.setItem('paymentId', paymentId);
            localStorage.setItem('deliveryMethodId', deliveryMethodId);
            localStorage.setItem('deliveryMethod', deliveryMethod);
            localStorage.setItem('transporterId', transporterId);
            localStorage.setItem('transporter', transporter);
            localStorage.setItem('deliveryAddress', deliveryAddress);
            localStorage.setItem('deliveryAddressRef', deliveryAddressRef);
            localStorage.setItem('deliveryWarehouse', deliveryWarehouse);
            localStorage.setItem('deliveryWarehouseRef', deliveryWarehouseRef);

            return {
                ...stateStore,
                userDataIsSaving: false,
                userDataSaved: true
            };
        }

        case t.SAVE_USER_DATA_FAIL:
            return {
                ...stateStore,
                userDataIsSaving: false,
                userDataSavingFail: true
            };

        /****************************************************************************/
        case t.REFRESH_USER_DETAIL: {

            const phone = localStorage.getItem('phone') ? localStorage.getItem('phone') : '';
            const fio = localStorage.getItem('fio') ? localStorage.getItem('fio') : '';

            const payment = localStorage.getItem('payment') ? localStorage.getItem('payment') : '';
            const paymentId = localStorage.getItem('paymentId') ? +localStorage.getItem('paymentId') : 0;

            const email = localStorage.getItem('email') ? localStorage.getItem('email') : '';

            const deliveryMethodId = localStorage.getItem('deliveryMethodId')
                ? +localStorage.getItem('deliveryMethodId') : 0;
            const deliveryMethod = localStorage.getItem('deliveryMethod')
                ? localStorage.getItem('deliveryMethod') : '';

            const transporterId = localStorage.getItem('transporterId')
                ? +localStorage.getItem('transporterId') : 0;
            const transporter = localStorage.getItem('transporter')
                ? localStorage.getItem('transporter') : '';

            const deliveryAddress = localStorage.getItem('deliveryAddress')
                ? localStorage.getItem('deliveryAddress') : '';
            const deliveryAddressRef = localStorage.getItem('deliveryAddressRef')
                ? localStorage.getItem('deliveryAddressRef') : '';

            const deliveryWarehouse = localStorage.getItem('deliveryWarehouse')
                ? localStorage.getItem('deliveryWarehouse') : '';
            const deliveryWarehouseRef = localStorage.getItem('deliveryWarehouseRef')
                ? localStorage.getItem('deliveryWarehouseRef') : '';

            return {
                ...stateStore,
                phone,
                fio,
                payment,
                paymentId,
                email,
                deliveryMethodId,
                deliveryMethod,
                transporterId,
                transporter,
                deliveryAddress,
                deliveryAddressRef,
                deliveryWarehouse,
                deliveryWarehouseRef
            };
        }


        /****************************************************************************/
        case t.ORDERS_LIST_FETCH_REQUEST:
            return {
                ...stateStore,
                ordersListIsLoading: true
            };
        case t.ORDERS_LIST_FETCH_SUCCESS:
            return {
                ...stateStore,
                ordersList: action.payload,
                ordersListIsLoading: false,
                ordersListLoaded: true
            };
        case t.ORDERS_LIST_FETCH_FAIL:
            return {
                ...stateStore,
                ordersListIsLoading: false,
                ordersListFetchFail: true,
            };

        /****************************************************************************/

        case t.ADD_TO_FAVORITES_REQUEST:
            return {
                ...stateStore,
                favoriteIsAdding: true
            };
        case t.ADD_TO_FAVORITES_SUCCESS:
            return {
                ...stateStore,
                favoriteIsAdding: false,
                favoriteExist: action.payload.message !== 'Success',
                favoriteAdded: action.payload.message === 'Success',
            };
        case t.ADD_TO_FAVORITES_FAIL:
            return {
                ...stateStore,
                favoriteIsAdding: false,
                favoriteAddFail: true,
            };

        /****************************************************************************/
        case t.DELETE_FROM_FAVORITES_REQUEST:
            return {
                ...stateStore,
                favoriteIsDeleting: true
            };
        case t.DELETE_FROM_FAVORITES_SUCCESS:
            return {
                ...stateStore,
                favoriteIsDeleting: false,
                favoriteNotExist: action.payload.message !== 'Success',
                favoriteDeleted: action.payload.message === 'Success',
            };
        case t.DELETE_FROM_FAVORITES_FAIL:
            return {
                ...stateStore,
                favoriteIsDeleting: false,
                favoriteAddFail: true,
            };

        /****************************************************************************/

        case t.FAVORITES_LIST_FETCH_REQUEST:
            return {
                ...stateStore,
                favoritesListIsLoading: true
            };
        case t.FAVORITES_LIST_FETCH_SUCCESS:
            return {
                ...stateStore,
                favoritesList: action.payload,
                favoritesListIsLoading: false,
                favoritesListLoaded: true,
            };
        case t.FAVORITES_LIST_FETCH_FAIL:
            return {
                ...stateStore,
                favoritesListIsLoading: false,
                favoritesListFetchFail: true,
            };

        /****************************************************************************/
        default:
            return stateStore;
    }

}
