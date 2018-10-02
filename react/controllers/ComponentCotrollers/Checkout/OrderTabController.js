import React, {Component} from 'react';


import OrderTabContainer from '../../../containers/ComponentContainers/Checkout/OrderTabContainer';


export default () => View => {

    @OrderTabContainer()
    class OrderTabController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.state = {
                phone: this.props.phone,
                fio: this.props.fio,
                comment: this.props.comment,
            };

            this.phoneRef = React.createRef();
            this.fioRef = React.createRef();
            this.commentRef = React.createRef();
        }


        shouldComponentUpdate(nextProps) {

            if (!this.props.userLoggedIn && nextProps.userLoggedIn) {
                //если пользоваттель залогинился на этой вкладке
                this.setState({
                    phone: nextProps.phone,
                    fio: nextProps.fio,
                    comment: nextProps.comment,
                });

                return false;
            }

            return true;
        }


        componentWillUnmount() {
            const data = {
                phone: this.state.phone,
                fio: this.state.fio.trim(),
                comment: this.state.comment.trim(),
            };

            this.props.onSaveOrderTab(data);
        }


        render() {
            return <View
                //From OrderTabController (Local)
                phoneRef={this.phoneRef}
                phone={this.state.phone}
                onChangePhone={::this.onChangePhone}

                fioRef={this.fioRef}
                fio={this.state.fio}
                onChangeFio={::this.onChangeFio}

                commentRef={this.commentRef}
                comment={this.state.comment}
                onChangeComment={::this.onChangeComment}

                cart={this.props.cart}
                sumTotal={this.props.sumTotal}

                userLoggedIn={this.props.userLoggedIn}

                //From CheckoutPageController
                activePage={this.props.activePage}
                nextPage={::this.nextPage}

                loginFormShow={this.props.loginFormShow}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

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


        nextPage() {
            if (!this.props.cart.length || this.getErrorPage()) {
                return;
            }

            this.props.nextPage();
        }


        getErrorPage() {
            const re = /\+380-\d{2}-\d{3}-\d{2}-\d{2}/;
            const errorPhone = !re.test(this.state.phone);

            const errorFio = this.state.fio.trim().split(' ').length < 2;


            if (errorPhone) {
                this.props.onSaveErrorMessage({
                    message: 'Введите номер телефона в указанном формате'
                });

                return errorPhone;
            }

            if (errorFio) {
                this.props.onSaveErrorMessage({
                    message: 'Введите имя и фамилию'
                });

                return errorFio;
            }


            return false;
        }


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return OrderTabController;

}