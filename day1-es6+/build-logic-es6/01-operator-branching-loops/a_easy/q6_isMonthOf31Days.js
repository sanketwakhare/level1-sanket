/* Write program to take a month as an input from the user and find out whether the month has 31 days or not. */
const isMonthOf31Days = (month) => {
    let is31Days = false;
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const year = new Date().getFullYear();
    const noOfDays = new Date(year, month, 0).getDate();
    if (noOfDays === 31) {
        is31Days = true;
    }
    console.log(`${monthNames[month - 1]} ${year} has ${noOfDays} days`);
    return is31Days;
};
isMonthOf31Days(1);
isMonthOf31Days(2);
isMonthOf31Days(3);
isMonthOf31Days(4);