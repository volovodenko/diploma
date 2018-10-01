import React, {Component, Fragment} from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DetailTabController from '../../../../controllers/ComponentCotrollers/Profile/DetailTabController';
import ucFirst from '../../../../helpers/ucFirst';
import FIO from './components/FIO';
import Phone from './components/Phone';
import DeliveryMethod from './components/DeliveryMethod';
import TransporterForm from './components/TransporterForm';
import Payment from './components/Payment';
import Buttons from './components/Buttons';
import DeliveryTabController from '../../../../controllers/ComponentCotrollers/Checkout/DeliveryTabController';


@DeliveryTabController()
@DetailTabController()
export default class DetailTab extends Component {

    render() {

        return (
            <Fragment>
                {
                    this.props.editMode ||
                    <button
                        className={styles.editButton}
                        onClick={this.props.enableEditMode}
                    >
                        Редактировать
                        <i
                            className={
                                classNames(
                                    fontAwesome.fa,
                                    fontAwesome['fa-pencil'],
                                    fontAwesome['fa-lg']
                                )
                            }
                            aria-hidden='true'
                        />
                    </button>
                }


                <ul className={styles.detail}>
                    <li className={styles.detailItem}>
                        <span className={styles.itemLeft}>Логин:</span>
                        <span className={styles.itemRight}>{ucFirst(this.props.userName)}</span>
                    </li>
                    <li className={styles.detailItem}>
                        <span className={styles.itemLeft}>E-mail:</span>
                        <span className={styles.itemRight}>{this.props.email}</span>
                    </li>

                    <FIO
                        fio={this.props.fio}
                        onChangeFio={this.props.onChangeFio}
                        editMode={this.props.editMode}
                        fioRef={this.props.fioRef}
                    />

                    <Phone
                        phone={this.props.currentPhone}
                        onChangePhone={this.props.onChangePhone}
                        editMode={this.props.editMode}
                        phoneRef={this.props.phoneRef}
                    />

                    <DeliveryMethod
                        currentDeliveryMethod={this.props.currentDeliveryMethod}
                        editMode={this.props.editMode}
                        deliveryMethodDropDownToggle={this.props.deliveryMethodDropDownToggle}
                        deliveryMethods={this.props.deliveryMethods}
                        setDeliveryMethod={this.props.setDeliveryMethod}
                        deliveryMethodDropDownVisible={this.props.deliveryMethodDropDownVisible}
                    />

                    {
                        this.props.transporterFormVisible &&
                        <TransporterForm {...this.props}/>
                    }

                    <Payment
                        editMode={this.props.editMode}
                        paymentsList={this.props.paymentsList}
                        payment={this.props.currentPayment}
                        onChangePayment={this.props.onChangePayment}
                        paymentDropDownVisible={this.props.paymentDropDownVisible}
                        paymentDropDownToggle={this.props.paymentDropDownToggle}
                    />
                </ul>

                {
                    this.props.editMode &&
                    <Buttons
                        saveDetail={this.props.saveDetail}
                        cancelEditDetail={this.props.cancelEditDetail}
                    />
                }

            </Fragment>
        )
    }

}