export default props => {
    if (props.subCategoryTitle) {
        return props.subCategoryTitle
    }

    if (props.categoryTitle) {
        return props.categoryTitle;
    }

    if (props.modelTitle) {
        return props.modelTitle;
    }

    if (props.carTitle) {
        return props.carTitle
    }

    return null;
}