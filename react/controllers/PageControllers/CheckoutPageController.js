import React, {Component} from 'react';


import CheckoutPageContainer from '../../containers/PageContainers/CheckoutPageContainer';


export default () => View => {

    @CheckoutPageContainer()
    class CheckoutPageController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                activePage: 1
            };

            window.scrollTo(0, 0); //обнулить прокрутку

            this.props.paymentsDataLoaded || this.props.getPayments();
            this.props.deliveryMethodsLoaded || this.props.getDeliveryMethods();
            this.props.transportersLoaded || this.props.getTransporters();

        }


        static getDerivedStateFromProps(props) {

            if (props.transportersLoaded &&
                !props.transporterCitiesIsLoading &&
                !props.transporterCities.length
            ){
                const data ={
                    transporter: props.transporters[0].title
                };

                props.getTransporterCities(data);

            }

           return null;
        }



        render() {

            return <View
                    activePage={this.state.activePage}
                    nextPage={::this.nextPage}
                    prevPage={::this.prevPage}
                />


        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        nextPage = () => {
            this.setState(state => ({
                activePage: state.activePage + 1
            }));
        };


        prevPage() {
            this.setState(state => ({
                activePage: state.activePage - 1
            }));
        }


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CheckoutPageController;

}