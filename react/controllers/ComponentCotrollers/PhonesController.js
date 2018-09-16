import React, {Component} from 'react';


export default () => View => {

    class PhonesController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                popupVisible: false
            }
        }

        render() {
            return <View
                popupSetVisible={::this.popupSetVisible}
                popupSetInvisible={::this.popupSetInvisible}
                headInfoFixed={this.props.headInfoFixed}
                popupVisible={this.state.popupVisible}
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

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return PhonesController;

}