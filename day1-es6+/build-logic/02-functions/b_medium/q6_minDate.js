/*
Given two dates, your function should return which one comes before the other.
Example:
Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021 */

const minDate = (date1, date2) => {

    // extract day, month and year string
    const dArr1 = date1.split('/');
    const [d1, m1, y1] = dArr1;
    const dArr2 = date2.split('/');
    const [d2, m2, y2] = dArr2;

    // convert to date and compare
    const dt1 = new Date(y1, m1 - 1, d1);
    const dt2 = new Date(y2, m2 - 1, d2);
    const ans = dt1 < dt2 ? dt1 : dt2;

    // format the output date
    const day = String(ans.getDate()).padStart('2', '0');
    const month = String(Number(ans.getMonth()) + 1).padStart('2', '0');
    const year = ans.getFullYear();
    const minDateString = day + "/" + month + "/" + year;
    console.log(minDateString);
    return ans;
}

// tests
minDate('02/05/2021', '24/01/2021');
minDate('02/05/2021', '24/01/2022');