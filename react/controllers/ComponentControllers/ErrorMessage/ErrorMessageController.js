import React, {Component} from 'react';


import {TIMEOUT_ERROR_MESSAGE} from '../../../config';
import ErrorMessageContainer from '../../../containers/ComponentContainers/ErrorMessage/ErrorMessageContainer';


export default () => View => {

    @ErrorMessageContainer()
    class ErrorMessageController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                errorActive: false,
                errorVisible: false,
                errorMessage: '',

                errorFixed: false
            };

            this.handleScroll = ::this.handleScroll;
        }


        static getDerivedStateFromProps(props) {

            if (props.errorMessage.length) {
                props.onClearErrorMessage();

                return {
                    errorMessage: props.errorMessage,
                    errorActive: true,
                    errorVisible: true,
                }
            }

            return null;
        }


        shouldComponentUpdate(nextProps) {

            if (nextProps.errorMessage.length) {
                clearTimeout(this.timerId1);
                clearTimeout(this.timerId2);

                this.timerId1 = setTimeout(() => {
                    this.setState({
                        errorActive: false,
                    });


                    this.timerId2 = setTimeout(() => {
                        this.setState({
                            errorVisible: false,
                        });
                    }, 2000)

                }, TIMEOUT_ERROR_MESSAGE);
            }

            return true;
        }


        componentWillUnmount() {
            document.removeEventListener('scroll', this.handleScroll, false);
        }


        componentDidMount() {
            document.addEventListener('scroll', this.handleScroll, false);
        }


        render() {
            return this.state.errorVisible &&
                <View
                    errorMessage={this.state.errorMessage}
                    errorActive={this.state.errorActive}
                    errorFixed={this.state.errorFixed}
                />
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        handleScroll() {
            let currentScroll = window.pageYOffset;

            if (currentScroll >= 40 && !this.state.errorFixed) {
                this.setState({
                    errorFixed: true
                });
            }
            if (currentScroll < 40 && this.state.errorFixed) {
                this.setState({
                    errorFixed: false
                });

            }
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return ErrorMessageController;

}