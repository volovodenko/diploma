import React, {Component} from 'react';


import styles from './styles.scss';
import AboutPageController from '../../controllers/PageControllers/AboutPageController';
import PageLoader from '../../components/Loaders/PageLoader';


@AboutPageController()
export default class AboutPage extends Component {

    render() {
        const {paragraphList} = this.props.aboutContent;

        return (
            <div className={styles.about}>
                <h1>О компании</h1>

                {this.props.aboutContentLoaded &&
                paragraphList.map(item => (
                    <p key={item}>
                        {item}
                    </p>
                ))}

                <PageLoader styles={styles}/>

            </div>

        )

    }
}