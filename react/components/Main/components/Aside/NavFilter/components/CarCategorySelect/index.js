import React from 'react';
import classNames from 'classnames';


import styles from '../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../DropDown';
import Loader from '../../../../../../SelectLoader/index';


export default props => (
    <li
        className={
            props.carCategoriesFilterIsLoading
                ? null
                : styles[props.carCategoryClassName]
        }
    >
        <div className={styles.select} onClick={props.carCategoriesDropDownToggle}>
            <span>
                {props.carCategoryTitle.length ? props.carCategoryTitle : 'Выберите категорию'}
            </span>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-caret-down'],
                    )
                }
                aria-hidden='true'
            />
            {props.carCategoriesFilterIsLoading ? <Loader/> : null}
        </div>
        {
            props.carCategoryVisible
                ?
                props.carCategoriesFilterLoaded
                    ? <DropDown
                        selectTitle='Выберите категорию'
                        itemsList={
                            props.carCategoriesFilterList
                                .filter(item => item.parent_id === 0)
                        }
                        setItem={props.setCarCategory}
                        dropDownClose={props.carCategoriesDropDownToggle}
                    />
                    : null
                : null
        }
    </li>
)