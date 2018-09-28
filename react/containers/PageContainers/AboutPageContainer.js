import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getAboutContent
} from '../../store/reducers/pageContent/actions';



export default () => Controller => {

    const mapStateToProps = state => {
        return {
            aboutContent: state.pageContent.aboutContent,
            aboutContentLoaded: state.pageContent.aboutContentLoaded,
            aboutContentFetchFail: state.pageContent.aboutContentFetchFail,
        };
    };

    @connect(
        mapStateToProps,
        {
            getAboutContent
        }
    )
    class AboutPageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            aboutContent: PropTypes.object.isRequired,
            aboutContentLoaded: PropTypes.bool.isRequired,
            aboutContentFetchFail: PropTypes.bool.isRequired,


            getAboutContent: PropTypes.func.isRequired,
        };
    }


    return AboutPageContainer;
}