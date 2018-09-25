import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';


export default props => {

    const mockArrayData = [];

    for (let i = 1; i <= 5; i++) {
        mockArrayData.push(i);
    }

    return (
        <ul
            className={classNames(
                styles.dropDown,
                props.styles.dropDown //относительное положение из родителя
            )}
            ref={props.dropDown}
        >
            {
                mockArrayData.map(item =>
                    <li key={item} onClick={props.setBuyQuantity(item)}>
                        {item}
                    </li>
                )
            }
            <li onClick={props.setBuyQuantity(10)}>10</li>
            <li onClick={props.inputQuantityFocus}>...</li>
        </ul>
    )
}