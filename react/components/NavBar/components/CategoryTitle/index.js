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
        <li>
            {
                props.subCategoryTitle
                    ?
                    <Link
                        to={`/catalog/${props.car}/${props.carModel}/${props.carModelCategory}`}
                    >
                        {props.categoryTitle}
                    </Link>
                    : props.categoryTitle
            }
        </li>
    </Fragment>
)