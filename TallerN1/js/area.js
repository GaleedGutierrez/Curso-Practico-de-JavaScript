const triangleArea = (base, height) => (base * height) / 2;
const circleArea = (radio) => pi * radio ** 2;

function calculateSquareArea(sides) {
    const area = sides ** 2;
    showResultArea(area);
}

function calculateTriangleArea(sideA, sideB, sideC) {
    const semiPerimeter = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(semiPerimeter*(semiPerimeter-sideA)*(semiPerimeter-sideB)*(semiPerimeter-sideC))
    showResultArea(area);
}

function calculateCircleArea(radio) {
    const area = pi * radio ** 2;
    showResultArea(area);
}

function calculateRectangleParallelogramArea (base, height) {
    const area = base * height;
    showResultArea(area);
}

function calculateDiamondArea(mayor, minor) {
    const area = mayor * minor / 2;
    showResultArea(area);
}

function calculateTrapezeArea(mayorBase, minorBase, height) {
    const area = (mayorBase + minorBase) * height / 2;
    showResultArea(area);
}

function calculatePolygonArea(perimeter, apothema) {
    const area = perimeter * apothema / 2;
    showResultArea(area);
}

function calculateArea() {
    let figures = figuresOptions();
    let figureSelect = seachFigureChecked(figures);
    let valuesSides = valuesInputBoxes();

    selectedCalculateArea(figures, figureSelect, valuesSides);
}




function selectedCalculateArea(figures, figureSelect, valuesSides) {
    switch (figureSelect) {
        case figures[0]:
            let sidesSquare = valuesSides[0].sides;
            calculateSquareArea(sidesSquare);
            break;
        case figures[1]:
            let sideATriangle = valuesSides[1].sideA;
            let sideBTriangle = valuesSides[1].sideB;
            let sideCTriangle = valuesSides[1].sideC;
            calculateTriangleArea(sideATriangle, sideBTriangle, sideCTriangle);
            break;
        case figures[2]:
            let radio = valuesSides[2].radio;
            calculateCircleArea(radio);
            break;
        case figures[3]:
            let sideARectangle = valuesSides[3].sideA;
            let sideBRectangle = valuesSides[3].sideB;
            calculateRectangleParallelogramArea(sideARectangle, sideBRectangle);
            break;
        case figures[4]:
            let baseParallelogram = valuesSides[4].base;
            let heightParallelogram = valuesSides[4].height;
            calculateRectangleParallelogramArea(baseParallelogram, heightParallelogram);
            break;
        case figures[5]:
            let mayorDiagonalDiamond = valuesSides[5].mayorDiagonal;
            let minorDiagonalDiamond = valuesSides[5].minorDiagonal;
            calculateDiamondArea(mayorDiagonalDiamond, minorDiagonalDiamond);
            break;
        case figures[6]:
            let sidebTrapeze = valuesSides[6].sideb;
            let sideBTrapeze = valuesSides[6].sideB;
            let heightTrapeze = valuesSides[6].height;
            calculateTrapezeArea(sideBTrapeze, sidebTrapeze, heightTrapeze);
            break;
        case figures[7]:
            let sidesPolygon = valuesSides[7].sides;
            let numberSidesPolygon = valuesSides[7].numberSides;
            let perimeterPolygon = calculatePolygonPerimeter(sidesPolygon, numberSidesPolygon, "area");
            let apothemaPolygon = valuesSides[7].apothema;
            calculatePolygonArea(perimeterPolygon, apothemaPolygon);
            break;
    }
}
