import React, {Component} from 'react';


import styles from './styles.scss';
import ProductPageController from '../../controllers/PageControllers/ProductPageController';
import Image from './components/Image';
import Info from './components/Info';
import Nav from '../../components/NavBar';


@ProductPageController()
export default class ProductPage extends Component {

    render() {

        const {product} = {...this.props};

        return (
            <div className={styles.part}>
                {
                    this.props.navRender
                        ?
                        <Nav
                            {...this.props.historyNavData}
                            productPage={true}
                        />
                        : null
                }

                <h1>{product.title}</h1>

                <div className={styles.partItem}>
                    <Image product={product}/>
                    <Info {...this.props}/>
                </div>

            </div>
        )

    }
}