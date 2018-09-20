import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getMenu
} from '../../store/reducers/menu/actions';
import {
    getCars
} from '../../store/reducers/car/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            menuList: state.menu.menuList,
            menuLoaded: state.menu.menuLoaded,
        };
    };

    @connect(
        mapStateToProps,
        {
            getMenu, getCars
        }
    )
    class MenuHeaderContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            menuLoaded: PropTypes.bool.isRequired,
            menuList: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired
            })).isRequired,

            getMenu: PropTypes.func.isRequired,
            getCars: PropTypes.func.isRequired,
        };
    }


    return MenuHeaderContainer;
}