import React, {Component} from 'react';


import CartContainer from '../containers/CartContainer';


export default () => View => {

    @CartContainer()
    class CartPageController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.state = {
                sumTotal: 0
            };

        }


        static getDerivedStateFromProps(props) {
            let sumTotal = 0;

            if (props.cart.length) {
                props.cart.forEach(item => {
                    sumTotal += (item.price * item.buyQuantity);
                });

                sumTotal = (sumTotal / 100).toFixed(2);
            }

            return {
                sumTotal
            }
        }


        render() {
            return <View
                cart={this.props.cart}
                clearCart={::this.clearCart}
                sumTotal={this.state.sumTotal}
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