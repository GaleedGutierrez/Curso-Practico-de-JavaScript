function calculateDiscountedPrice(price, discount) {
    const originalPercentage = 100;
    const percentageDiscountedPrice = originalPercentage - discount;
    const discontedPrice = price * percentageDiscountedPrice / 100;

    return discontedPrice;
}

// const originalPrice = 120;
// const discount = 18;




// console.group("");
// console.log({
//     originalPrice,
//     originalPercentage,
//     discount,
//     percentageDiscountedPrice,
//     discontedPrice
// });
// console.groupEnd();