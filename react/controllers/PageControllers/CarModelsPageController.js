import React, {Component} from 'react';


import CarModelsPageContainer from '../../containers/PageContainers/CarModelsPageContainer';
import NotFound from '../../pages/NotFoundPage/index';
import getFakeList from '../../helpers/getFakeList';


export default () => View => {

    @CarModelsPageContainer()
    class CarModelsPageController extends Component {

        constructor(props) {
            super(props);

            this.car = this.props.location.match.params.car;

            this.props.onSaveHistorySlug({car: this.car});

            this.props.carsLoaded || this.props.getCars();

            //если список моделей для этой машины не загружен => загрузить список моделей для этой машины
            if (!this.props.carModelsCatalogList.some(item => item.car === this.car)) {
                const data = {slug: this.car};

                this.props.getCarModelsCatalog(data);
            }

            window.scrollTo(0, 0); //обнулить прокрутку


            this.state = {
                numInvisibleItems: 0,
                carModelsList: []
            };

            this.catalogRef = React.createRef();
            this.updateDimensions = ::this.updateDimensions;

        }


        static getDerivedStateFromProps(props) {
            const currentCar = props.location.match.params.car;

            const modelsList = props.carModelsCatalogList
                .find(item => item.car === currentCar);
            const carModelsList = modelsList ? modelsList.models : [];

            return {
                carModelsList,
            };

        }


        componentWillUnmount() {
            !this.props.carModelsCatalogFetchFail || this.props.onClearFetchErrors();
            window.removeEventListener('resize', this.updateDimensions);
        }


        componentDidUpdate() {
            if (this.props.carModelsCatalogLoaded && !this.state.numInvisibleItems) {
                this.updateDimensions();
            }
        }


        componentDidMount() {
            window.addEventListener('resize', this.updateDimensions);
            this.updateDimensions();
        }


        render() {
            if (this.props.carModelsCatalogFetchFail) {
                return <NotFound/>;
            }

            return <View
                carModelsList={this.state.carModelsList}
                car={this.car}
                catalogRef={this.catalogRef}
                fakeList={getFakeList(this.state.numInvisibleItems)}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        updateDimensions() {
            const numItemsInRow = Math.floor(this.catalogRef.current.offsetWidth / 190);
            const numLastRowItems = this.state.carModelsList.length % numItemsInRow;
            const numInvisibleItems = numLastRowItems === 0 ||
            this.state.carModelsList.length <= numItemsInRow
                ? 0
                : numItemsInRow - numLastRowItems;

            if (numInvisibleItems !== this.state.numInvisibleItems) {
                this.setState({
                    numInvisibleItems
                });
            }
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CarModelsPageController;

}