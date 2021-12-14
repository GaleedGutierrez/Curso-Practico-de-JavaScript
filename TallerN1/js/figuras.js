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
const triangleArea = (base, height) => base * height / 2;

// Functions circle
const circleDiameter = (radio) => 2 * radio;
const circumference = (radio) => pi * circleDiameter(radio);
const circleArea = (radio) => pi * radio ** 2;

// Code square
console.group("Square");

console.groupEnd();

// Código del triangulo.
console.group("Triangle");

console.groupEnd();

// Código del circulo.
const pi = Math.PI;
console.group("Circle");

console.groupEnd();

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

const imgUrlGoogleDrive = "https://drive.google.com/uc?id="

