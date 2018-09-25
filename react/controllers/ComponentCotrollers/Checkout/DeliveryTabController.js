import React, {Component} from 'react';


import DeliveryTabContainer from '../../../containers/ComponentContainers/Checkout/DeliveryTabContainer';


export default () => View => {

    @DeliveryTabContainer()
    class DeliveryTabController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.state = {
                email: this.props.email,

                deliveryMethodId: this.props.deliveryMethodId,
                currentDeliveryMethod: this.props.deliveryMethod,
                deliveryMethodDropDownVisible: false,


                transporterFormVisible: !this.props.deliveryMethod.toLowerCase().includes('самовывоз'),
                transporterId: this.props.transporterId,
                currentTransporter: this.props.transporter,
                transporterDropDownVisible: false,

                deliveryAddress: this.props.deliveryAddress,
                deliveryAddressRef: this.props.deliveryAddressRef,
                deliveryAddressDropDownVisible: false,
                deliveryAddressList: [],

                deliveryWarehouse: this.props.deliveryWarehouse,
                deliveryWarehouseRef: this.props.deliveryWarehouseRef,
                deliveryWarehouseDropDownVisible: false,
                deliveryWarehouseList: [],

                fio: this.props.fio
            };

            this.emailRef = React.createRef();
            this.fioRef = React.createRef();
        }


        static getDerivedStateFromProps(props, state) {
            let deliveryMethodId = state.deliveryMethodId;
            let currentDeliveryMethod = state.currentDeliveryMethod;
            let currentTransporter = state.currentTransporter;
            let transporterId = state.transporterId;
            let deliveryAddress = state.deliveryAddress;


            if (props.payment === 'Наложенный платеж' &&
                currentTransporter !== 'Новая почта') {

                transporterId = props.transporters.find(item => item.title === currentTransporter).id;

                return {
                    currentTransporter: 'Новая почта',
                    transporterId,
                    deliveryAddress: 'Выберите город',
                    deliveryWarehouse: 'Выберите склад',
                    deliveryAddressRef: '',
                    deliveryWarehouseRef: ''
                }
            }


            if (props.transporterCitiesLoaded) {

                if (props.deliveryMethodsLoaded &&
                    !state.currentDeliveryMethod.length
                ) {
                    currentDeliveryMethod = props.deliveryMethods[0].title;
                    deliveryMethodId = props.deliveryMethods[0].id
                }

                if (props.transportersLoaded &&
                    !state.currentTransporter.length
                ) {
                    currentTransporter = props.transporters[0].title;
                    transporterId = props.transporters[0].id;
                }


                const addressList = props.transporterCities
                    .find(item => item.transporter === currentTransporter);


                if (!addressList) {
                    const data = {
                        transporter: currentTransporter
                    };

                    props.getTransporterCities(data);


                    return {
                        deliveryMethodId,
                        currentDeliveryMethod,
                        transporterId,
                        currentTransporter,
                    }
                }


                const deliveryAddressList = addressList.cities;

                const city = deliveryAddressList
                    .find(item => item.title === deliveryAddress);


                if (!city) {

                    return {
                        deliveryMethodId,
                        currentDeliveryMethod,
                        transporterId,
                        currentTransporter,
                        deliveryAddressList,

                        deliveryAddress: 'Выберите город',
                        deliveryWarehouse: 'Выберите склад',
                        deliveryAddressRef: '',
                        deliveryWarehouseRef: ''
                    }

                }

                const deliveryWarehouseList = city.warehouses;

                if (!deliveryWarehouseList) {

                    if (!props.transporterWarehousesIsLoading) {
                        const data = {
                            transporter: currentTransporter,
                            cityRef: state.deliveryAddressRef,
                        };

                        props.getTransporterWarehouses(data);
                    }

                    return {
                        deliveryMethodId,
                        currentDeliveryMethod,
                        transporterId,
                        currentTransporter,
                        deliveryAddressList,
                    }

                }

                return {
                    deliveryMethodId,
                    currentDeliveryMethod,
                    transporterId,
                    currentTransporter,
                    deliveryAddressList,
                    deliveryWarehouseList
                }

            }


            return null;
        }


        componentWillUnmount() {
            const data = {
                email: this.state.email.trim(),
                deliveryMethodId: this.state.deliveryMethodId,
                deliveryMethod: this.state.currentDeliveryMethod,
                transporterId: this.state.transporterId,
                transporter: this.state.currentTransporter,
                deliveryAddress: this.state.deliveryAddress,
                deliveryAddressRef: this.state.deliveryAddressRef,
                deliveryWarehouse: this.state.deliveryWarehouse,
                deliveryWarehouseRef: this.state.deliveryWarehouseRef,
                fio: this.state.fio.trim()
            };

            this.props.onSaveDeliveryTab(data);
        }


        render() {

            return <View
                //From DeliveryTabController (Local)
                emailRef={this.emailRef}
                email={this.state.email}
                onChangeEmail={::this.onChangeEmail}


                deliveryMethods={this.props.deliveryMethods}
                currentDeliveryMethod={this.state.currentDeliveryMethod}
                deliveryMethodDropDownToggle={::this.deliveryMethodDropDownToggle}
                setDeliveryMethod={::this.setDeliveryMethod}
                deliveryMethodDropDownVisible={this.state.deliveryMethodDropDownVisible}


                transporterFormVisible={this.state.transporterFormVisible}
                transporters={this.getTransporters()}
                currentTransporter={this.state.currentTransporter}
                transporterDropDownVisible={this.state.transporterDropDownVisible}
                transporterDropDownToggle={::this.transporterDropDownToggle}
                setTransporter={::this.setTransporter}


                deliveryAddress={this.state.deliveryAddress}
                deliveryAddressDropDownVisible={this.state.deliveryAddressDropDownVisible}
                deliveryAddressList={this.state.deliveryAddressList}
                deliveryAddressDropDownToggle={::this.deliveryAddressDropDownToggle}
                setDeliveryAddress={::this.setDeliveryAddress}
                transporterCitiesIsLoading={this.props.transporterCitiesIsLoading}


                deliveryWarehouse={this.state.deliveryWarehouse}
                deliveryWarehouseDropDownVisible={this.state.deliveryWarehouseDropDownVisible}
                deliveryWarehouseList={this.state.deliveryWarehouseList}
                deliveryWarehouseDropDownToggle={::this.deliveryWarehouseDropDownToggle}
                setDeliveryWarehouse={::this.setDeliveryWarehouse}
                transporterWarehousesIsLoading={this.props.transporterWarehousesIsLoading}


                fioRef={this.fioRef}
                fio={this.state.fio}
                onChangeFio={::this.onChangeFio}


                //From CheckoutPageController
                activePage={this.props.activePage}
                prevPage={this.props.prevPage}
                nextPage={::this.nextPage}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        getTransporters() {
            return this.props.payment === 'Наложенный платеж'
                ? [this.props.transporters.find(item => item.title === 'Новая почта')]
                : this.props.transporters

        }


        onChangeEmail() {
            const email = this.emailRef.current.value;

            this.setState(() => ({
                email
            }))
        }


        onChangeFio() {
            const fio = this.fioRef.current.value;

            this.setState(() => ({
                fio
            }))
        }


        deliveryMethodDropDownToggle() {
            this.setState(state => ({
                deliveryMethodDropDownVisible: !state.deliveryMethodDropDownVisible
            }));
        }


        setDeliveryMethod = method => () => {
            this.deliveryMethodDropDownToggle();

            const id = this.props.deliveryMethods
                .find(item => item.title.toLowerCase().includes('самовывоз'))
                .id;

            if ((method.id === id &&
                this.state.transporterFormVisible) ||
                (method.id !== id &&
                    !this.state.transporterFormVisible)
            ) {
                this.transporterFormVisibleToggle();
            }

            if (method.title !== this.state.currentDeliveryMethod) {
                this.setState(() => ({
                    deliveryMethodId: method.id,
                    currentDeliveryMethod: method.title
                }));
            }
        };


        transporterFormVisibleToggle() {
            this.setState(state => ({
                transporterFormVisible: !state.transporterFormVisible
            }));
        }


        transporterDropDownToggle() {
            this.setState(state => ({
                transporterDropDownVisible: !state.transporterDropDownVisible
            }));
        }


        setTransporter = transporter => () => {
            this.transporterDropDownToggle();

            if (transporter.title !== this.state.currentTransporter) {

                this.setState(() => ({
                    transporterId: transporter.id,
                    currentTransporter: transporter.title,
                    deliveryAddress: 'Выберите город',
                    deliveryAddressRef: '',
                    deliveryWarehouse: 'Выберите склад',
                    deliveryWarehouseRef: ''
                }));
            }
        };


        deliveryAddressDropDownToggle() {
            if (this.props.transporterCitiesIsLoading) {
                return;
            }

            this.setState(state => ({
                deliveryAddressDropDownVisible: !state.deliveryAddressDropDownVisible
            }));
        }


        setDeliveryAddress = (address) => () => {
            this.deliveryAddressDropDownToggle();

            if (address.id !== this.state.deliveryAddressRef) {
                this.setState(() => ({
                    deliveryAddress: address.title,
                    deliveryAddressRef: address.id,
                    deliveryWarehouse: 'Выберите склад',
                    deliveryWarehouseRef: '',
                }));
            }

        };


        deliveryWarehouseDropDownToggle() {
            if (this.props.transporterWarehousesIsLoading ||
                this.props.transporterCitiesIsLoading ||
                this.state.deliveryAddress === 'Выберите город'
            ) {
                return;
            }

            this.setState(state => ({
                deliveryWarehouseDropDownVisible: !state.deliveryWarehouseDropDownVisible
            }));
        }


        setDeliveryWarehouse = (warehouse) => () => {
            this.deliveryWarehouseDropDownToggle();

            if (warehouse.id !== this.state.deliveryWarehouseRef) {
                this.setState(() => ({
                    deliveryWarehouse: warehouse.title,
                    deliveryWarehouseRef: warehouse.id.toString(),
                }));
            }

        };


        nextPage() {
            if (this.getErrorPage()) {
                return;
            }

            this.props.nextPage();
        }


        getErrorPage() {
            let errorEmail = false;

            if (this.state.email.length) {
                errorEmail = !this.validateEmail()
            }

            if (errorEmail) {
                this.props.onSaveErrorMessage({
                    message: 'Введите корректный E-mail'
                });
                return errorEmail;
            }

            const errorFio = this.state.fio.trim().split(' ').length < 2;

            if (errorFio) {
                this.props.onSaveErrorMessage({
                    message: 'Введите имя и фамилию'
                });
                return errorFio;
            }


            let errorDeliveryAddress = false;
            let errorDeliveryWarehouse = false;

            //Если не самовывоз
            if (!this.state.currentDeliveryMethod.toLowerCase().includes('самовывоз')) {

                errorDeliveryAddress = !this.state.deliveryAddressRef.length;
                errorDeliveryWarehouse = !this.state.deliveryWarehouseRef.length;

                if (errorDeliveryAddress) {
                    this.props.onSaveErrorMessage({
                        message: 'Выберите адрес доставки'
                    });
                    return errorDeliveryAddress;
                }

                if (errorDeliveryWarehouse) {
                    this.props.onSaveErrorMessage({
                        message: 'Выберите склад'
                    });
                    return errorDeliveryWarehouse;
                }

            }

            return false;
        }


        validateEmail() {
            const re = /^[-._a-z0-9]+@[a-z0-9]+\.[a-z]+$/;
            const email = this.emailRef.current.value.toLowerCase();

            return re.test(email);
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return DeliveryTabController;

}