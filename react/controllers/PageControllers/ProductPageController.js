import React, {Component} from 'react';


import NotFoundPage from '../../pages/NotFoundPage/index';
import ProductPageContainer from '../../containers/PageContainers/ProductPageContainer';


export default () => View => {

    @ProductPageContainer()
    class ProductPageController extends Component {

        constructor(props) {
            super(props);

            let product = null;
            const partSlug = this.props.location.match.params.partSlug;

            if (this.props.productListLoaded) {
                this.props.productList.forEach(item => {
                    product = item.products.find(item => item.slug === partSlug)
                })
            }

            //если продукта нет в списке продуктов => загружаем
            if (!product) {
                this.props.getProductItem(partSlug);
                product = null;
            }


            this.state = {
                product,

                buyQuantity: '1',
                selectDropDownActive: false,
                dropDownVisible: false
            };


            window.scrollTo(0, 0); //обнулить прокрутку

            this.inputQuantity = React.createRef();
            this.dropDownArrow = React.createRef();
            this.dropDown = React.createRef();

            this.handleClickOutside = ::this.handleClickOutside;

        }


        componentWillUnmount() {
            document.removeEventListener('click', this.handleClickOutside, false);
            this.props.onClearProductItem();
        }


        componentDidMount() {
            document.addEventListener('click', this.handleClickOutside, false);
        }


        static getDerivedStateFromProps(props) {

            if (props.productItemLoaded) {
                return {
                    product: props.productItem
                }
            }

            return null;
        }


        render() {
            if (this.props.productItemFetchFail) {
                return <NotFoundPage/>
            }

            return this.state.product
                ? <View
                    product={this.state.product}
                    setDropDownActive={::this.setDropDownActive}
                    setDropDownInactive={::this.setDropDownInactive}
                    dropDownVisibleToggle={::this.dropDownVisibleToggle}
                    onChangeInput={::this.onChangeInput}
                    setBuyQuantity={::this.setBuyQuantity}
                    inputQuantityFocus={::this.inputQuantityFocus}
                    addToCart={::this.addToCart}
                    dropDownVisible={this.state.dropDownVisible}
                    selectDropDownActive={this.state.selectDropDownActive}
                    buyQuantity={this.state.buyQuantity}
                    inputQuantity={this.inputQuantity}
                    dropDownArrow={this.dropDownArrow}
                    dropDown={this.dropDown}
                />
                : null
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

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


        onChangeInput() {
            const buyQuantity = this.inputQuantity.current.value;

            if (!+buyQuantity && buyQuantity !== '') {
                return;
            }

            this.setState({
                buyQuantity
            })
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


        addToCart() {
            if (this.state.product.amount === 0 || this.state.buyQuantity === '') {
                return;
            }

            const order = {
                ...this.state.product,
                buyQuantity: +this.state.buyQuantity
            };

            this.props.onPutProductIntoCart(order);
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return ProductPageController;

}