import React, {Component} from 'react';


import CheckoutPageContainer from '../../containers/PageContainers/CheckoutPageContainer';
import {TYPE_PAYMENTS, DELIVERY_METHOD_LIST, TRANSPORTER_LIST} from '../../config';


export default () => View => {

    @CheckoutPageContainer()
    class CheckoutPageController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.state = {
                sumTotal: 0,

                activePage: 1,

                phone: '',
                fio: '',
                comment: '',

                email: '',

                activePayment: 1,
                paymentContent: TYPE_PAYMENTS[0].content,

                deliveryMethodDropDownVisible: false,
                deliveryMethod: DELIVERY_METHOD_LIST[0].title,

                transporterFormVisible: true,
                transporter: TRANSPORTER_LIST[0].title,
                transporterDropDownVisible: false,

                deliveryAddress: 'Выберите город',
                deliveryAddressRef: '',
                deliveryAddressDropDownVisible: false,
                deliveryAddressList: [],

                deliveryWarehouse: 'Выберите склад',
                deliveryWarehouseRef: '',
                deliveryWarehouseDropDownVisible: false,
                deliveryWarehouseList: [],

                errorShow: false
            };

            this.errorMessage = [];

            this.phoneRef = React.createRef();
            this.fioRef = React.createRef();
            this.commentRef = React.createRef();
            this.emailRef = React.createRef();
        }


        static getDerivedStateFromProps(props, state) {

            if (props.cart.length && state.sumTotal === 0) {
                let sumTotal = 0;

                props.cart.forEach(item => {
                    sumTotal += (item.price * item.buyQuantity);
                });

                sumTotal = (sumTotal / 100).toFixed(2);

                return {
                    sumTotal
                }
            }

            if (props.transporterCitiesLoaded) {

                const addressList = props.transporterCities.find(item => item.transporter === state.transporter);
                const deliveryAddressList = addressList ? addressList.cities : [];

                let city = null;

                if (deliveryAddressList.length) {
                    city = deliveryAddressList
                        .find(item => item.id === state.deliveryAddressRef);
                }


                if (!city) {
                    return deliveryAddressList.length
                        ?
                        {
                            deliveryAddressList,
                            deliveryWarehouseList: []
                        }
                        :
                        null
                }

                if (city.warehouses) {
                    return {
                        deliveryAddressList,
                        deliveryWarehouseList: city.warehouses
                    }
                }

            }

            return {
                deliveryAddressList: state.deliveryAddressList,
                deliveryWarehouseList: []
            }
        }


        render() {

            return <View
                sumTotal={this.state.sumTotal}
                cart={this.props.cart}
                activePage={this.state.activePage}
                nextPage={::this.nextPage}
                prevPage={::this.prevPage}

                phoneRef={this.phoneRef}
                phone={this.state.phone}
                onChangePhone={::this.onChangePhone}


                fioRef={this.fioRef}
                fio={this.state.fio}
                onChangeFio={::this.onChangeFio}

                commentRef={this.commentRef}
                comment={this.state.comment}
                onChangeComment={::this.onChangeComment}

                emailRef={this.emailRef}
                email={this.state.email}
                onChangeEmail={::this.onChangeEmail}

                errorMessage={this.errorMessage[0]}
                errorShow={this.state.errorShow}

                activePayment={this.state.activePayment}
                setActivePayment={::this.setActivePayment}
                paymentContent={this.state.paymentContent}

                deliveryMethodDropDownVisible={this.state.deliveryMethodDropDownVisible}
                deliveryMethod={this.state.deliveryMethod}
                deliveryMethodList={DELIVERY_METHOD_LIST}
                deliveryMethodDropDownToggle={::this.deliveryMethodDropDownToggle}
                setDeliveryMethod={::this.setDeliveryMethod}

                transporterFormVisible={this.state.transporterFormVisible}
                transporter={this.state.transporter}
                transporterList={this.checkTransporterList()}
                transporterDropDownVisible={this.state.transporterDropDownVisible}
                transporterDropDownToggle={::this.transporterDropDownToggle}
                setTransporter={::this.setTransporter}

                deliveryAddress={this.state.deliveryAddress}
                deliveryAddressDropDownVisible={this.state.deliveryAddressDropDownVisible}
                deliveryAddressList={this.state.deliveryAddressList}
                deliveryAddressDropDownToggle={::this.deliveryAddressDropDownToggle}
                setDeliveryAddress={::this.setDeliveryAddress}

                deliveryWarehouse={this.state.deliveryWarehouse}
                deliveryWarehouseDropDownVisible={this.state.deliveryWarehouseDropDownVisible}
                deliveryWarehouseList={this.state.deliveryWarehouseList}
                deliveryWarehouseDropDownToggle={::this.deliveryWarehouseDropDownToggle}
                setDeliveryWarehouse={::this.setDeliveryWarehouse}

                transporterCitiesIsLoading={this.props.transporterCitiesIsLoading}
                transporterWarehousesIsLoading={this.props.transporterWarehousesIsLoading}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        checkTransporterList() {
            const paymentId = TYPE_PAYMENTS.find(item => item.type === 'Наложенный платеж').id;

            return this.state.activePayment === paymentId
                ? [TRANSPORTER_LIST.find(item => item.title === 'Новая почта')]
                : TRANSPORTER_LIST;

        }


        onChangePhone() {
            const phone = this.phoneRef.current.value;

            this.setState(() => ({
                phone,
            }));
        }


        onChangeFio() {
            const fio = this.fioRef.current.value;

            this.setState(() => ({
                fio
            }))
        }


        onChangeComment() {
            const comment = this.commentRef.current.value;

            if (comment.trim().length > 250) {
                return;
            }

            this.setState(() => ({
                comment
            }))
        }

        onChangeEmail() {
            const email = this.emailRef.current.value;

            this.setState(() => ({
                email
            }))
        }


        validateEmail() {
            const re = /^[-._a-z0-9]+@[a-z0-9]+\.[a-z]+$/;
            const email = this.emailRef.current.value.toLowerCase();

            return re.test(email);
        }


        getErrorFirstPage() {
            const re = /\+380\d{2}-\d{3}-\d{2}-\d{2}/;
            const errorPhone = !re.test(this.state.phone);

            const errorFio = this.state.fio.trim().split(' ').length < 2;


            if (errorPhone) {
                this.errorMessage.push('Введите номер телефона в указанном формате');
            }

            if (errorFio) {
                this.errorMessage.push('Введите имя и фамилию');
            }

            return errorPhone || errorFio;
        }


        getErrorThirdPage() {
            let errorEmail = false;

            if (this.state.email.length) {
                errorEmail = !this.validateEmail()
            }

            if (errorEmail) {
                this.errorMessage.push('Введите корректный E-mail');
            }

            const errorFio = this.state.fio.trim().split(' ').length < 2;

            if (errorFio) {
                this.errorMessage.push('Введите имя и фамилию');
            }

            let errorDeliveryAddress = false;
            let errorDeliveryWarehouse = false;

            //Если не самовывоз
            if (this.state.deliveryMethod !== DELIVERY_METHOD_LIST[1].title) {

                errorDeliveryAddress = !this.state.deliveryAddressRef.length;
                errorDeliveryWarehouse = !this.state.deliveryWarehouseRef.length;

                if (errorDeliveryAddress) {
                    this.errorMessage.push('Выберите адрес доставки');
                }

                if (errorDeliveryWarehouse) {
                    this.errorMessage.push('Выберите склад');
                }

            }

            return errorEmail || errorFio || errorDeliveryAddress || errorDeliveryWarehouse;

        }


        nextPage = () => {

            //Начало обработка ошибок
            if ((this.state.activePage === 1 && this.getErrorFirstPage()) ||
                (this.state.activePage === 3 && this.getErrorThirdPage())
            ) {

                clearTimeout(this.timerId);

                this.setState(() => ({
                    errorShow: true
                }));

                this.timerId = setTimeout(() => {
                    this.setState(() => ({
                        errorShow: false
                    }));
                    this.errorMessage = [];
                }, 5000);

                return;

            } else {
                this.setState(() => ({
                    errorShow: false
                }));
                this.errorMessage = [];
            }
            //Конец обработка ошибок


            if (this.state.activePage === 2) {
                this.getTransporterCities(this.state.transporter);
            }


            this.setState(state => ({
                activePage: state.activePage + 1
            }));
        };


        prevPage() {
            this.setState(state => ({
                activePage: state.activePage - 1
            }));
        }


        setActivePayment = (activePayment, paymentContent) => () => {
            this.setState(() => ({
                activePayment,
                paymentContent
            }));

            //Если выбран "Наложенный платеж" и транспортер не Новая почта => выполнить сброс
            if (activePayment === 2 && this.state.transporter !== TRANSPORTER_LIST[0].title) {
                this.setState(() => ({
                    transporter: TRANSPORTER_LIST[0].title,
                    deliveryAddress: 'Выберите город',
                    deliveryAddressRef: '',
                    deliveryWarehouse: 'Выберите склад',
                    deliveryWarehouseRef: ''
                }));
            }
        };


        deliveryMethodDropDownToggle() {
            this.setState(state => ({
                deliveryMethodDropDownVisible: !state.deliveryMethodDropDownVisible
            }));
        }

        setDeliveryMethod = method => () => {
            this.deliveryMethodDropDownToggle();

            if ((method !== DELIVERY_METHOD_LIST[0].title &&
                this.state.transporterFormVisible) ||
                (method === DELIVERY_METHOD_LIST[0].title &&
                    !this.state.transporterFormVisible)
            ) {
                this.transporterFormVisibleToggle();
            }

            if (method !== this.state.deliveryMethod) {
                this.setState(() => ({
                    deliveryMethod: method
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

            if (transporter !== this.state.transporter) {
                this.getTransporterCities(transporter);

                this.setState(() => ({
                    transporter,
                    deliveryAddress: 'Выберите город',
                    deliveryAddressRef: '',
                    deliveryWarehouse: 'Выберите склад',
                    deliveryWarehouseRef: ''
                }));
            }
        };


        getTransporterCities(transporter) {
            if (!this.props.transporterCities.some(item => item.transporter === transporter)) {
                const data = {transporter};

                this.props.getTransporterCities(data);
            }
        }


        deliveryAddressDropDownToggle() {
            if (this.props.transporterCitiesIsLoading) {
                return;
            }

            this.setState(state => ({
                deliveryAddressDropDownVisible: !state.deliveryAddressDropDownVisible
            }));
        }


        setDeliveryAddress = (deliveryAddress, deliveryAddressRef) => () => {
            this.deliveryAddressDropDownToggle();


            if (deliveryAddressRef !== this.state.deliveryAddressRef) {
                let deliveryWarehouseList = [];

                const city = this.props.transporterCities
                    .find(item => item.transporter === this.state.transporter)
                    .cities
                    .find(item => item.id === deliveryAddressRef);


                if (city.warehouses) {
                    deliveryWarehouseList = city.warehouses;
                } else {
                    const data = {
                        transporter: this.state.transporter,
                        cityRef: deliveryAddressRef
                    };

                    this.props.getTransporterWarehouses(data);
                }

                this.setState(() => ({
                    deliveryWarehouse: 'Выберите склад',
                    deliveryWarehouseRef: '',
                    deliveryAddress,
                    deliveryAddressRef,
                    deliveryWarehouseList
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


        setDeliveryWarehouse = (deliveryWarehouse, deliveryWarehouseRef) => () => {
            this.deliveryWarehouseDropDownToggle();

            deliveryWarehouseRef = deliveryWarehouseRef.toString();

            if (deliveryWarehouseRef !== this.state.deliveryWarehouseRef) {
                this.setState(() => ({
                    deliveryWarehouse,
                    deliveryWarehouseRef
                }));
            }

        };


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CheckoutPageController;

}