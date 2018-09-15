import React, {Component} from 'react';


import HomePageContainer from '../containers/HomePageContainer';


export default () => View => {

    @HomePageContainer()
    class HomePageController extends Component {

        constructor(props) {
            super(props);

            if (!this.props.carsLoaded){
                this.props.getCars();
            }

            window.scrollTo(0, 0); //обнулить прокрутку
        }

        render() {
            console.log('HomePageController');
            return <View
                carsLoaded={this.props.carsLoaded}
                carsList={this.props.carsList}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return HomePageController;

}