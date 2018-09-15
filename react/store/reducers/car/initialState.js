const initialState = {
    carsList: [
        {
            id: 0,
            title: '',
            slug: ''
        }
    ],
    carsIsLoading: false,
    carsLoaded: false,

    carModelsFilterList: [
        {
            id: 0,
            title: '',
            slug: '',
            car_id: 0,
        }
    ],
    carModelsFilterIsLoading: false,
    carModelsFilterLoaded: false,

    carModelsCatalogList: [
        {
            car: 'initial',
            models: [
                {
                    id: 0,
                    title: '',
                    slug: '',
                    car_id: 0,
                }
            ]
        }
    ],
    carModelsCatalogIsLoading: false,
    carModelsCatalogLoaded: false,
    carModelsCatalogFetchFail: false,

    carCategoriesFilterList: [
        {
            id: 0,
            car_model_id: 0,
            car_category_id: 0,
            parent_id: 0,
            title: '',
            slug: '',

        }
    ],
    carCategoriesFilterIsLoading: false,
    carCategoriesFilterLoaded: false,

    carCategoriesCatalogList: [],
    carCategoriesCatalogIsLoading: false,
    carCategoriesCatalogLoaded: false,
    carCategoriesCatalogFetchFail: false,
};

export default initialState;