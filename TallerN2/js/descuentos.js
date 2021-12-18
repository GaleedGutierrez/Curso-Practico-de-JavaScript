function calculateDiscountedPrice(price, discount) {
    const originalPercentage = 100;
    const percentageDiscountedPrice = originalPercentage - discount;
    const discontedPrice = price * percentageDiscountedPrice / 100;

    return discontedPrice;
}

function startPriceDiscount() {
    const inputPrice = document.getElementById("input-price");
    const inputDiscount = document.getElementById("input-discount");
    
    
    const price = parseFloat(inputPrice.value);
    const discount = parseFloat(inputDiscount.value);
    
    const discountedPrice = calculateDiscountedPrice(price, discount);
    
    resultFinal(discountedPrice);
}

function resultFinal(discountedPrice) {
    const result = document.getElementById("result-price");
    result.innerText = `<h>El precio final con descuento incluido es de $ ${discountedPrice}</h`;
}   

const result = document.getElementById("result-price");