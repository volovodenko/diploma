export default number => {
    const lastDigit = number.toString().split('').pop();

    switch (+lastDigit) {
        case 1:
        return 'товар';

        case 2:
        case 3:
        case 4:
            return 'товара';

        default:
            return 'товаров';

    }
}