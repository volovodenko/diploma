import React, {Component} from 'react';


import CartPageContainer from '../../containers/PageContainers/CartPageContainer';


export default () => View => {

    @CartPageContainer()
    class CartPageController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку
        }

        render() {
            return <View
                cart={this.props.cart}
                clearCart={::this.clearCart}
                sumTotal={this.props.sumTotal}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        clearCart() {
            this.props.onClearCart();
            window.scrollTo(0, 0); //обнулить прокрутку
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CartPageController;

}