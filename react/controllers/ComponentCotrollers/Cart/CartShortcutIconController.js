import React, {Component} from 'react';


import CartShortcutIconContainer from '../../../containers/ComponentContainers/Header/CartShortcutIconContainer';


export default () => View => {

    @CartShortcutIconContainer()
    class CartShortcutIconController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                popupVisible: false,
                productCount: 0,
            }
        }


        static getDerivedStateFromProps(props) {
            let productCount = 0;

            if (props.cart.length) {

                props.cart.forEach(item => {
                    productCount += item.buyQuantity;
                });

            }

            return {
                productCount,
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
                sumTotal={this.props.sumTotal}
                onResetProductToCartAdded={this.props.onResetProductToCartAdded}
                productTitleToCartAdded={this.props.productTitleToCartAdded}
                cart={this.props.cart}
                onCheckout={::this.onCheckout}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        popupSetVisible() {
            if (document.documentElement.offsetWidth <= 800) {
                return;
            }

            this.state.popupVisible ||
            this.setState(() => ({
                popupVisible: true
            }));
        }

        popupSetInvisible() {
            this.setState(() => ({
                popupVisible: false
            }))
        }

        onCheckout(e) {
            if (!this.props.cart.length) {
                e.preventDefault();

                this.props.onSaveErrorMessage({
                    message: 'Корзина пуста'
                })
            }
        }


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CartShortcutIconController;

}