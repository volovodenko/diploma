import React, {Component} from 'react';


import styles from './styles.scss';
import ArrowLeft from './components/ArrowLeft';
import ArrowRight from './components/ArrowRight';
import PageNumbers from './components/PageNumbers';
import PaginationController from '../../controllers/ComponentCotrollers/Pagination/PaginationController';


@PaginationController()
export default class Pagination extends Component {

    render() {
        return (
            <ul className={styles.pagination}>
                {
                    (this.props.activePage > 1) &&
                    <ArrowLeft
                        firstPage={this.props.firstPage}
                        prevPage={this.props.prevPage}
                    />
                }

                <PageNumbers
                    arrayPages={this.props.arrayPages}
                    activePage={this.props.activePage}
                    setPage={this.props.setPage}
                />


                {
                    (this.props.activePage < this.props.countPages) &&
                    <ArrowRight
                        nextPage={this.props.nextPage}
                        lastPage={this.props.lastPage}
                    />
                }

            </ul>

        );
    }
}