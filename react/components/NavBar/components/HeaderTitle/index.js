export default props => {
    switch (props) {
        case props.subCategoryTitle:
            return props.subCategoryTitle;

        case props.categoryTitle:
            return props.categoryTitle;

        case props.modelTitle:
            return props.modelTitle;

        case props.carTitle:
            return props.carTitle;

        default:
            return null;
    }
}