import React from 'react';
import {Link} from 'react-router-dom';


export default props =>
    props.modelTitle
        ?
        <Link to={`/catalog/${props.car}`}>
            {props.carTitle}
        </Link>
        : props.carTitle;