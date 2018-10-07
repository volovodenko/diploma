import React, {Component} from 'react';


export default () => View => {

    class PaginationController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                arrayPages: [],
                countPages: 0
            };

        }


        static getDerivedStateFromProps(props) {
            const countPages = Math.ceil(props.totalItemsCount / props.itemsCountPerPage);

            const arrayPages = [];

            let startPage = props.activePage - Math.floor(props.pageRangeDisplayed / 2);
            //если в конце
            startPage = props.activePage >= (countPages - Math.floor(props.pageRangeDisplayed / 2))
                ? countPages - (props.pageRangeDisplayed - 1)
                : startPage;
            //если в начале
            startPage = startPage < 1 ? 1 : startPage;

            let endPage = startPage + (props.pageRangeDisplayed - 1);
            //если в начале
            endPage = endPage < props.pageRangeDisplayed ? props.pageRangeDisplayed : endPage;
            //если в конце
            endPage = endPage > countPages ? countPages : endPage;


            for (let i = startPage; i <= endPage; i++) {
                arrayPages.push(i);
            }


            return {
                arrayPages,
                countPages,
            };
        }


        render() {
            return (this.state.countPages > 1) &&
                <View
                    countPages={this.state.countPages}
                    arrayPages={this.state.arrayPages}
                    firstPage={::this.firstPage}
                    prevPage={::this.prevPage}
                    setPage={::this.setPage}
                    nextPage={::this.nextPage}
                    lastPage={::this.lastPage}
                    activePage={this.props.activePage}
                />
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        setPage(e) {
            //при клике на текущую страницу - никуда не переходим
            if (this.props.activePage !== +e.currentTarget.innerHTML) {
                this.props.onChange(+e.currentTarget.innerHTML);
            }
        }


        prevPage() {
            if (this.props.activePage === 1) {
                return;
            }

            this.props.onChange(this.props.activePage - 1);
        }


        nextPage() {
            if (this.props.activePage === this.countPages) {
                return;
            }

            this.props.onChange(this.props.activePage + 1);
        }

        firstPage() {
            if (this.props.activePage === 1) {
                return;
            }

            this.props.onChange(1);
        }

        lastPage() {
            if (this.props.activePage === this.state.countPages) {
                return;
            }

            this.props.onChange(this.state.countPages);
        }


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return PaginationController;

}