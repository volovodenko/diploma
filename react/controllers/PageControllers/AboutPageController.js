import React, {Component} from 'react';


import FetchFail from '../../components/FetchFail';
import AboutPageContainer from '../../containers/PageContainers/AboutPageContainer';


export default () => View => {

    @AboutPageContainer()
    class AboutPageController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.props.aboutContentLoaded || this.props.getAboutContent();
        }


        render() {

            if (this.props.aboutContentFetchFail) {
                return <FetchFail/>;
            }

            return <View
                aboutContent={this.props.aboutContent}
                aboutContentLoaded={this.props.aboutContentLoaded}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return AboutPageController;

}