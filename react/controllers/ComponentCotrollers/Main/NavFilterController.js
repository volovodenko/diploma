import React, {Component} from 'react';


import NavFilterContainer from '../../../containers/ComponentContainers/Main/NavFilterContainer';


export default () => View => {

    @NavFilterContainer()
    class NavFilterController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                carsVisible: false,
                carTitle: '',
                carSlug: '',

                carModelsVisible: false,
                carModelTitle: '',
                carModelSlug: '',
                carModelClassName: '',

                carCategoryVisible: false,
                carCategoryTitle: '',
                carCategorySlug: '',
                carCategoryClassName: '',
                carCategoryId: 0,

                carSubCategoryVisible: false,
                carSubCategoryTitle: '',
                carSubCategorySlug: '',
                carSubCategoryClassName: '',

                buttonClassName: '',
            };

            this.filter = React.createRef();

            this.handleClickOutside = ::this.handleClickOutside;
        }


        componentWillUnmount() {
            document.removeEventListener('click', this.handleClickOutside, false);
        }


        componentDidMount() {
            document.addEventListener('click', this.handleClickOutside, false);
        }


        render() {
            return <View
                carsLoaded={this.props.carsLoaded}
                carsList={this.props.carsList}
                carModelsFilterIsLoading={this.props.carModelsFilterIsLoading}
                carModelsFilterLoaded={this.props.carModelsFilterLoaded}
                carModelsFilterList={this.props.carModelsFilterList}
                carCategoriesFilterIsLoading={this.props.carCategoriesFilterIsLoading}
                carCategoriesFilterLoaded={this.props.carCategoriesFilterLoaded}
                carCategoriesFilterList={this.props.carCategoriesFilterList}

                setCar={::this.setCar}
                filter={this.filter}
                carsDropDownToggle={::this.carsDropDownToggle}
                carTitle={this.state.carTitle}
                carsVisible={this.state.carsVisible}
                carModelClassName={this.state.carModelClassName}
                carModelsDropDownToggle={::this.carModelsDropDownToggle}
                carModelTitle={this.state.carModelTitle}
                carModelsVisible={this.state.carModelsVisible}
                setCarModel={::this.setCarModel}
                carCategoryClassName={this.state.carCategoryClassName}
                carCategoriesDropDownToggle={::this.carCategoriesDropDownToggle}
                carCategoryTitle={this.state.carCategoryTitle}
                carCategoryVisible={this.state.carCategoryVisible}
                setCarCategory={::this.setCarCategory}
                carSubCategoryClassName={this.state.carSubCategoryClassName}
                carSubCategoriesDropDownToggle={::this.carSubCategoriesDropDownToggle}
                carSubCategoryTitle={this.state.carSubCategoryTitle}
                carSubCategoryVisible={this.state.carSubCategoryVisible}
                carCategoryId={this.state.carCategoryId}
                setCarSubCategory={::this.setCarSubCategory}
                buttonClassName={this.state.buttonClassName}
                buttonLink={this.buttonLink()}
                getParts={::this.getParts}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        handleClickOutside(e) {
            e.composedPath().includes(this.filter.current) || this.toggleAllDropDown();
        }


        toggleAllDropDown(e = null) {
            !(this.state.carsVisible && e !== 'cars') || this.carsDropDownToggle();
            !(this.state.carModelsVisible && e !== 'carModels') || this.carModelsDropDownToggle();
            !(this.state.carCategoryVisible && e !== 'carCategory') || this.carCategoriesDropDownToggle();
            !(this.state.carSubCategoryVisible && e !== 'carSubCategory') || this.carSubCategoriesDropDownToggle();
        }


        carsDropDownToggle() {
            this.setState(state => ({
                carsVisible: !state.carsVisible
            }));

            this.toggleAllDropDown('cars');

        }


        setCar(carId = 0, carTitle = '', carSlug = '') {

            if (carId < 0) { //выбрано "Не найдено"
                return;
            }

            if (this.state.carTitle !== carTitle) { //при смене carTitle
                this.setState(() => (
                    {
                        carModelTitle: '',//модель обнуляем
                        carModelSlug: '',

                        carCategoryTitle: '',//категорию обнуляем,
                        carCategorySlug: '',

                        carSubCategoryTitle: '', //подкатегорию обнуляем
                        carSubCategorySlug: '',

                        carCategoryClassName: '', //обнуляем класс категории
                        carSubCategoryClassName: '', //обнуляем класс подкатегории
                        buttonClassName: '', //обнуляем класс кнопки
                    }
                ));
            }

            this.setState(() => ({carTitle, carSlug}));
            this.carsDropDownToggle();


            //get carTitle models, set className for models div
            let carModelClassName = '';

            if (carId > 0) { //выбрана марка
                carModelClassName = 'enabled';

                const data = {slug: carSlug};
                this.props.getCarModelsFilter(data);
            }

            this.setState(() => ({
                carModelClassName
            }));

        }


        carModelsDropDownToggle() {
            if (this.state.carModelClassName === '') { //если элемент не активен
                return;
            }

            this.setState(state => ({
                carModelsVisible: !state.carModelsVisible
            }));

            this.toggleAllDropDown('carModels'); //все остальные dropDown, кроме carModels, скрыть
        }


        setCarModel(carModelId = 0, carModelTitle = '', carModelSlug = '') {

            if (carModelId < 0) { //выбрано "Не найдено"
                return;
            }

            if (this.state.carModelTitle !== carModelTitle) { //при смене carTitle model
                this.setState(() => (
                    {
                        carCategoryTitle: '',//категорию обнуляем,
                        carCategorySlug: '',

                        carSubCategoryTitle: '', //подкатегорию обнуляем
                        carSubCategorySlug: '',

                        carCategoryClassName: '', //обнуляем класс категории
                        carSubCategoryClassName: '', //обнуляем класс подкатегории
                        buttonClassName: '', //обнуляем класс кнопки
                    }
                ));
            }

            this.setState(() => ({carModelTitle, carModelSlug}));
            this.carModelsDropDownToggle();


            //get carTitle category,  set className for category div
            let carCategoryClassName = '';

            if (carModelId > 0) { //выбрана модель - запрос категорий
                carCategoryClassName = 'enabled';

                const data = {slug: carModelSlug};
                this.props.getCarCategoriesFilter(data);
            }

            this.setState(() => ({
                carCategoryClassName
            }));
        }


        carCategoriesDropDownToggle() {
            if (this.state.carCategoryClassName === '') { //если элемент не активен
                return;
            }

            this.setState(state => ({
                carCategoryVisible: !state.carCategoryVisible
            }));

            this.toggleAllDropDown('carCategory'); //все остальные dropDown, кроме carCategory, скрыть
        }


        setCarCategory(carCategoryId = 0, carCategoryTitle = '', carCategorySlug = '') {
            if (carCategoryId < 0) { //выбрано "Не найдено"
                return;
            }

            if (this.state.carCategoryTitle !== carCategoryTitle) { //при смене carTitle model
                this.setState(() => (
                    {
                        carSubCategoryTitle: '', //подкатегорию обнуляем
                        carSubCategorySlug: '',

                        carSubCategoryClassName: '', //обнуляем класс подкатегории
                        buttonClassName: '', //обнуляем класс кнопки
                    }
                ));
            }

            this.setState(() => ({carCategoryTitle, carCategoryId, carCategorySlug}));
            this.carCategoriesDropDownToggle();


            //set className for subcategory div
            let carSubCategoryClassName = '';

            if (carCategoryId > 0) { //выбрана категория
                carSubCategoryClassName = 'enabled';
            }

            this.setState(() => ({
                carSubCategoryClassName
            }));
        }


        carSubCategoriesDropDownToggle() {
            if (this.state.carSubCategoryClassName === '') { //если элемент не активен
                return;
            }

            this.setState(state => ({
                carSubCategoryVisible: !state.carSubCategoryVisible
            }));

            this.toggleAllDropDown('carSubCategory'); //все остальные dropDown, кроме carSubCategory, скрыть
        }


        setCarSubCategory(carSubCategoryId = 0, carSubCategoryTitle = '', carSubCategorySlug = '') {
            if (carSubCategoryId < 0) { //выбрано "Не найдено"
                return;
            }

            this.setState(() => ({carSubCategoryTitle, carSubCategorySlug}));
            this.carSubCategoriesDropDownToggle();


            //set className for subcategory div
            let buttonClassName = '';

            if (carSubCategoryId > 0) { //выбрана категория
                buttonClassName = 'enabled';
            }

            this.setState(() => ({
                buttonClassName
            }));
        }


        getParts(e) {
            //если элемент не активен
            !(this.state.buttonClassName === '') || e.preventDefault(); //никуда не переходить
        }


        buttonLink() {
            if (!this.state.carSlug || !this.state.carModelSlug
                || !this.state.carCategorySlug || !this.state.carSubCategorySlug
            ) {
                return ''
            }


            return `/catalog/${this.state.carSlug}/${this.state.carModelSlug}/`
                + `${this.state.carCategorySlug}/${this.state.carSubCategorySlug}`
        }


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return NavFilterController;

}