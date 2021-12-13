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
