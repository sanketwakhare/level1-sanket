/**
 * Given length of a regular hexagon, your function should return area of the hexagon.
 * Example:
 * Input: areaOfHexagon(10) ––> Output: 259.80
 */

/**
 * Area of Hexagon= 3 * sqrt(3) * a * a /2;
 */
const areaOfHexagon = (a) => {
    const ans = 3 * Math.sqrt(3) * a * a / 2;
    console.log(ans);
    return ans;
}

areaOfHexagon(10);
areaOfHexagon(5);
areaOfHexagon(20);