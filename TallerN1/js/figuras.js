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

const imgUrlGoogleDrive = "https://drive.google.com/uc?id=";

function addingDimensionBoxes() {
    let selectedFigure = {};
    
    hiddenTextStart();

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

    const boxesDimentions = [
        boxSquare,
        boxTriangle,
        boxCircle,
        boxRectangle,
        boxParallelogram,
        boxDiamond,
        boxTrapeze,
        boxPolygon,
    ];

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

    selectedFigure = seachFigureChecked(figures);

    addHiddenBox(boxesDimentions);

    addVisibleBox(selectedFigure, boxesDimentions, figures);
}

function hiddenTextStart() {
    const textStart = document.getElementById("select-figure-text");
    if (!textStart.classList.contains("hidden"))
        textStart.classList.add("hidden");
}

function seachFigureChecked(figures) {
    let selectedFigure = {};
    for (let figure of figures)
        if (figure.checked === true) return (selectedFigure = figure);
}

function addHiddenBox(boxesDimentions) {
    for (box of boxesDimentions) {
        if (box.classList.contains("visible")) {
            box.classList.remove("visible");
            box.classList.add("hidden");
            break;
        }
    }
}

function addVisibleBox(selectedFigure, boxesDimentions, figures) {
    switch (selectedFigure) {
        case figures[0]:
            boxesDimentions[0].classList.remove("hidden");
            boxesDimentions[0].classList.add("visible");
            break;
        case figures[1]:
            boxesDimentions[1].classList.remove("hidden");
            boxesDimentions[1].classList.add("visible");
            break;
        case figures[2]:
            boxesDimentions[2].classList.remove("hidden");
            boxesDimentions[2].classList.add("visible");
            break;
        case figures[3]:
            boxesDimentions[3].classList.remove("hidden");
            boxesDimentions[3].classList.add("visible");
            break;
        case figures[4]:
            boxesDimentions[4].classList.remove("hidden");
            boxesDimentions[4].classList.add("visible");
            break;
        case figures[5]:
            boxesDimentions[5].classList.remove("hidden");
            boxesDimentions[5].classList.add("visible");
            break;
        case figures[6]:
            boxesDimentions[6].classList.remove("hidden");
            boxesDimentions[6].classList.add("visible");
            break;
        case figures[7]:
            boxesDimentions[7].classList.remove("hidden");
            boxesDimentions[7].classList.add("visible");
            break;
    }
}
