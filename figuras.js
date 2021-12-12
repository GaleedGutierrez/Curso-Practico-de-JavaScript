// Código del cuadrado.
const squareSide = 5;
const squarePerimeter = squareSide * 4;
const squareArea = squareSide * squareSide;

console.group("Square");
console.log(`The sides of the square measure: ${squareSide}u`);
console.log(`The perimeter of the square is: ${squarePerimeter}u`);
console.log(`The area of the square is: ${squareArea}u^2`);
console.groupEnd();

// Código del triangulo.
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
const triangleArea = triangleBase * triangleHeight / 2;

console.group("Triangle");
console.log(`The sides of the triangle measure: ${triangleSide1}u, ${triangleSide2}u and ${triangleBase}u.`);
console.log(`The height of the triangle is: ${triangleHeight}u`);
console.log(`The perimeter of the triangle is: ${trianglePerimeter}u`);
console.log(`The area of the triangle is: ${triangleArea}u^2`);
console.groupEnd();

// Código del circulo.
const circleRadio = 4;
const circleDiameter = 2 * circleRadio;
const pi = Math.PI;
const circumference = pi * circleDiameter;
const circleArea = pi * circleRadio * circleRadio;

console.group("Circle");
console.log(`The radio of the circle is: ${circleRadio}u.`);
console.log(`The diameter of the circle is: ${circleDiameter}u.`);
console.log(`The circunmference of the circle is: ${circumference}u.`);
console.log(`The area of the circle is: ${circleArea}u^2.`);
console.log(`Pi is: ${pi}.`);
console.groupEnd();
