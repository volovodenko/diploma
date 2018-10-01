import React, {Component} from 'react';


import DetailTabContainer from '../../../containers/ComponentContainers/Profile/DetailTabContainer';


export default () => View => {

    @DetailTabContainer()
    class DetailTabController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                editMode: false,

                currentPhone: this.props.phone,
                paymentDropDownVisible: false,

                paymentsList: [],

                payment: this.props.payment,
                paymentId: this.props.paymentId
            };

            this.phoneRef = React.createRef();

        }


        static getDerivedStateFromProps(props, state) {
            if (props.transportersLoaded &&
                !props.transporterCitiesIsLoading &&
                !props.transporterCities.length
            ) {
                const data = {
                    transporter: props.transporters[0].title
                };

                props.getTransporterCities(data);

            }


            if (props.paymentsDataLoaded && !state.paymentsList.length) {
                const paymentsList = props.paymentsData.map(item => (
                    {
                        id: item.id,
                        title: item.type
                    }
                ));

                return {
                    paymentsList,
                    paymentId: paymentsList[0].id,
                    payment: paymentsList[0].title
                }
            }

            if (props.paymentsDataLoaded && !state.payment && state.editMode) {
                return {
                    paymentId: props.paymentsData[0].id,
                    payment: props.paymentsData[0].type
                }
            }

            return null;
        }


        render() {

            return <View
                userName={this.props.userName}

                currentPhone={this.state.currentPhone}
                phoneRef={this.phoneRef}
                onChangePhone={::this.onChangePhone}

                paymentsList={this.state.paymentsList}

                currentPayment={this.state.payment}
                onChangePayment={::this.onChangePayment}
                paymentDropDownVisible={this.state.paymentDropDownVisible}
                paymentDropDownToggle={::this.paymentDropDownToggle}


                editMode={this.state.editMode}
                enableEditMode={::this.enableEditMode}

                saveDetail={::this.saveDetail}
                cancelEditDetail={::this.cancelEditDetail}

                {...this.props}

            />
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        enableEditMode() {
            if (!this.state.editMode) {
                this.props.deliveryMethodsLoaded || this.props.getDeliveryMethods();
                this.props.transportersLoaded || this.props.getTransporters();
                this.props.paymentsDataLoaded || this.props.getPayments();


                this.setState({
                    editMode: true
                });

                this.props.enableEditDelivery();
            }
        }


        paymentDropDownToggle() {
            this.setState(state => ({
                paymentDropDownVisible: !state.paymentDropDownVisible
            }));
        }


        onChangePayment = payment => () => {
            this.paymentDropDownToggle();

            if (payment.title !== this.state.payment) {
                const data = {
                    paymentId: payment.id,
                    payment: payment.title
                };

                this.setState({
                    paymentId: payment.id,
                    payment: payment.title
                });

                this.props.onSavePaymentTab(data);
            }
        };


        onChangePhone() {
            const currentPhone = this.phoneRef.current.value;

            this.setState(() => ({
                currentPhone
            }));
        }


        getErrorPage() {
            const re = /\+380-\d{2}-\d{3}-\d{2}-\d{2}/;
            const errorPhone = !re.test(this.state.currentPhone);

            if (errorPhone) {
                this.props.onSaveErrorMessage({
                    message: 'Введите номер телефона в указанном формате'
                });

                return true;
            }


            return false;
        }


        saveDetail() {
            if (this.getErrorPage() || !this.props.saveDeliveryData(false)) {
                return;
            }

            this.props.onSaveUserPhone({phone: this.state.currentPhone});

            setTimeout(() => {
                const data = this.props.transporterFormVisible ?
                    {
                        phone: this.state.currentPhone,
                        fio: this.props.fio,

                        deliveryMethod: this.props.currentDeliveryMethod,
                        deliveryMethodId: this.props.deliveryMethodId,
                        payment: this.state.payment,
                        paymentId: this.state.paymentId,
                        transporter: this.props.currentTransporter,
                        transporterId: this.props.transporterId,

                        deliveryCity: this.props.deliveryAddress,
                        deliveryCityRef: this.props.deliveryAddressRef,

                        deliveryWarehouse: this.props.deliveryWarehouse,
                        deliveryWarehouseRef: this.props.deliveryWarehouseRef,
                    }
                    :
                    {
                        phone: this.state.currentPhone,
                        fio: this.props.fio,

                        deliveryMethod: this.props.currentDeliveryMethod,
                        deliveryMethodId: this.props.deliveryMethodId,
                        payment: this.state.payment,
                        paymentId: this.state.paymentId,
                    };

                this.props.saveUserData(data);

            }, 300);


            this.setState({
                editMode: false
            })

        }


        cancelEditDetail() {
            this.props.cancelEditDelivery();

            this.setState({
                currentPhone: this.props.phone,
                editMode: false,
                payment: this.props.payment,
                paymentId: this.props.paymentId,
            })
        }


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return DetailTabController;

}