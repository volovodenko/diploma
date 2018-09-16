import React, {Component} from 'react';

import CarModelsPageContainer from '../../containers/PageContainers/CarModelsPageContainer';
import NotFound from '../../pages/NotFoundPage/index';


export default () => View => {

    @CarModelsPageContainer()
    class CarModelsPageController extends Component {

        constructor(props) {
            super(props);

            this.car = this.props.location.match.params.car;


            if (!this.props.carsLoaded){
                this.props.getCars();
            }

            //если список моделей для этой машины не загружен => загрузить список моделей для этой машины
            if (!this.props.carModelsCatalogList.some(item => item.car === this.car)) {
                const data = {slug: this.car};

                this.props.getCarModelsCatalog(data);
            }

            window.scrollTo(0, 0); //обнулить прокрутку

        }


        componentWillUnmount() {
            if (this.props.carModelsCatalogFetchFail) {
                this.props.onClearFetchErrors();
            }
        }


        render() {
            if (this.props.carModelsCatalogFetchFail) {
                return <NotFound/>;
            }

            return <View
                carModelsList={this.getModelsList()}
                car={this.car}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        getModelsList() {
            const modelsList = this.props.carModelsCatalogList
                .find(item => item.car === this.car);

            return modelsList ? modelsList.models : []
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CarModelsPageController;

}