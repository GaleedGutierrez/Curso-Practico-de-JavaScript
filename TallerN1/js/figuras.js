// Functions squeare
function calculateSquarePerimeter() {
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert(perimeter);
}

function calculateSquareArea() {
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const area = squareArea(value);
    alert(area);
}

const squarePerimeter = (side) => side * 4;
const squareArea = (side) => side ** 2;

// Functions triangle
const trianglePerimeter = (side1, side2, base) => side1 + side2 + base;
const triangleArea = (base, height) => (base * height) / 2;

// Functions circle
const circleDiameter = (radio) => 2 * radio;
const circumference = (radio) => pi * circleDiameter(radio);
const circleArea = (radio) => pi * radio ** 2;

// Code square
// console.group("Square");

// console.groupEnd();

// Código del triangulo.
// console.group("Triangle");

// console.groupEnd();

// Código del circulo.
const pi = Math.PI;
// console.group("Circle");

// console.groupEnd();

// function changeImg() {
//     const inputCheckbox = document.getElementById("selectSquareBox");
//     const srcImag = document.getElementById("selectSquareImg");
//     if (inputCheckbox.checked) {
//         srcImag.src = `${imgUrlGoogleDrive}1ZhsLHLfJt9bpsuYbKVQ_eRk-P8VSmHoI`;
//     }
//     else {
//         srcImag.src = `${imgUrlGoogleDrive}1WlGVAF-hc09y8zUUFX2wB7GXGyUvE0_K`;
//     }
// }

const imgUrlGoogleDrive = "https://drive.google.com/uc?id=";

function addingDimensionBoxes() {
    let selectedFigure;
    const boxSquare = document.getElementById("measurement-square");
    const boxTriangle = document.getElementById("measurement-triangle");
    const boxCircle = document.getElementById("measurement-circle");
    const boxRectangle = document.getElementById("measurement-rectangle");
    const boxParallelogram = document.getElementById(
        "measurement-parallelogram"
    );
    const boxDiamond = document.getElementById("measurement-diamond");
    const boxTrapeze = document.getElementById("measurement-trapeze");
    const boxPolygon = document.getElementById("measurement-polygon");

    const boxesFigures = [
        boxSquare,
        boxTriangle,
        boxCircle,
        boxRectangle,
        boxParallelogram,
        boxDiamond,
        boxTrapeze,
        boxPolygon,
    ];

    for (box of boxesFigures) {
        box.classList.remove("visible");
        box.classList.add("hidden");
    }

    const squareSelected = document.getElementById("squareFigure");
    const triangleSelected = document.getElementById("triangleFigure");
    const circleSelected = document.getElementById("circleFigure");
    const rectangleSelected = document.getElementById("rectangleFigure");
    const parallelogramSelected = document.getElementById(
        "parallelogramFigure"
    );
    const diamondSelected = document.getElementById("diamondFigure");
    const trapezeSelected = document.getElementById("trapezeFigure");
    const polygonSelected = document.getElementById("polygonFigure");

    const figures = [
        squareSelected,
        triangleSelected,
        circleSelected,
        rectangleSelected,
        parallelogramSelected,
        diamondSelected,
        trapezeSelected,
        polygonSelected,
    ];

    for (let figure of figures)
        if (figure.checked === true) 
            selectedFigure = figure;

    switch (selectedFigure) {
        case squareSelected:
            boxSquare.classList.remove("hidden");
            boxSquare.classList.add("visible");
            break;
        case triangleSelected:
            boxTriangle.classList.remove("hidden");
            boxTriangle.classList.add("visible");
            break;
        case circleSelected:
            boxCircle.classList.remove("hidden");
            boxCircle.classList.add("visible");
            break;
        case rectangleSelected:
            boxRectangle.classList.remove("hidden");
            boxRectangle.classList.add("visible");
            break;
        case parallelogramSelected:
            boxParallelogram.classList.remove("hidden");
            boxParallelogram.classList.add("visible");
            break;
        case diamondSelected:
            boxDiamond.classList.remove("hidden");
            boxDiamond.classList.add("visible");
            break;
        case trapezeSelected:
            boxTrapeze.classList.remove("hidden");
            boxTrapeze.classList.add("visible");
            break;
        case polygonSelected:
            boxPolygon.classList.remove("hidden");
            boxPolygon.classList.add("visible");
            break;
    }
}
