import React, {Component} from 'react';


export default () => View => {

    class DropDownController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                itemsList: this.props.itemsList
            };

            this.dropDownRef = React.createRef();
            this.inputSearchRef = React.createRef();

            this.handleClickOutside = ::this.handleClickOutside;
        }


        componentWillUnmount() {
            document.removeEventListener('click', this.handleClickOutside, false);
        }


        componentDidMount() {
            document.addEventListener('click', this.handleClickOutside, false);
        }


        render() {
            return <View
                dropDownRef={this.dropDownRef}
                onSearch={::this.onSearch}
                inputSearchRef={this.inputSearchRef}
                onKeyDown={::this.onKeyDown}
                searchVisible={this.props.searchVisible}
                itemsList={this.state.itemsList}
                setItem={this.props.setItem}

                styles={this.props.styles}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        handleClickOutside(e) {
            e.composedPath().includes(this.dropDownRef.current) || this.props.dropDownClose();
        }

        onSearch() {

            const search = this.inputSearchRef.current.value.toLowerCase();

            const itemsList = this.props.itemsList
                .filter(item => item.title.toLowerCase().indexOf(search) !== -1);

            this.setState(() => ({
                itemsList
            }));

        }

        onKeyDown(e) {
            !(e.keyCode === 27) || this.props.dropDownClose();
        }


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return DropDownController;

}