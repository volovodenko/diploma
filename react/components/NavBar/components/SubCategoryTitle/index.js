import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import fontAwesome from 'font-awesome/css/font-awesome.css';


export default props => (
    <Fragment>
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
        <li>{
            props.productPage
                ?
                <Link
                    to={
                        `/catalog/${props.car}/${props.carModel}/${props.carModelCategory}/${props.carModelSubCategory}`
                    }
                >
                    {props.subCategoryTitle}
                </Link>
                :
                props.subCategoryTitle
        }
        </li>
    </Fragment>
)