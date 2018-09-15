import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default () => View => {

    class NavFilterDropDownController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                itemsList: this.props.itemsList
            };

            this.inputSearch = React.createRef();
        }


        componentDidMount() {
            this.inputSearch.current.focus();
        }


        render() {

            return <View
                onChangeInput={::this.onChangeInput}
                keyDown={::this.keyDown}
                inputSearch={this.inputSearch}
                itemsList={this.state.itemsList}
                itemsListEqual={this.itemsListEqual()}
                setItem={::this.setItem}
                selectTitle={this.props.selectTitle}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        onChangeInput() {
            let val = this.inputSearch.current.value.trim();
            let itemsList = this.props.itemsList.filter(item => item.title.toLowerCase().indexOf(val) !== -1);

            if (!itemsList.length) {
                itemsList = [{
                    id: -1,
                    title: `Не найдено "${val}"`
                }];
            }

            this.setState({
                itemsList
            });

        }


        keyDown(e) {
            if (e.keyCode === 27) {
                this.props.dropDownClose();
            }
        }


        itemsListEqual() {
            return this.state.itemsList.length === this.props.itemsList.length
        }


        setItem = (...props) => () => this.props.setItem(...props);


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/

        static propTypes = {
            itemsList: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
                car_id: PropTypes.number,
                car_model_id: PropTypes.number,
                car_category_id: PropTypes.number,
                parent_id: PropTypes.number,
            })).isRequired
        };
    }

    return NavFilterDropDownController;

}