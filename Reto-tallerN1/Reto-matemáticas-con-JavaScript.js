function calculateHeight(equalSides, diferent) {
    let a = equalSides ** 2;
    let b = diferent ** 2 / 4;
    let result = Math.sqrt(a - b);

    return result;
} 
    

function isIsoselsYesNo(sideA, sideB, sideC) {
    let isEquals = false;
    if(sideA === sideB && sideA != sideC)
        isEquals = true;
    else 
        if(sideB === sideC && sideB != sideA)
            isEquals = true;
        else 
            if(sideA === sideC && sideA != sideB)
                isEquals = true;
            else 
                isEquals = false;
    return isEquals;
}

function isTriangleYesNo(sideA, sideB, sideC) {
    let isTriangleOK = true;
    if(sideA + sideB < sideC)
        isTriangleOK = false;
    else 
        if(sideA + sideC < sideB)
            isTriangleOK = false;
        else 
            if(sideB + sideC < sideA)
                isTriangleOK = false;
    return isTriangleOK;
}

function searchEqualSides(sideA, sideB, sideC) {
    let equalsSides = 0;
    if(sideA === sideB && sideA != sideC)
        equalsSides = sideA;
    else 
        if(sideB === sideC && sideB != sideA)
            equalsSides = sideB;
        else 
            if(sideA === sideC && sideA != sideB)
                equalsSides = sideC;
    return equalsSides;
}

function sideDiferent(sideA, sideB, sideC) {
    let diferent = 0;
    if(sideA !== sideB && sideA !== sideC)
        diferent = sideA;
    else 
        if(sideB !== sideA && sideB !== sideC)
            diferent = sideB;
        else 
            if(sideC !== sideA && sideC !== sideB)
                diferent = sideC;
    return diferent;
}

function result() {
    const sideAInput = document.getElementById("sideA");
    const sideBInput = document.getElementById("sideB");
    const sideCInput = document.getElementById("sideC");
    let result = document.getElementById("result");

    const sideA = parseFloat(sideAInput.value);
    const sideB = parseFloat(sideBInput.value);
    const sideC = parseFloat(sideCInput.value);
    let isIsoseles =  isIsoselsYesNo(sideA, sideB, sideC);
    let isTriangleOk =  isTriangleYesNo(sideA, sideB, sideC);
    let equalSides = searchEqualSides(sideA, sideB, sideC);
    let diferent = sideDiferent(sideA, sideB, sideC);

    const height = calculateHeight(equalSides, diferent);

    isIsoseles && isTriangleOk ? result.innerHTML = `El resultado es: ${height}.` : result.innerHTML = "Verifica los datos.";
}