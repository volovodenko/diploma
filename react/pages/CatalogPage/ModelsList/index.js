import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';
import Nav from '../helpers/Nav';


export default class ModelsList extends Component {

    constructor(props) {
        super(props);

        window.scrollTo(0, 0); //обнулить прокрутку
    }


    render() {

        return (
            <Fragment>
                <Nav {...this.props} />
                <ul className={styles.modelsList}>
                    {
                        this.props.carModelsCatalogLoaded
                            ? this.carModelsRender()
                            : null
                    }
                </ul>
            </Fragment>
        )

    }

    /***************************************************************************
     *
     **************************************************************************/


    carModelsRender() {
        const modelsList = this.props.carModelsCatalogList
            .find(item => item.car === this.props.car);

        return modelsList ?
            (
                modelsList.models.map(item => (
                    <li key={item.id}>
                        <Link to={`/catalog/${this.props.car}/${item.slug}`}>
                            <img src={`/storage/img/icons/car-models/${this.props.car}/${item.slug}.png`}/>
                            <span>{item.title}</span>
                        </Link>
                    </li>
                ))
            )
            : null
    }
}