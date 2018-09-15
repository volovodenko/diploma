import React, {Component} from 'react';


import CartContainer from '../containers/CartContainer';


export default () => View => {

    @CartContainer()
    class CartItemController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                buyQuantity: this.props.item.buyQuantity
            };


            this.inputQuantity = React.createRef();

            this.handleClickOutside = ::this.handleClickOutside;

        }


        componentWillUnmount() {
            document.removeEventListener('click', this.handleClickOutside, false);
        }


        componentDidMount() {
            document.addEventListener('click', this.handleClickOutside, false);
        }


        render() {

            return <View
                item={this.props.item}
                buyQuantity={this.state.buyQuantity}
                inputQuantity={this.inputQuantity}
                deleteItem={::this.deleteItem}
                onChangeQuantity={::this.onChangeQuantity}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        onChangeQuantity() {
            let buyQuantity = this.inputQuantity.current.value;

            if (!+buyQuantity && buyQuantity !== '') {
                return;
            }

            this.setState({
                buyQuantity
            });


            //если число больше нуля -> сохраняем в корзину
            if (+buyQuantity) {
                const data = {
                    id: this.props.item.id,
                    buyQuantity: +buyQuantity
                };

                this.props.onChangeProductBuyQuantity(data);
            }

        }

        handleClickOutside(e) {
            if (!e.composedPath().includes(this.inputQuantity.current) && this.state.buyQuantity === '') {
                this.setState({
                    buyQuantity: this.props.item.buyQuantity
                })

            }
        }

        deleteItem() {
            this.props.onDeleteProductItemFromCart({id: this.props.item.id});
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CartItemController;

}