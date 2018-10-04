import React, {Component} from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import MobileController from '../../../../../../controllers/ComponentCotrollers/Header/MobileController';
import PhonesPopup from '../SectionRight/components/Phones/components/Popup';
import LoginPopup from '../../../MenuBar/Login/components/Popup';
import NavFilter from '../../../../../Main/components/Aside/NavFilter';
import Search from '../Search';


@MobileController()
export default class Mobile extends Component {

    render() {

        return (
            <div className={styles.mobile}>
                <i
                    className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-bars'],
                            fontAwesome['fa-lg'],
                            styles.bar
                        )
                    }
                    aria-hidden='true'
                    ref={this.props.navFilterIconRef}
                    onClick={this.props.setNavFilterPopupVisible}
                />
                <i
                    className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-phone'],
                            fontAwesome['fa-lg'],
                            styles.phone
                        )
                    }
                    aria-hidden='true'
                    ref={this.props.phonesIconRef}
                    onClick={this.props.setPhonesPopupVisible}

                />
                <i
                    className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-user'],
                            fontAwesome['fa-lg'],
                            styles.user
                        )
                    }
                    aria-hidden='true'
                    ref={this.props.userIconRef}
                    onClick={this.props.setUserPopupVisible}
                />
                <i
                    className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-search'],
                            fontAwesome['fa-lg'],
                            styles.search
                        )
                    }
                    aria-hidden='true'
                    ref={this.props.searchIconRef}
                    onClick={this.props.setSearchPopupVisible}
                />

                {this.props.phonesPopupVisible &&
                <PhonesPopup
                    headInfoFixed={this.props.headInfoFixed}
                    styles={styles}
                    phonesPopupRef={this.props.phonesPopupRef}
                />
                }

                {this.props.userPopupVisible &&
                <LoginPopup
                    userName={this.props.userName}
                    logout={this.props.logout}
                    styles={styles}
                    userPopupRef={this.props.userPopupRef}
                />
                }

                {this.props.navFilterPopupVisible &&
                <NavFilter
                    styles={styles}
                    navFilterPopupRef={this.props.navFilterPopupRef}
                />
                }

                {this.props.searchPopupVisible &&
                <Search
                    styles={styles}
                    searchPopupRef={this.props.searchPopupRef}
                    searchPopupVisible={this.props.searchPopupVisible}
                    setSearchPopupInvisible={this.props.setSearchPopupInvisible}
                />
                }

            </div>
        );
    }
}