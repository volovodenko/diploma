import React, {Component, Fragment} from 'react';


import styles from './styles.scss';
import WarrantyPageController from '../../controllers/PageControllers/WarrantyPageController';
import PageLoader from '../../components/Loaders/PageLoader';


@WarrantyPageController()
export default class WarrantyPage extends Component {

    render() {
        const {paragraph1, paragraph2, paragraphList} = this.props.warrantyContent;

        return (
            <div className={styles.warranty}>
                <h1>Гарантия</h1>

                {this.props.warrantyContentLoaded &&

                <Fragment>
                    <p>
                        {paragraph1.title}
                    </p>
                    <ul className={styles.list}>
                        {paragraph1.list.map(item => (
                            <li key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p>
                        {paragraph2.title}
                    </p>
                    <ul className={styles.list}>
                        {paragraph2.list.map(item => (
                            <li key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {
                        paragraphList.map(item => (
                            <p key={item}>
                                {item}
                            </p>
                        ))
                    }

                </Fragment>
                }

                <PageLoader styles={styles}/>

            </div>

        )

    }
}