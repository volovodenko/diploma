import React from 'react';
import classNames from 'classnames';


import styles from '../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../DropDown';


export default props => (
    <li className={styles[props.carSubCategoryClassName]}>
        <div className={styles.select} onClick={props.carSubCategoriesDropDownToggle}>
            <span>
                {props.carSubCategoryTitle.length ? props.carSubCategoryTitle : 'Выберите подкатегорию'}
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
        </div>
        {
            props.carSubCategoryVisible
                ?
                <DropDown
                    selectTitle='Выберите подкатегорию'
                    itemsList={
                        props.carCategoriesFilterList
                            .filter(item => item.parent_id === props.carCategoryId)
                    }
                    setItem={props.setCarSubCategory}
                    dropDownClose={props.carSubCategoriesDropDownToggle}
                />
                : null
        }
    </li>
)