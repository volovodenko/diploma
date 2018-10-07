import React, {Component} from 'react';


import MenuHeaderContainer from '../../../containers/ComponentContainers/Header/MenuHeaderContainer';


export default () => View => {

    @MenuHeaderContainer()
    class MenuHeaderController extends Component {

        constructor(props) {
            super(props);

            this.props.getMenu();
            this.props.getCars();

        }

        render() {
            return this.props.menuLoaded &&
                <View
                    menuList={this.props.menuList}
                />
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