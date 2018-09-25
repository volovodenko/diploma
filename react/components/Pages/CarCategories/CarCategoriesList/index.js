import React from 'react';
import {Link} from 'react-router-dom';


export default props => props.carCategoriesList.map(item => (
    <li key={item.id}>
        <Link to={`/catalog/${props.car}/${props.carModel}/${item.slug}`}>
            <img src={`/storage/img/icons/car-categories/${item.slug}.png`}/>
            <span>{item.title}</span>
        </Link>
    </li>
));