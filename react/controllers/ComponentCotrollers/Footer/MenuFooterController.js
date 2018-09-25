import React, {Component} from 'react';


import MenuFooterContainer from '../../../containers/ComponentContainers/Footer/MenuFooterContainer';


export default () => View => {

    @MenuFooterContainer()
    class MenuFooterController extends Component {

        render() {
            return this.props.menuLoaded
                ? <View
                    menuList={this.props.menuList}
                />
                : null
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return MenuFooterController;

}