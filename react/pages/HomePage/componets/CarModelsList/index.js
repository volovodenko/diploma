import React from 'react';
import {Link} from 'react-router-dom';


export default ({carsList}) => (
    carsList
        .map(item => {
            return (
                <li key={item.id}>
                    <Link to={`/catalog/${item.slug}`}>
                        <img src={`/storage/img/icons/cars/${item.slug}.png`}/>
                        <span>{item.title}</span>
                    </Link>
                </li>
            )
        })
)