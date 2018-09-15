import React, {Component} from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import PhonesController from '../../../../../../../../controllers/PhonesController';
import Popup from './components/Popup/index';


@PhonesController()
export default class Phones extends Component {

    render() {

        return (
            <div
                className={styles.phones}
                onMouseEnter={this.props.popupSetVisible}
                onMouseLeave={this.props.popupSetInvisible}
            >
                <div
                    className={
                        classNames(
                            styles.container,
                            this.props.headInfoFixed ? styles.fixed : null,
                        )
                    }
                >
                    <div className={styles.phone}>
                        <i
                            className={
                                classNames(
                                    styles.logo,
                                    styles.kyivstar,
                                )
                            }
                        />
                        <span>(067) 777-77-77</span>
                    </div>
                    <div className={styles.phone}>
                        <i
                            className={
                                classNames(
                                    styles.logo,
                                    styles.mts,
                                )
                            }
                        />
                        <span>(050) 777-77-77</span>
                    </div>
                </div>
                <i
                    className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-caret-down'],
                            styles.caretDown
                        )
                    }
                    aria-hidden='true'
                />

                {
                    this.props.popupVisible
                        ? <Popup headInfoFixed={this.props.headInfoFixed}/>
                        : null
                }

            </div>
        );
    }

}