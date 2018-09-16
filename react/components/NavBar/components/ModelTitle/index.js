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
                props.categoryTitle || props.productPage
                    ?
                    <Link to={`/catalog/${props.car}/${props.carModel}`}>
                        {props.modelTitle}
                    </Link>
                    :
                    props.modelTitle
            }
        </li>
    </Fragment>
)