import React, {Fragment} from 'react';
import classNames from 'classnames';


import fontAwesome from 'font-awesome/css/font-awesome.css';


const ArrowLeft = ({firstPage, prevPage}) => (
    <Fragment>
        <li onClick={firstPage}>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-angle-double-left'],
                        fontAwesome['fa-lg'],
                    )
                }
                aria-hidden='true'
            />
        </li>
        <li onClick={prevPage}>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-angle-left'],
                        fontAwesome['fa-lg'],
                    )
                }
                aria-hidden='true'
            />
        </li>
    </Fragment>
);

export default ArrowLeft;