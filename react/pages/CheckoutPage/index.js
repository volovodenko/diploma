import React, {Component} from 'react';


import styles from './styles.scss';
import HeaderTabs from '../../components/Ckeckout/HeaderTabs';
import OrderTab from '../../components/Ckeckout/OrderTab';


// import Order from './components/Order';
import Payment from './components/Payment';
import Delivery from './components/Delivery';
import Finish from './components/Finish';
import Conclusion from './components/Conclusion';
import ErrorMessage from './components/ErrorMessage';
import CheckoutPageController from '../../controllers/PageControllers/CheckoutPageController';


@CheckoutPageController()
export default class CheckoutPage extends Component {

    render() {

        return (
            <div className={styles.checkout}>
                {
                    this.props.activePage !== 5
                        ? <HeaderTabs activePage={this.props.activePage}/>
                        : null
                }


                {
                    this.props.activePage === 1
                        ? <OrderTab {...this.props}/>
                        : null
                }
                {
                    this.props.activePage === 2
                        ? <Payment {...this.props}/>
                        : null
                }
                {
                    this.props.activePage === 3
                        ? <Delivery {...this.props}/>
                        : null
                }
                {
                    this.props.activePage === 4
                        ? <Finish {...this.props}/>
                        : null
                }
                {
                    this.props.activePage === 5
                        ? <Conclusion {...this.props}/>
                        : null
                }

                {
                    this.props.errorShow
                        ? <ErrorMessage {...this.props} />
                        : null
                }

            </div>
        )

    }
}