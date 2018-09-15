import React from 'react';
import {Link} from 'react-router-dom';


export default props => {
    const carModel = props.carCategoriesCatalogList
        .find(item => item.carModel === props.carModel);

    return carModel ?
        (
            carModel.categories
                .filter(item => item.parent_id === 0)
                .map(item => (
                    <li key={item.id}>
                        <Link to={`/catalog/${props.car}/${props.carModel}/${item.slug}`}>
                            <img src={`/storage/img/icons/car-categories/${item.slug}.png`}/>
                            <span>{item.title}</span>
                        </Link>
                    </li>
                ))
        )
        : null;

}