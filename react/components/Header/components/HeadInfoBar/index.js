import React, {Component} from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import HeadInfoBarController from '../../../../controllers/ComponentCotrollers/Header/HeadInfoBarController';
import Logo from './components/Logo';
import Search from './components/Search';
import SectionRight from './components/SectionRight';
import Mobile from './components/Mobile';


@HeadInfoBarController()
export default class HeadInfoBar extends Component {

    render() {
        return (
            <section
                className={
                    classNames(
                        styles.wrapper,
                        this.props.headInfoFixed ? styles.fixed : null
                    )
                }
            >
                <div className={styles.info}>
                    <Logo headInfoFixed={this.props.headInfoFixed}/>
                    <div className={styles.adj}>
                        <Mobile headInfoFixed={this.props.headInfoFixed}/>
                        <Search headInfoFixed={this.props.headInfoFixed}/>
                        <SectionRight headInfoFixed={this.props.headInfoFixed}/>
                    </div>
                </div>
            </section>
        );
    }

}