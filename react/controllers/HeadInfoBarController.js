import React, {Component} from 'react';


export default () => View => {

    class HeadInfoBarController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                headInfoFixed: false
            };

            this.handleScroll = ::this.handleScroll;
        }


        componentWillUnmount() {
            document.removeEventListener('scroll', this.handleScroll, false);
        }


        componentDidMount() {
            document.addEventListener('scroll', this.handleScroll, false);
        }


        render() {

            return <View
                headInfoFixed={this.state.headInfoFixed}
            />
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        handleScroll() {
            let currentScroll = window.pageYOffset;

            if (currentScroll >= 40 && !this.state.headInfoFixed) {
                this.setState({
                    headInfoFixed: true
                });
            }
            if (currentScroll < 40 && this.state.headInfoFixed) {
                this.setState({
                    headInfoFixed: false
                });

            }
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return HeadInfoBarController;

}