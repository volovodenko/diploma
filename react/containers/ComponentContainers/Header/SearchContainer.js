import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onGetSearch, clearSearch
} from '../../../store/reducers/search/actions';
import {
    onClearNavHistory
} from '../../../store/reducers/nav/actions';



export default () => Controller => {

    const mapStateToProps = state => {
        return {
            searchList: state.search.searchList,
            searchLoaded: state.search.searchLoaded,
            searchIsLoading: state.search.searchIsLoading,
            searchFetchFails: state.search.searchFetchFails
        };
    };

    @connect(
        mapStateToProps,
        {
            onGetSearch, clearSearch,
            onClearNavHistory
        }
    )
    class SearchContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            searchList: PropTypes.array.isRequired,
            searchLoaded: PropTypes.bool.isRequired,
            searchIsLoading: PropTypes.bool.isRequired,
            searchFetchFails: PropTypes.bool.isRequired,

            onGetSearch: PropTypes.func.isRequired,
            clearSearch: PropTypes.func.isRequired,
            onClearNavHistory: PropTypes.func.isRequired,
        };
    }


    return SearchContainer;
}