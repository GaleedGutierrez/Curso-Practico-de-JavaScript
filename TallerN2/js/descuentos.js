function subtotalFunction() {
    let inputCuponEmpty = false;
    let isChecked = false;
    const subtotalPrice = parseFloat(subtotal.value);
    // debugger
    totalPrice(subtotalPrice);
    const cupons = generateCupons();
    if (!inputCuponEmpty) {
        for (const cupon of cupons) {
            if (cupon.checked) {
                cuponTOSelected();
                isChecked = true;
                break;
            }
        }
        if (!isChecked)
            inputCuponEmpty = true
    }
    if (inputCuponEmpty && cuponInput.value)
        cuponInputFuction();
}

function totalPrice(subtotalPrice) {
    const total = document.getElementById("total");

    if (subtotalPrice) {
        if (!total.classList.contains("color-white"))
            total.classList.add("color-white");
        total.innerText = `$${subtotalPrice}`;
    } else {
        if (total.classList.contains("color-white"))
            total.classList.remove("color-white");
        total.innerText = "Resultado";
    }
}

function cuponTOSelected() {
    const inputCupon = document.getElementById("cupon-input");
    const subtotalPrice = parseFloat(subtotal.value);
    const cupons = generateCupons();
    const cuponSeleted = seachCuponChecked(cupons);
    switch (cuponSeleted.name) {
        case cupons[0].name:
            inputCupon.value = "TO10";
            break;
        case cupons[1].name:
            inputCupon.value = "TO20";
            break;
        case cupons[2].name:
            inputCupon.value = "TO30";
            break;
        case cupons[3].name:
            inputCupon.value = "TO40";
            break;
        case cupons[4].name:
            inputCupon.value = "TO50";
            break;
        case cupons[5].name:
            inputCupon.value = "TO60";
            break;
        case cupons[6].name:
            inputCupon.value = "TO70";
            break;
        case cupons[7].name:
            inputCupon.value = "TO80";
            break;
    }

    let total = calculateDiscount(cuponSeleted, subtotalPrice);
    totalPrice(total);
}

function generateCupons() {
    let cupons = [];

    const cupon1 = document.getElementById("cupon-1");
    const cupon2 = document.getElementById("cupon-2");
    const cupon3 = document.getElementById("cupon-3");
    const cupon4 = document.getElementById("cupon-4");
    const cupon5 = document.getElementById("cupon-5");
    const cupon6 = document.getElementById("cupon-6");
    const cupon7 = document.getElementById("cupon-7");
    const cupon8 = document.getElementById("cupon-8");

    const cuponOne = {
        name: cupon1.value,
        checked: cupon1.checked,
        discount: 10
    };

    const cuponTwo = {
        name: cupon2.value,
        checked: cupon2.checked,
        discount: 20
    };

    const cuponThree = {
        name: cupon3.value,
        checked: cupon3.checked,
        discount: 30
    };

    const cuponFour = {
        name: cupon4.value,
        checked: cupon4.checked,
        discount: 40
    };

    const cuponFive = {
        name: cupon5.value,
        checked: cupon5.checked,
        discount: 50
    };

    const cuponSix = {
        name: cupon6.value,
        checked: cupon6.checked,
        discount: 60
    };

    const cuponSeven = {
        name: cupon7.value,
        checked: cupon7.checked,
        discount: 70
    };

    const cuponEight = {
        name: cupon8.value,
        checked: cupon8.checked,
        discount: 80
    };

    cupons = [cuponOne, cuponTwo, cuponThree, cuponFour, cuponFive, cuponSix, cuponSeven, cuponEight];

    return cupons;
}

function seachCuponChecked(cupons) {
    let selectedCupon = {};
    for (let cupon of cupons)
        if (cupon.checked === true)
            return (selectedCupon = cupon);
}

function cuponInputFuction() {
    const subtotalPrice = parseFloat(subtotal.value);
    const inputCupon = document.getElementById("cupon-input");
    let discount = {};

    const cupons = generateCupons();
    // debugger;
    for (const cupon of cupons) {
        cupon.checked = false;
    }

    switch (inputCupon.value) {
        case "TO10":
            discount = {
                discount: 10
            };
            break;
        case "TO20":
            discount = {
                discount: 20
            };
            break;
        case "TO30":
            discount = {
                discount: 30
            };
            break;
        case "TO40":
            discount = {
                discount: 40
            };
            break;
        case "TO50":
            discount = {
                discount: 50
            };
            break;
        case "TO60":
            discount = {
                discount: 60
            };
            break;
        case "TO70":
            discount = {
                discount: 70
            };
            break;
        case "TO80":
            discount = {
                discount: 80
            };
            break;
        default:
            discount = {
                discount: parseFloat(inputCupon.value)
            };
            break;
    }

    let total = calculateDiscount(discount, subtotalPrice);
    totalPrice(total);
}
const subtotal = document.getElementById("subtotal-input");
subtotal.addEventListener("keyup", subtotalFunction);

const cuponInput = document.getElementById("cupon-input");
cuponInput.addEventListener("keyup", cuponInputFuction);