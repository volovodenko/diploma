import React, {Component} from 'react';


import styles from './styles.scss';
import ProductPageController from '../../controllers/PageControllers/ProductPageController';
import Nav from '../../components/NavBar';
import ProductContent from '../../components/Pages/Product/ProductContent';
import PageLoader from '../../components/Loaders/PageLoader';


@ProductPageController()
export default class ProductPage extends Component {

    render() {

        const {product} = {...this.props};

        return (
            <div className={styles.part}>

                {
                    this.props.navRender &&
                    <Nav
                        {...this.props.historyNavData}
                        productPage={true}
                    />
                }

                {
                    product &&
                    <ProductContent {...this.props}/>
                }


                <PageLoader styles={styles}/>
            </div>
        )

    }
}