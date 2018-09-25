import React, {Component} from 'react';


import HomePageContainer from '../../containers/PageContainers/HomePageContainer';


export default () => View => {

    @HomePageContainer()
    class HomePageController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.state = {
                numInvisibleItems: 0,
                carsList: []
            };

            this.contentRef = React.createRef();
            this.updateDimensions = ::this.updateDimensions;
        }


        static getDerivedStateFromProps(props, state) {
            if (props.carsLoaded && !state.carsList.length) {
                return {
                    carsList: props.carsList
                }
            }

            return null;
        }


        componentDidUpdate() {
            if (this.props.carsLoaded && !this.state.numInvisibleItems) {
                this.updateDimensions();
            }
        }

        componentDidMount() {
            window.addEventListener('resize', this.updateDimensions);
            this.updateDimensions();
        }


        componentWillUnmount() {
            window.removeEventListener('resize', this.updateDimensions);
        }


        render() {

            return <View
                carsList={this.state.carsList}
                contentRef={this.contentRef}
                fakeList={this.getFakeList()}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        updateDimensions() {
            const numItemsInRow = Math.floor(this.contentRef.current.offsetWidth / 180);
            const numLastRowItems = this.props.carsList.length % numItemsInRow;
            const numInvisibleItems = numLastRowItems === 0 ? 0 : numItemsInRow - numLastRowItems;

            if (numInvisibleItems !== this.state.numInvisibleItems) {
                this.setState({
                    numInvisibleItems
                });
            }
        }


        getFakeList() {
            const fakeList = [];

            for (let i = 1; i <= this.state.numInvisibleItems; i++) {
                fakeList.push(i);
            }


            return fakeList;
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return HomePageController;

}