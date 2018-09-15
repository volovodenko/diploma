import React, {Component} from 'react';


import MenuFooterContainer from '../containers/MenuFooterContainer';


export default () => View => {

    @MenuFooterContainer()
    class MenuFooterController extends Component {

        render() {
            console.log('MenuFooterController');

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