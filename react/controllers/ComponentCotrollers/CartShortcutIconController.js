import React, {Component} from 'react';


import CartShortcutIconContainer from '../../containers/ComponentContainers/CartShortcutIconContainer';
import {TIMEOUT_RESET_POPUP_PRODUCT_TO_CART_ADDED} from '../../config/index';


export default () => View => {

    @CartShortcutIconContainer()
    class CartShortcutIconController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                popupVisible: false,
                productCount: 0,
                sumTotal: 0
            }
        }


        static getDerivedStateFromProps(props) {
            let productCount = 0;
            let sumTotal = 0;

            if (props.cart.length) {

                props.cart.forEach(item => {
                    productCount += item.buyQuantity;
                    sumTotal += (item.price * item.buyQuantity);
                });

                sumTotal = (sumTotal / 100).toFixed(2);

            }

            return {
                productCount,
                sumTotal
            }
        }


        render() {
            return <View
                headInfoFixed={this.props.headInfoFixed}
                popupVisible={this.state.popupVisible}
                popupSetVisible={::this.popupSetVisible}
                popupSetInvisible={::this.popupSetInvisible}
                productCount={this.state.productCount}
                productToCartAdded={this.props.productToCartAdded}
                sumTotal={this.state.sumTotal}
                setTimer={::this.setTimer}
                clearTimer={::this.clearTimer}
                onResetProductToCartAdded={this.props.onResetProductToCartAdded}
                productTitleToCartAdded={this.props.productTitleToCartAdded}
                cart={this.props.cart}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        popupSetVisible() {
            if (!this.state.popupVisible) {
                this.setState(() => ({
                    popupVisible: true
                }))
            }

        }

        popupSetInvisible() {
            this.setState(() => ({
                popupVisible: false
            }))
        }


        setTimer() {
            this.timerId = setTimeout(() => {
                this.props.onResetProductToCartAdded();
            }, TIMEOUT_RESET_POPUP_PRODUCT_TO_CART_ADDED);
        }


        clearTimer() {
            clearTimeout(this.timerId);
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CartShortcutIconController;

}