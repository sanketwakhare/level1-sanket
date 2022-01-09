/* Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday. */

const check = (day) => {
    let isWeekEnd = false;
    const temp = day.toLowerCase();
    if (temp === 'Saturday'.toLowerCase() || temp === 'Sunday'.toLowerCase()) {
        isWeekEnd = true;
    } else {
        isWeekEnd = false;
    }
    console.log(`is ${day} weekEnd? -> ${isWeekEnd}`);
}

check('Monday');
check('Tuesday');
check('Wednesday');
check('Thursday');
check('Friday');
check('Saturday');
check('Sunday');