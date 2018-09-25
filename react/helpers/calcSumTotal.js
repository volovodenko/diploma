export default function calcSumTotal(cart){
    let sumTotal = 0;

    cart.forEach(item => {
        sumTotal += (item.price * item.buyQuantity);
    });

    return (sumTotal / 100).toFixed(2);
}