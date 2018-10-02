const initialState = {
    loginRequest: false,
    token: localStorage.getItem('token') ? localStorage.getItem('JWT') : '',
    userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : '',
    userLoggedIn: localStorage.getItem('userLoggedIn') ? !!+localStorage.getItem('userLoggedIn') : false,
    errorLogin: false,

    emailExists: true,
    nameExists: true,


    phone: localStorage.getItem('phone') ? localStorage.getItem('phone') : '',
    fio: localStorage.getItem('fio') ? localStorage.getItem('fio') : '',

    payment: localStorage.getItem('payment') ? localStorage.getItem('payment') : '',
    paymentId: localStorage.getItem('paymentId') ? +localStorage.getItem('paymentId') : 0,

    email: localStorage.getItem('email') ? localStorage.getItem('email') : '',

    deliveryMethodId: localStorage.getItem('deliveryMethodId') ? +localStorage.getItem('deliveryMethodId') : 0,
    deliveryMethod: localStorage.getItem('deliveryMethod') ? localStorage.getItem('deliveryMethod') : '',

    transporterId: localStorage.getItem('transporterId') ? +localStorage.getItem('transporterId') : 0,
    transporter: localStorage.getItem('transporter') ? localStorage.getItem('transporter') : '',

    deliveryAddress: localStorage.getItem('deliveryAddress') ? localStorage.getItem('deliveryAddress') : '',
    deliveryAddressRef: localStorage.getItem('deliveryAddressRef') ? localStorage.getItem('deliveryAddressRef') : '',

    deliveryWarehouse: localStorage.getItem('deliveryWarehouse') ? localStorage.getItem('deliveryWarehouse') : '',
    deliveryWarehouseRef: localStorage.getItem('deliveryWarehouseRef') ? localStorage.getItem('deliveryWarehouseRef') : '',


    userDataIsSaving: false,
    userDataSaved: false,
    userDataSavingFail: false,


    ordersList: [],
    ordersListIsLoading: false,
    ordersListLoaded: false,
    ordersListFetchFail: false,


    favoriteIsAdding: false,
    favoriteExist: false,
    favoriteAdded: false,
    favoriteAddFail: false,


    favoriteIsDeleting: false,
    favoriteNotExist: false,
    favoriteDeleted: false,
    favoriteDeleteFail: false,


    favoritesList: [],
    favoritesListIsLoading: false,
    favoritesListLoaded: false,
    favoritesListFetchFail: false,
};

export default initialState;