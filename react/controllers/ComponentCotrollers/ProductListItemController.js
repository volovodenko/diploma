import React, {Component} from 'react';

import ProductListItemContainer from '../../containers/ComponentContainers/ProductListItemContainer';


export default () => View => {

    @ProductListItemContainer()
    class ProductListItemController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                buyQuantity: '1',
                selectDropDownActive: false,
                dropDownVisible: false
            };

            this.inputQuantity = React.createRef();
            this.dropDownArrow = React.createRef();
            this.dropDown = React.createRef();

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
                addToCart={::this.addToCart}
                onChangeInput={::this.onChangeInput}
                setDropDownActive={::this.setDropDownActive}
                dropDownVisibleToggle={::this.dropDownVisibleToggle}
                dropDownVisible={this.state.dropDownVisible}
                selectDropDownActive={this.state.selectDropDownActive}
                buyQuantity={this.state.buyQuantity}
                inputQuantity={this.inputQuantity}
                dropDownArrow={this.dropDownArrow}
                dropDown={this.dropDown}
                setBuyQuantity={::this.setBuyQuantity}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        handleClickOutside(e) {
            if (
                !e.composedPath().includes(this.inputQuantity.current)
                && !e.composedPath().includes(this.dropDown.current)
                && this.state.selectDropDownActive
            ) {

                if (this.state.buyQuantity === '') {
                    this.setState({
                        buyQuantity: '1'
                    })
                }

                this.setDropDownInactive();
            }


            if (
                !e.composedPath().includes(this.dropDownArrow.current)
                && this.state.dropDownVisible
            ) {
                this.dropDownVisibleToggle();
            }
        }


        onChangeInput() {
            const buyQuantity = this.inputQuantity.current.value;

            if (!+buyQuantity && buyQuantity !== '') {
                return;
            }

            this.setState({
                buyQuantity
            })
        }


        setDropDownActive() {
            if (!this.state.selectDropDownActive) {
                this.setState({
                    selectDropDownActive: true
                })
            }
        }


        setDropDownInactive() {
            if (this.state.selectDropDownActive) {
                this.setState({
                    selectDropDownActive: false
                })
            }
        }


        dropDownVisibleToggle() {
            this.setState({
                dropDownVisible: !this.state.dropDownVisible
            })
        }


        addToCart() {
            if (this.props.item.amount === 0 || this.state.buyQuantity === '') {
                return;
            }

            const order = {
                ...this.props.item,
                buyQuantity: +this.state.buyQuantity
            };

            this.props.onPutProductIntoCart(order);
        }


        setBuyQuantity = buyQuantity => () => {
            this.setState({
                buyQuantity
            })
        };


        inputQuantityFocus() {
            this.setDropDownActive();
            this.inputQuantity.current.focus();

        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return ProductListItemController;

}