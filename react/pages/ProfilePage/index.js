import React, {Component} from 'react';


import styles from './styles.scss';
import ProfilePageController from '../../controllers/PageControllers/ProfilePageController';
import ProfileTabs from '../../components/Pages/Profile/ProfileTabs';
import OrdersTab from '../../components/Pages/Profile/OrdersTab';
import DetailTab from '../../components/Pages/Profile/DetailTab';
import FavoriteTab from '../../components/Pages/Profile/FavoriteTab';
import PageLoader from '../../components/Loaders/PageLoader';


@ProfilePageController()
export default class ProfilePage extends Component {

    render() {

        return (
            <div className={styles.profile}>
                <h1>Личный кабинет</h1>

                <ProfileTabs activePage={this.props.activePage}/>

                <div className={styles.content}>

                    {
                        this.props.activePage === 1 &&
                        <OrdersTab/>
                    }
                    {
                        this.props.activePage === 2 &&
                        <DetailTab/>
                    }
                    {
                        this.props.activePage === 3 &&
                        <FavoriteTab/>
                    }

                </div>

                <PageLoader styles={styles}/>
            </div>
        )

    }
}