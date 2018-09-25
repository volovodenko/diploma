import React, {Component} from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import ErrorMessageController from '../../controllers/ComponentCotrollers/ErrorMessage/ErrorMessageController';


@ErrorMessageController()
export default class ErrorMessage extends Component {

    render() {
        return (
            <div
                className={
                    classNames(
                        styles.error,
                        this.props.errorActive ? styles.active : null,
                        this.props.errorFixed ? styles.fixed : null
                    )
                }
            >
                {this.props.errorMessage}
            </div>
        )
    }
}