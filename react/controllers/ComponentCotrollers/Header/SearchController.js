import React, {Component} from 'react';


export default () => View => {

    class SearchController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                clearIconVisible: false,
            };

            this.inputSearch = React.createRef();
        }


        render() {
            return <View
                headInfoFixed={this.props.headInfoFixed}
                onChangeInput={::this.onChangeInput}
                inputSearch={this.inputSearch}
                clearIconVisible={this.state.clearIconVisible}
                clearInput={::this.clearInput}
                setInputValue={::this.setInputValue}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        onChangeInput() {
            let val = this.inputSearch.current.value.trim();

            //Введен хоть один символ в инпуте - отобразить крестик
            //удалены символы - спрятать крестик
            if (!this.state.clearIconVisible && val.length) {

                this.setState({clearIconVisible: true});

            } else if (this.state.clearIconVisible && !val.length) {

                this.setState({clearIconVisible: false});

            }

        }


        clearInput() {
            this.inputSearch.current.value = '';
            this.inputSearch.current.focus();
            this.setState({clearIconVisible: false});
        }


        setInputValue(e) {
            this.inputSearch.current.value = e.currentTarget.innerHTML;

            if (!this.state.clearIconVisible) {
                this.setState({clearIconVisible: true});
            }
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return SearchController;

}