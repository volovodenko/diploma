const initialState = {
    carsList: [{id: 0, title: '', slug: ''}],
    carsIsLoading: false,
    carsLoaded: false,

    carModelsFilterList: [],
    carModelsFilterIsLoading: false,
    carModelsFilterLoaded: false,

    carModelsCatalogList: [],
    carModelsCatalogIsLoading: false,
    carModelsCatalogLoaded: false,
    carModelsCatalogFetchFail: false,

    carCategoriesFilterList: [],
    carCategoriesFilterIsLoading: false,
    carCategoriesFilterLoaded: false,

    carCategoriesCatalogList: [],
    carCategoriesCatalogIsLoading: false,
    carCategoriesCatalogLoaded: false,
    carCategoriesCatalogFetchFail: false,
};

export default initialState;