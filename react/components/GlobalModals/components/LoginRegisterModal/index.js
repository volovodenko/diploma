import React, {Component} from 'react';
import Modal from 'react-responsive-modal';


import styles from './styles.scss';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import LoginRegisterModalController from '../../../../controllers/ComponentCotrollers/LoginRegisterModalController';


@LoginRegisterModalController()
export default class LoginRegisterModal extends Component {

    render() {

        return (
            <Modal open={this.props.loginFormVisible}
                   onClose={this.props.closeLoginModal}
                   center
                   classNames={
                       {
                           overlay: styles.modalOverlay,
                           modal: styles.modalContent,
                           closeButton: styles.closeButton,
                           closeIcon: styles.closeIcon
                       }
                   }
            >
                {
                    this.props.registerFormVisible
                        ? <RegisterForm
                            closeRegisterForm={this.props.closeLoginModal}
                        />
                        : <LoginForm
                            closeLoginModal = {this.props.closeLoginModal}
                            openRegisterForm={this.props.openRegisterForm}
                        />
                }
            </Modal>
        )
    }
}