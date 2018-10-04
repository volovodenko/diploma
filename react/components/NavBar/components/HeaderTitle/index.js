export default props => {
    let title = null;

    props.carTitle && (title = props.carTitle);
    props.modelTitle && (title = props.modelTitle);
    props.categoryTitle && (title = props.categoryTitle);
    props.subCategoryTitle && (title = props.subCategoryTitle);

    return title;
}