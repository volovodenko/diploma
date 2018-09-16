import React, {Component} from 'react';


import MenuHeaderContainer from '../../containers/ComponentContainers/MenuHeaderContainer';


export default () => View => {

    @MenuHeaderContainer()
    class MenuHeaderController extends Component {

        constructor(props) {
            super(props);

            this.props.getMenu();

        }

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

    return MenuHeaderController;

}