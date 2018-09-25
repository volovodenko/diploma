import React, {Fragment} from 'react';
import classNames from 'classnames';


import fontAwesome from 'font-awesome/css/font-awesome.css';


const ArrowRight = ({nextPage, lastPage}) => (
    <Fragment>
        <li onClick={nextPage}>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-angle-right'],
                        fontAwesome['fa-lg'],
                    )
                }
                aria-hidden='true'
            />
        </li>
        <li onClick={lastPage}>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-angle-double-right'],
                        fontAwesome['fa-lg'],
                    )
                }
                aria-hidden='true'
            />
        </li>
    </Fragment>
);

export default ArrowRight;