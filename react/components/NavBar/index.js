import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import NavBarController from '../../controllers/ComponentCotrollers/Main/NavBarController';
import CarTitle from './components/CarTitle';
import ModelTitle from './components/ModelTitle';
import CategoryTitle from './components/CategoryTitle';
import SubCategoryTitle from './components/SubCategoryTitle';
import HeaderTitle from './components/HeaderTitle';


@NavBarController()
export default class NavBar extends Component {

    render() {

        return (
            <Fragment>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link to='/catalog'>
                                Каталог автозапчастей
                            </Link>
                        </li>
                        <li>
                            <i
                                className={
                                    classNames(
                                        fontAwesome.fa,
                                        fontAwesome['fa-angle-double-right'],
                                    )
                                }
                                aria-hidden='true'
                            />
                        </li>
                        <li><CarTitle {...this.props}/></li>


                        {
                            this.props.modelTitle &&
                            <ModelTitle {...this.props}/>
                        }

                        {
                            this.props.categoryTitle &&
                            <CategoryTitle {...this.props}/>
                        }

                        {
                            this.props.subCategoryTitle &&
                            <SubCategoryTitle {...this.props}/>
                        }


                    </ul>
                </nav>
                {
                    !this.props.productPage &&
                    <h1 className={styles.header}>
                        <HeaderTitle {...this.props}/>
                    </h1>
                }

            </Fragment>
        )

    }
}