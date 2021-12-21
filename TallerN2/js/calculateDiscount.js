function calculateDiscount(discount, subtotalPrice) {
    const originalPercentage = 100;
    const percentageDiscountedPrice = originalPercentage - discount.discount;
    const discontedPrice = (subtotalPrice * percentageDiscountedPrice) / 100;

    return discontedPrice; 
}
