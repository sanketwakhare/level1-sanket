/* Given three angles of a triangle, 
your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. 
Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle */

// sum of all angles is 180 degrees
// equilateral - all angles are equal
// isosceles - 2 angles are equal
// scalene triangle - 1 angle > 90 degree

const typeOfTriangle = (a, b, c) => {

    let type = '';

    if (a + b + c !== 180) {
        type = 'Not a Triangle';
    } else if (a === b && b === c) {
        type = 'Equilateral Triangle';
    } else if (a === b || b === c || a === c) {
        type = 'Isosceles Triangle';
    } else {
        type = 'Scalene Triangle';
    }

    console.log(a, b, c, type);
}

typeOfTriangle(10, 40, 50);
typeOfTriangle(40, 100, 40);
typeOfTriangle(30, 60, 90);
typeOfTriangle(60, 60, 60);