import React, {Component} from 'react';


import HomePageContainer from '../../containers/PageContainers/HomePageContainer';


export default () => View => {

    @HomePageContainer()
    class HomePageController extends Component {

        constructor(props) {
            super(props);

            if (!this.props.carsLoaded) {
                this.props.getCars();
            }

            window.scrollTo(0, 0); //обнулить прокрутку
        }


        render() {
            return <View
                carsList={this.getCarsList()}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        getCarsList(){
            return this.props.carsLoaded ? this.props.carsList : []
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return HomePageController;

}