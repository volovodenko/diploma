import React, {Component} from 'react';


import SearchContainer from '../../../containers/ComponentContainers/Header/SearchContainer';


export default () => View => {

    @SearchContainer()
    class SearchController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                clearIconVisible: false,
                dropDownVisible: false
            };

            this.inputSearch = React.createRef();
            this.formSearch = React.createRef();
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
                headInfoFixed={this.props.headInfoFixed}
                onChangeInput={::this.onChangeInput}
                inputSearch={this.inputSearch}
                formSearch={this.formSearch}
                clearIconVisible={this.state.clearIconVisible}
                onClearInput={::this.onClearInput}
                setInputValue={::this.setInputValue}
                dropDownVisible={this.state.dropDownVisible}
                searchList={this.props.searchList}
                searchIsLoading={this.props.searchIsLoading}
                searchLoaded={this.props.searchLoaded}
                linkClick={::this.linkClick}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        handleClickOutside(e) {
            if (!e.composedPath().includes(this.formSearch.current) && this.state.dropDownVisible) {
                this.setDropDownInvisible();
                this.clearInput();
            }
        }

        linkClick(){
            this.props.onClearNavHistory();
        }

        onChangeInput() {
            clearTimeout(this.timerId);
            let search = this.inputSearch.current.value.trim().toLowerCase();

            //Введен хоть один символ в инпуте - отобразить крестик
            //удалены символы - спрятать крестик
            if (!this.state.clearIconVisible && search.length) {

                this.setState({clearIconVisible: true});

            } else if (this.state.clearIconVisible && !search.length) {

                this.setState({clearIconVisible: false});

            }

            if (search.length) {
                const data = {
                    search
                };

                this.timerId = setTimeout(() => {
                    this.props.onGetSearch(data);
                }, 500);
            }

            this.setDropDownVisible();

        }


        setDropDownVisible(){
            this.state.dropDownVisible || this.setState({dropDownVisible: true});
        }


        setDropDownInvisible(){
            !this.state.dropDownVisible || this.setState({dropDownVisible: false});
        }


        onClearInput(){
            this.clearInput();
            this.inputSearch.current.focus();
        }


        clearInput() {
            this.inputSearch.current.value = '';
            this.setState({clearIconVisible: false});
            this.props.clearSearch();
        }


        setInputValue(e) {
            this.inputSearch.current.value = e.currentTarget.innerHTML;

            this.state.clearIconVisible || this.setState({clearIconVisible: true});
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return SearchController;

}