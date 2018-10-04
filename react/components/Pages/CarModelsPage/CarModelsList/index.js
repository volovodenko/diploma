import React from 'react';
import {Link} from 'react-router-dom';


const CarModelsList = (props) => props.carModelsList.map(item => (
    <li key={item.id}>
        <Link to={`/catalog/${props.car}/${item.slug}`}>
            <img src={`/storage/img/icons/car-models/${props.car}/${item.slug}.png`}/>
            <span>{item.title}</span>
        </Link>
    </li>
));


export default CarModelsList;