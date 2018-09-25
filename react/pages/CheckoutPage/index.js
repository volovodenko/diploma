import React, {Component} from 'react';


import styles from './styles.scss';
import HeaderTabs from '../../components/Pages/Ckeckout/HeaderTabs';
import OrderTab from '../../components/Pages/Ckeckout/OrderTab';
import PaymentTab from '../../components/Pages/Ckeckout/PaymentTab';
import DeliveryTab from '../../components/Pages/Ckeckout/DeliveryTab';
import FinishTab from '../../components/Pages/Ckeckout/FinishTab';
import ConclusionTab from '../../components/Pages/Ckeckout/ConclusionTab';
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
                        ? <OrderTab
                            activePage={this.props.activePage}
                            nextPage={this.props.nextPage}
                        />
                        : null
                }
                {
                    this.props.activePage === 2
                        ? <PaymentTab
                            prevPage={this.props.prevPage}
                            nextPage={this.props.nextPage}
                        />
                        : null
                }
                {
                    this.props.activePage === 3
                        ? <DeliveryTab
                            prevPage={this.props.prevPage}
                            nextPage={this.props.nextPage}
                        />
                        : null
                }
                {
                    this.props.activePage === 4
                        ? <FinishTab
                            activePage={this.props.activePage}
                            prevPage={this.props.prevPage}
                            nextPage={this.props.nextPage}
                        />
                        : null
                }
                {
                    this.props.activePage === 5
                        ? <ConclusionTab/>
                        : null
                }

            </div>
        )

    }
}