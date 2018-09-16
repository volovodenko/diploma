import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            menuList: state.menu.menuList,
            menuLoaded: state.menu.menuLoaded,
        };
    };

    @connect(
        mapStateToProps,
        null
    )
    class MenuFooterContainer extends Component {

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
        };
    }


    return MenuFooterContainer;
}